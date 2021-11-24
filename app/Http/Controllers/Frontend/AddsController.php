<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Admin\FacilitiesController;
use App\Http\Controllers\Admin\LandTypeController;
use App\Http\Controllers\Admin\ThemeSettingsController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Controller;
use App\Models\Bakhsh;
use App\Models\File;
use App\Models\Mantaghe;
use App\Models\Menu;
use App\Models\Option;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Postmeta;
use App\Models\Shahrestan;
use App\Models\Term;
use App\Models\Termmeta;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Morilog\Jalali\Jalalian;

class AddsController extends Controller
{
    //
    public static function getAllAdds(){
        $post_query = Post::select(['posts.postId'])
            ->where('post_type', 'add')
            ->where('trash',0)
            ->where('status','1')
            ->leftJoin('postmeta', 'posts.postId', '=', 'postmeta.post_id')
            ->leftJoin('post_term', 'posts.postId', '=', 'post_term.post_postId')
            ->groupBy('posts.postId')
            ->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', ['confirm', '2']);
        return $post_query;
    }

    public function getSpeciallAdds($count=5)
    {
        $special_add_metas=['luxe','immediate','changeable','transaction'];

        $adds=static::getAllAdds()->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', ['special', 'on'])->pluck('postId')->toArray();
        $res_array=Post::with('postmetas')->whereIn('postId',$adds)->select(['postId','name','image','slug','updated_at'])->limit($count)->orderBy('updated_at','desc')->get()->toArray();
        $results=[];
        foreach ($res_array as $res){
            $i=[];
            $i['id']=$res['postId'];
            $i['title']=$res['name'];
            $i['image']=$res['mainImg'];
            $i['date']=Jalalian::forge(strtotime($res['updated_at']))->format('%A %d %B %Y');
//            $i['metas']=array_column($res['postmetas'],'meta_value','meta_key');
            $prices=[];
            $i['metas']=[];
            $metas=array_column($res['postmetas'],'meta_value','meta_key');
            foreach ($special_add_metas as $value){
                if(isset($metas[$value])){
                    $i['metas'][$value]=static::getMeta(\App\Http\Controllers\Admin\AddsController::get_meta_array_by_id($value),$metas[$value],$metas);
                }
            }

            if(!empty($i)){
                $results[]=$i;
            }
        }
        return response()->json($results);
    }

    public function getLastAdds($page=1,$posts_per_page=10)
    {
        $page=max(1,(int)$page);
        $start=($page-1)*$posts_per_page;
        $special_add_metas=['luxe','immediate','changeable','transaction'];
        $adds=static::getAllAdds()->pluck('postId')->toArray();
        $res_array=Post::with('postmetas')->whereIn('postId',$adds)->select(['postId','name','image','slug','updated_at'])->offset($start)->limit($posts_per_page)->orderBy('updated_at','desc')->get()->toArray();
        $results=[];
        foreach ($res_array as $res){
            $i=[];
            $i['id']=$res['postId'];
            $i['title']=$res['name'];
            $i['image']=$res['mainImg'];
            $i['date']=Jalalian::forge(strtotime($res['updated_at']))->format('%A %d %B %y');

            $i['metas']=[];
            $metas=array_column($res['postmetas'],'meta_value','meta_key');
            foreach ($special_add_metas as $value){
                if(isset($metas[$value])){
                    $i['metas'][$value]=static::getMeta(\App\Http\Controllers\Admin\AddsController::get_meta_array_by_id($value),$metas[$value],$metas);
                }
            }

            if(!empty($i)){
                $results[]=$i;
            }
        }
        return response()->json($results);
    }

    public static function getMeta($option,$value,$postmetas,$direct=true)
    {
        if(isset($option['single-page']) && !$option['single-page']){
            return null;
        }
        $units=[
            'length'=>'متر',
            'area'=>'متر مربع',
            'price'=>'تومان',
        ];
        $val=[];
        if($option && isset($option['type'])){
            switch ($option['type']){
                case 'text':
                    $val['value']=$value;
                    break;
                case 'number':
                    $val['value']=number_format($value);
                    break;
                case 'textarea':
                    $val['value']=$value;
                    break;
                case 'on-off':
                    if($value=='on'){
                        $val['value']=true;
                    }else{
                        $val['value']=false;
                    }
                    break;
                case 'select':
                    if(isset($option['choices'])){
                        if(!is_array($option['choices']))
                            $option['choices']=json_decode($option['choices'],true);
                        $select=$value;
                        if(isset($option['choices'][$select])){
                            $val['value']=$option['choices'][$select];
                        }
                    }
                    break;
                case 'image':
                    $file=File::find((int)$value);
                    if($file){
                        $val['value']=$file->url;
                    }
                    break;
                case 'gallery':
                    $images=explode(',',$value);
                    $files=[];
                    foreach ($images as $file_id){
                        $file=File::find($file_id);
                        if($file){
                            $files[]=$file->url;
                        }
                    }
                    $val['value']=$files;
                    break;
                case 'term-select':
                    $term_id=$value;
                    $term=Term::find($term_id);
                    $val=[];
                    if($term){
                        $termmetas=array_column($term->termmetas()->where('meta_key','!=','relate_fields')->get()->toArray(),'meta_value','meta_key');
                        $val['value']=$term->term_name;

                        if(isset($option['term_type']) && !empty($termmetas)){
                            $term_type=$option['term_type'];
                            $term_options=$term_type::$extra_meta;

                            $subs=[];
                            if(isset($term_options) && !empty($term_options)) {
                                foreach ($term_options as $child) {
                                    $subs[]=static::getMeta($child,$termmetas[$child['id']],$termmetas);
                                    $i = ['id' => $child['id']];
                                    if (isset($child['label'])) {
                                        $i['label'] = $child['label'];
                                    }
                                    $subs[] = $i;
                                }
                            }
                            if(!empty($subs))
                                $val['subs']=$subs;
                        }
                        $children=$term->getRelatedFields();
                        $related=[];
                        if(isset($children) && !empty($children)) {
                            foreach ($children as $child) {
                                if(isset($postmetas[$child['id']]))
                                    $related[]=static::getMeta($child, $postmetas[$child['id']], $postmetas);

                            }
                        }
                        if(!empty($related))
                            $val['related']=$related;
                    }
                    break;
                case 'year-from':
                    $year=$value;
                    if(isset($option['start']) && $year<$option['start']){
                        $val['value']="قبل از ".$option['start'];
                    }else{
                        $val['value']=$year;
                    }
                    break;
                case 'icon-select':
                    $val['value']=$value;
                    break;
                case 'list-item':
                    $data=json_decode($value,true);
                    $settings=array_column($option['settings'],null,'id');
                    $choices=[];
                    foreach ($data as $datum){
                        $res=[];
                        foreach ($datum as $i=>$j){
                            $x=[];
                            $x['id']=$settings[$i]['id'];
                            if(isset($settings[$i]['label']))
                                $x['label']=$settings[$i]['label'];
                            $x['value']=static::getMeta($settings[$i],$datum[$i],$postmetas,false);
                            $res[$settings[$i]['id']]=$x;
                        }
                        $choices[]=$res;
                    }
                    $val['values']=$choices;
                    break;
                case 'date':
                    $val['value']=$value;
                    break;
                case 'transaction-select':
                    $term_id=$value;
                    $term=Term::find($term_id);
                    $val=[];
                    if($term){
                        $termmetas=array_column($term->termmetas()->where('meta_key','!=','relate_fields')->get()->toArray(),'meta_value','meta_key');
                        $val['value']=$term->term_name;

                        if(isset($option['term_type']) && !empty($termmetas)){
                            $term_type=$option['term_type'];
                            $term_options=$term_type::$extra_meta;

                            $subs=[];
                            if(isset($term_options) && !empty($term_options)) {
                                foreach ($term_options as $child) {
                                    $subs[]=static::getMeta($child,$termmetas[$child['id']],$termmetas);
                                    $i = ['id' => $child['id']];
                                    if (isset($child['label'])) {
                                        $i['label'] = $child['label'];
                                    }
                                    $subs[] = $i;
                                }
                            }
                            if(!empty($subs))
                                $val['subs']=$subs;
                        }
                        $children=$term->getRelatedFields();
                        $related=[];
                        if(isset($children) && !empty($children)) {
                            foreach ($children as $child) {
                                if(isset($postmetas[$child['id']]))
                                    $related[]=static::getMeta($child, $postmetas[$child['id']], $postmetas);

                            }
                        }
                        if(!empty($related))
                            $val['related']=$related;
                    }
                    break;
            }
            if(!empty($val)){
                $val['id'] = $option['id'];
                $val['type'] = $option['type'];
                if (isset($option['label']))
                    $val['label'] = $option['label'];
                if (isset($option['price']))
                    $val['price'] = $option['price'];
                if (isset($option['unit']) && $option['unit'] && isset($units[$option['unit']])) {
                    $val['value'] .= ' ' . $units[$option['unit']];
                }
                return $val;
            }else{
                return null;
            }
        }
    }

    public function getAddInfo($add_id)
    {
        $add=Post::find($add_id);
        if($add){
            $postmetas=array_column($add->postmetas()->get()->toArray(),'meta_value','meta_key');
            if($add->trash==0 && isset($postmetas['confirm']) && $postmetas['confirm']==2 && $add->status==1) {
                $arr=[];
                foreach ($postmetas as $index => $postmeta) {
                    $meta_array = \App\Http\Controllers\Admin\AddsController::get_meta_array_by_id($index);
                    $val = null;
                    if ($meta_array && isset($meta_array['type']) && isset($postmetas[$index])) {
                        $val = static::getMeta($meta_array, $postmetas[$index],$postmetas);
                        if(isset($val)){
                            if(isset($val['related'])){
                                $related=$val['related'];
                                unset($val['related']);
                            }

                            $arr[$index] = $val;
                            if(isset($related))
                                $arr=array_merge($arr,array_column($related,null,'id'));
                            unset($related);
                        }
                    }
                }
                $lists=filter_by_value($arr,'type','list-item');
                $arr=array_diff_key($arr, $lists);

                $prices=filter_by_value($arr,'price','on');
                $arr=array_diff_key($arr, $prices);

//                return $lists;
                $arr['ostan']=['id'=>'ostan','label'=>'استان','value'=>$add->region->getOstan()];
                $arr['shahrestan']=['id'=>'shahrestan','label'=>'شهرستان','value'=>$add->region->getShahrestan()];
                $arr['mantaghe']=['id'=>'mantaghe','label'=>'منطقه','value'=>$add->region->getMantaghe()];
                $arr['bakhsh']=['id'=>'bakhsh','label'=>'بخش','value'=>$add->region->getBakhsh()];;
                $arr['address']=['id'=>'address','label'=>'آدرس','value'=>$postmetas['address']];

                $res=['main'=>$add,'experts'=>$add->experts];
                $res['created_at']=Jalalian::forge(strtotime($add->created_at))->format('%A %d %B %y');
                $res['updated_at']=Jalalian::forge(strtotime($add->updated_at))->format('%A %d %B %y');

                if(!empty($lists)){
                    $res['lists']=$lists;
                }
                if(!empty($prices)){
                    $res['prices']=$prices;
                }
                if(isset($arr['image_gallery']) && isset($arr['image_gallery']['value'])){
                    $res['image_gallery']=$arr['image_gallery']['value'];
                    unset($arr['image_gallery']);
                }
                unset($arr['address']);
                unset($arr['bakhsh']);
                $res['metas']=$arr;
                return response()->json($res);
            }
        }
    }

    public function getAddsTypes()
    {
        $transactions=Term::where('term_type',TransactionController::getTermTypeId())->select(['term_id','term_name'])->get()->toArray();

        $land_types=Term::where('term_type',LandTypeController::getTermTypeId())->select(['term_id','term_name'])->get()->toArray();

        array_walk($transactions,function (&$val){
            if(isset($val['related'])){
                $val['related']=array_filter($val['related'],function ($value){
                    return (isset($value['search-filter']) && $value['search-filter']=='on');
                });
            }
        });
        array_walk($land_types,function (&$val){
            if(isset($val['related'])){
                $val['related']=array_filter($val['related'],function ($value){
                    return (isset($value['search-filter']) && $value['search-filter']=='on');
                });
            }
        });

        $all_metas=\App\Http\Controllers\Admin\AddsController::get_all_metas();
        $all_metas=array_filter($all_metas,function (&$val){
            return (isset($val['search-filter']) && $val['search-filter']);
        });

        array_walk($all_metas,function (&$val){
            if(isset($val['type']) && $val['type']=='year-from'){
                $val['end']=(string)Jalalian::fromCarbon(Carbon::now())->getYear();
            }
        });

        return response()->json([
            'global_filters'=>array_column($all_metas,null,'id'),
            'transactions'=>array_column($transactions,null,'term_id'),
            'land_types'=>array_column($land_types,null,'term_id'),
        ]);
    }

    public function getCustomAdds(Request $request,$page=1,$posts_per_page=10)
    {
        $page=max(1,(int)$page);
        $start=($page-1)*$posts_per_page;
        $special_add_metas=['luxe','immediate','changeable','transaction'];
        $post_query=static::getAllAdds();
        if($request->has('transaction')){
            $post_query->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', ['transaction', (int)$request->input('transaction')]);
        }
        if($request->has('land_type')){
            $post_query->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', ['land_type', (int)$request->input('land_type')]);
        }
        if($request->has('metas')){
            $meta=$request->input('metas');
            foreach ($meta as $index=>$value){
                if(is_array($value)){
                    if(isset($value['from']) && isset($value['to'])){
                        $post_query->havingRaw('sum(case when meta_key = ? and meta_value > ? and meta_value < ? then 1 else 0 end) > 0', [$index, (int)$value['from'],(int)$value['to']]);
                    }elseif(isset($value['from'])){
                        $post_query->havingRaw('sum(case when meta_key = ? and meta_value > ? then 1 else 0 end) > 0', [$index, (int)$value['from']]);
                    }elseif(isset($value['to'])){
                        $post_query->havingRaw('sum(case when meta_key = ? and meta_value < ? then 1 else 0 end) > 0', [$index, (int)$value['to']]);
                    }
                }else{
                    $post_query->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', [$index, $value]);
                }
            }
        }
        if($request->has('ids')){
            $ids=$request->input('ids');
            $post_query->whereIn('postId',$ids);
        }
        if($request->has('mantaghe')){
            $mantaghe=Mantaghe::firstWhere('Title',$request->input('mantaghe'));
            if($mantaghe){
                $mantaghe_string='%"mantaghe":'.$mantaghe->ID.'}';
                $post_query->havingRaw('sum(case when meta_key = ? and meta_value like ? then 1 else 0 end) > 0', ['region', $mantaghe_string]);
            }
        }

        $adds=$post_query->pluck('postId')->toArray();
        $res_array=Post::with('postmetas')->whereIn('postId',$adds)->select(['postId','name','image','slug','updated_at'])->offset($start)->limit($posts_per_page)->orderBy('updated_at','desc')->get()->toArray();
        $results=[];
        foreach ($res_array as $res){
            $i=[];
            $i['id']=$res['postId'];
            $i['title']=$res['name'];
            $i['image']=$res['mainImg'];
            $i['date']=Jalalian::forge(strtotime($res['updated_at']))->format('%A %d %B %Y');

            $i['metas']=[];
            $i['related']=[];
            $metas=array_column($res['postmetas'],'meta_value','meta_key');

            foreach ($special_add_metas as $value){
                if(isset($metas[$value])){
                    $x=static::getMeta(\App\Http\Controllers\Admin\AddsController::get_meta_array_by_id($value),$metas[$value],$metas);
                    if(isset($x)){
                        if(isset($x['related'])){
                            $i['related']=array_merge($i['related'],filter_by_value($x['related'],'price','on'));
                            unset($x['related']);
                        }
                        $i['metas'][$value]=$x;
                    }
                }
            }

            if(!empty($i)){
                $results[]=$i;
            }
        }
        return response()->json($results);
    }

//    menu functions
    public function showMenuByname($name)
    {
        $menu=Menu::where('name',$name);
        if ($menu && !empty($menu)){
            $listArray=json_decode($menu->pluck('json')->first());
            $list=[];
            $this->listify($list,$listArray);
            return $list;
        }
    }

    public function listify(&$list,$json)
    {
        if (is_array($json) && count($json)>0){
            foreach ($json as $item){
                $case=[];
                $case['link-text']=$item->name;
                $case['list-class']=property_exists($item,'class')?$item->class:'';
                $type=$item->type;
                $id=$item->id;
                $case['link-href']=$this->getItemUrl($type,$id);
//                $html.="<li class='$class'><a href='$href'>$name</a>";
                if (property_exists($item,'children')){
                    $this->listify($list,$item->children);
                }
//                $html.="</li>";
                $list[]=$case;
            }
        }
    }

    public function getItemUrl($type,$id)
    {
        $url='123';
        return $url;
    }

//    option functions
    public function getOptions()
    {
        $my_options=array_column(Option::all()->toArray(),'value','name');
        $site_options=ThemeSettingsController::$site_options;
        $options=array_column($site_options,null,'id');
        $res=[];
        foreach ($options as $index=>$option){
            if(isset($my_options[$index])){
                $meta=static::getMeta($option,$my_options[$index],$my_options);
                if(isset($meta)){
                    $res[]=$meta;
                }
            }
        }
        return response()->json(['options'=>array_column($res,null,'id')]);

    }

    public function getFavoriteAdds($page=1,$posts_per_page=10)
    {
        $page=max(1,(int)$page);
        $start=($page-1)*$posts_per_page;
        $special_add_metas=['luxe','immediate','changeable','transaction'];
        $favorite_adds=auth()->user()->favorites()->pluck('postId')->toArray();

        $favorite_allow_adds = Post::select(['posts.postId'])
            ->where('post_type', 'add')
            ->where('trash',0)
            ->where('status','1')
            ->whereIn('postId',$favorite_adds)
            ->leftJoin('postmeta', 'posts.postId', '=', 'postmeta.post_id')
            ->leftJoin('post_term', 'posts.postId', '=', 'post_term.post_postId')
            ->groupBy('posts.postId')
            ->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', ['confirm', '2'])
            ->pluck('postId')->toArray();

        $res_array=Post::with('postmetas')->whereIn('postId',$favorite_allow_adds)->select(['postId','name','image','slug','updated_at'])->offset($start)->limit($posts_per_page)->orderBy('updated_at','desc')->get()->toArray();
        $results=[];
        foreach ($res_array as $res){
            $i=[];
            $i['id']=$res['postId'];
            $i['title']=$res['name'];
            $i['image']=$res['mainImg'];
            $i['date']=Jalalian::forge(strtotime($res['updated_at']))->format('%A %d %B %Y');
//            $i['metas']=array_column($res['postmetas'],'meta_value','meta_key');
            $prices=[];
            $i['metas']=[];
            $metas=array_column($res['postmetas'],'meta_value','meta_key');
            foreach ($special_add_metas as $value){
                if(isset($metas[$value])){
                    $i['metas'][$value]=static::getMeta(\App\Http\Controllers\Admin\AddsController::get_meta_array_by_id($value),$metas[$value],$metas);
                }
            }

            if(!empty($i)){
                $results[]=$i;
            }
        }
        return response()->json($results);
    }

    public function add_to_favorites(Request $request)
    {
        $adds=$request->input('adds');
        $favorite_adds=auth()->user()->favorites()->pluck('postId')->toArray();

        $favorite_allow_adds = Post::select(['posts.postId'])
            ->where('post_type', 'add')
            ->where('trash',0)
            ->where('status','1')
            ->whereNotIn('postId',$favorite_adds)
            ->whereIn('postId',$adds)
            ->leftJoin('postmeta', 'posts.postId', '=', 'postmeta.post_id')
            ->leftJoin('post_term', 'posts.postId', '=', 'post_term.post_postId')
            ->groupBy('posts.postId')
            ->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', ['confirm', '2'])
            ->pluck('postId')->toArray();

        auth()->user()->favorites()->attach($favorite_allow_adds);

    }

//    add adds
    public function getOstans(Request $request){
        return response()->json(Ostan::all());
    }

    public function getShahrestans(Request $request){
        if ($request->has('ostan')){
            $ostan_id=$request->input('ostan');
            $ostan=Ostan::find($ostan_id);
            if($ostan){
                return response()->json($ostan->shahrestans);
            }else{
                return response()->json([]);
            }
        }
    }

    public function getManategh(Request $request){
        if ($request->has('shahrestan')){
            $shahrestan_id=$request->input('shahrestan');
            $shahrestan=Shahrestan::find($shahrestan_id);
            if($shahrestan){
                return response()->json($shahrestan->manategh);
            }else{
                return response()->json([]);
            }
        }
    }

    public function getBakhshs(Request $request){
        if ($request->has('mantaghe')){
            $mantaghe_id=$request->input('mantaghe');
            $mantaghe=Mantaghe::find($mantaghe_id);
            if($mantaghe){
                return response()->json($mantaghe->bakhshs);
            }else{
                return response()->json([]);
            }
        }
    }

    public function getManateghLike(Request $request){
        if ($request->has('search')){
            $search=$request->input('search');
            $manategh=Mantaghe::where('Title','like',"%$search%")->select(['ID','Title'])->get();
            if($manategh){
                return response()->json($manategh);
            }else{
                return response()->json([]);
            }
        }
    }

    public function getAddsTermAndMeta()
    {
        $meta_value=\App\Http\Controllers\Admin\AddsController::$meta_value;
        foreach ($meta_value as $index=>$item) {
            if(isset($item['content'])){
                foreach ($item['content'] as $index1=>$content){
                    if(isset($content['front-adds']) && !$content['front-adds']){
                        unset($meta_value[$index]['content'][$index1]);
                        continue;
                    }
                    if(isset($content['type']) && $content['type']=='list-item'){
                        foreach ($content['settings'] as $index2=>$setting){
                            static::applyChangeToMetaArray($meta_value[$index]['content'][$index1]['settings'][$index2]);
                        }
                    }else{
                        static::applyChangeToMetaArray($meta_value[$index]['content'][$index1]);
                    }
                }

                if(count($meta_value[$index]['content'])==0){
                    unset($meta_value[$index]);
                    continue;
                }
            }
        }
        $support_terms=\App\Http\Controllers\Admin\AddsController::$support_terms;
        $terms=[];
        foreach ($support_terms as $term=>$val){
            $terms[]=[
                'label'=>$term::$view_labels['label'],
                'choices'=>array_column($term::getTree(),'term_name','term_id'),
            ];
        }
        return response()->json(['metas'=>$meta_value,'terms'=>$terms]);
    }

    public static function applyChangeToMetaArray(&$content)
    {
        if(isset($content['type']) && $content['type']=='term-select'){
            $term_type=$content['term_type'];
            $terms=$term_type::getTree();
            if($terms){
                $terms=array_column($terms,'term_name','term_id');
            }
            $content['choices']=$terms;
        }elseif (isset($content['type']) && $content['type']=='transaction-select'){
            $transactions=Term::where('term_type',TransactionController::getTermTypeId())->select(['term_id','term_name'])->get()->toArray();
            array_walk($transactions,function (&$val){
                if(isset($val['related'])){
                    $val['related']=array_filter($val['related'],function ($value){
                        return (isset($value['search-filter']) && $value['search-filter']=='on');
                    });
                }
            });
            $content['choices']=$transactions;
        }elseif (isset($content['type']) && $content['type']=='year-from'){
            $end = Jalalian::fromCarbon(Carbon::now())->getYear();
            $content['end']=(string)$end;
        }

    }

    public function register_adds(Request $request)
    {
        $credentials=array(
            'description'=>request()->input('description'),
//            'image'=>request()->input('mainImage'),
        );

//        return response()->json($request->all());
//        if($request->has('files')){
//            $files = $request->file('files');
//            return response()->json($files);
//        }

        $rules=array_merge(...array_column(\App\Http\Controllers\Admin\AddsController::get_all_metas(),'validate_rule'));
        $messages=array_merge(...array_column(\App\Http\Controllers\Admin\AddsController::get_all_metas(),'validate_message'));
        $rules['address']='required';
        $messages['address.required']='وارد کردن آدرس الرامی است';

        $validator=Validator::make($request->input('metas'),$rules,$messages);
        if ($validator->fails()) {
            return response()->json(['error'=>true,'msg'=>$validator->errors()]);
        }

        $name=[];
        if($request->has('metas')){
            $metas=$request->input('metas');
            if(isset($metas['transaction']) && isset($metas['land_type'])){
                $transaction=Term::find($metas['transaction']);
                $land_type=Term::find($metas['land_type']);
                if($transaction){
                    $name[]=$transaction->term_name;
                }else{
                    $name[]='معامله';
                }
                if($land_type){
                    $name[]=$land_type->term_name;
                }else{
                    $name[]='ملک';
                }
                if(isset($metas['area'])){
                    $name[]=$metas['area'].' متری';
                }
                if(isset($metas['region'])){
                    if(isset($metas['region']) && isset($metas['region']['bakhsh']) && $bakhsh=Bakhsh::find($metas['region']['bakhsh'])){
                        $name[]=$bakhsh->Title;
                    }elseif(isset($metas['region']) && isset($metas['region']['mantaghe']) && $mantaghe=Mantaghe::find($metas['region']['mantaghe'])){
                        $name[]=$mantaghe->Title;
                    }elseif(isset($metas['region']) && isset($metas['region']['shahrestan']) && $shahrestan=Shahrestan::find($metas['region']['shahrestan'])){
                        $name[]=$shahrestan->Title;
                    }elseif(isset($metas['region']) && isset($metas['region']['ostan']) && $ostan=Ostan::find($metas['region']['ostan'])){
                        $name[]=$ostan->Title;
                    }
                }
            }
        }

        $credentials['author']=Auth::id();

        $credentials['post_type']=\App\Http\Controllers\Admin\AddsController::$post_type;
        $credentials['name']=(count($name)>0)?implode(' ',$name):'ثبت ملک با اطلاعات ناقص';
        $adds_obj=new \App\Http\Controllers\Admin\AddsController();
        $credentials['slug']=$adds_obj->uniqueSlug($credentials['name']);

        $new_post = Post::create($credentials);

        if ($new_post) {
            if ($request->has('terms')){
                $terms=$request->input('terms');
                $new_post->terms()->sync($terms);
            }
            if ($request->has('metas')){
                $postMetas=$request->input('metas');
                if (isset($postMetas['related-to'])) {
                    foreach ($postMetas['related-to'] as $index => $val) {
                        if (!isset($postMetas[$index])) {
                            unset($postMetas['related-to'][$index]);
                        } else {
                            foreach ($val as $i=>$j){
                                $relate_fields_object=Termmeta::where('term_id',$i)->firstWhere('meta_key','relate_fields');
                                if ($relate_fields_object){
                                    $f=array_column(json_decode($relate_fields_object->meta_value),'id');
                                }
                                if (!empty($f)) {
                                    if(isset($x)){
                                        foreach ($j as $x => $y) {
                                            if (!in_array($x,$f)) {
                                                unset($val[$i][$x]);
                                            }
                                        }
                                    }
                                }
                            }
                            if(isset($val) && isset(array_values($val)[0])){
                                $postMetas = array_merge($postMetas, array_values($val)[0]);
                            }
                        }
                    }
                }
                unset($postMetas['related-to']);

                if (!empty($postMetas)){
                    $sync=array();
                    foreach ($postMetas as $index=>$postMeta){
                        $meta=new Postmeta();
                        $meta->meta_key=$index;
                        if (is_array($postMeta)) {
                            if($index=='region'){
                                array_walk($postMeta,function (&$val){
                                    $val=(int)$val;
                                });
                                $meta->meta_value = json_encode($postMeta);
                            }else{
                                $meta->meta_value = json_encode(array_values($postMeta));
                            }
                        }else {
                            $meta->meta_value = $postMeta;
                        }
                        $sync[] = $meta;
                    }
                    $new_post->postmetas()->saveMany($sync);
                }
            }
//            if($request->has('files')){
//                $files = $request->file('files');
//                $dir = storage_path('app/public/temporary');
//
//                if (!file_exists($dir)) {
//                    mkdir($dir, 0755, true);
//                }
//                foreach ($files as $file){
//                    $name = time() . '.' . $file->extension();;
//                    $name = str_lreplace('.' . $file->extension(), '_' . time() . '.' . $file->extension(), $name);
//                    $type = $file->getMimeType();
//                    $size = $file->getSize();
//
//                    if ($file->move($dir, $name)) {
//
//                    }
//                }
//            }

            \App\Http\Controllers\Admin\AddsController::reset_confirm($new_post->postId);

            return response()->json(['success'=>true]);
        }
    }

    public function show_user_adds(Request $request)
    {
//        static::getMeta(\App\Http\Controllers\Admin\AddsController::get_meta_array_by_id($value),$metas[$value],$metas)
        $my_adds=Post::where('post_type',\App\Http\Controllers\Admin\AddsController::$post_type)->where('author',Auth::id())->whereIn('trash',[0,2])->get();
        foreach ($my_adds as $index=>$add){
            $arr=[];
            $postmetas=$add->postmetas->toArray();
            foreach ($postmetas as $postmeta){
                if($meta=static::getMeta(\App\Http\Controllers\Admin\AddsController::get_meta_array_by_id($postmeta['meta_key']),$postmeta['meta_value'],$postmeta)){
                    $arr[$postmeta['meta_key']]=$meta;
                }
            }
            $my_adds[$index]['info']=$arr;
        }
        return response()->json($my_adds);
    }

    public function get_add_info(Request $request,$add_id)
    {
        $add=Post::where('post_type',\App\Http\Controllers\Admin\AddsController::$post_type)->firstWhere('postId',$add_id);
//        $metas=$add->postmetas->pluck('meta_value','meta_key');
        $metas=Post::where('post_type',\App\Http\Controllers\Admin\AddsController::$post_type)->firstWhere('postId',$add_id)->postmetas->map(function ($meta){
            if($meta->meta_key=='region'){
                $meta->meta_value=json_decode($meta->meta_value);
            }
            return $meta;

        })->pluck('meta_value','meta_key');
        return response()->json(['adds'=>$add,'metas'=>$metas]);
    }

}
