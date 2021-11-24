<?php

namespace App\Http\Controllers\Admin\API;

use App\Classes\OptionTree;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\File;
use App\Models\Mantaghe;
use App\Models\Menu;
use App\Models\Metabox;
use App\Models\Option;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Postmeta;
use App\Models\Setting;
use App\Models\Shahrestan;
use App\Models\Term;
use App\Models\Term_type;
use App\Models\Usermeta;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;
use Morilog\Jalali\Jalalian;
use SoapClient;
use Intervention\Image\Facades\Image;

class AjaxController extends Controller
{
    //
    public function findCat(Request $request)
    {
        if ($request->has('cats'))
            $cats=$request->input('cats');

        $allCats=array();
        $this->getCategories($allCats);
        if ($request->has('searchCat')) {
            filter_inputs($allCats, $request->input('searchCat'));
            $html = '';
            if (isset($allCats) && !empty($allCats)) {
                foreach ($allCats as $index => $cat) {
                    $html .= "<div class='form-check'>";
                    $checked=(isset($cats) && in_array($cat['term_id'], $cats)) ? 'checked' : '';
                    $html .= "<input name='cats[]' class='form-check-input' type = 'checkbox' value = '" . $cat['term_id'] . "' " . $checked . " id = 'defaultCheck$index'>";
                    $html .= "<label class='form-check-label' for='defaultCheck1' >";
                    $html .= $cat['term_name'];
                    $html .= "</label ></div >";
                }
            }
            return json_encode(array(
                'success'=>true,
                'msg'=>$html
            ));
        }
    }

    public function findProductCat(Request $request)
        {
            if ($request->has('cats'))
                $cats=$request->input('cats');

            $allCats=array();
            $this->getCategories($allCats,0,'product_cat');
            if ($request->has('searchCat')) {
                filter_inputs($allCats, $request->input('searchCat'));
                $html = '';
                if (isset($allCats) && !empty($allCats)) {
                    foreach ($allCats as $index => $cat) {
                        $html .= "<div class='form-check'>";
                        $checked=(isset($cats) && in_array($cat['term_id'], $cats)) ? 'checked' : '';
                        $html .= "<input name='cats[]' class='form-check-input' type = 'checkbox' value = '" . $cat['term_id'] . "' " . $checked . " id = 'defaultCheck$index'>";
                        $html .= "<label class='form-check-label' for='defaultCheck1' >";
                        $html .= $cat['term_name'];
                        $html .= "</label ></div >";
                    }
                }
                return json_encode(array(
                    'success'=>true,
                    'msg'=>$html
                ));
            }
        }

    public function checkTagEnd(Request $request)
    {
        $tagId=Term_type::where('term_type_name', 'tag')->first()->term_type_id;
        $tags=array_values(Term::where('term_type',$tagId)->get()->pluck('term_name')->toArray());
        if (!in_array($request->input('item'),$tags)){
            echo '0';
        }
    }

    public function getCategories(&$output, $level = 0, $term_type = 'category')
    {
        $cat = Term_type::where('term_type_name', $term_type)->first();
        $terms = (collect($cat->terms()->where('parent', $level)->orderBy('parent')->get())->toArray());
        foreach ($terms as $term) {
            $termItem = Term::find($term['term_id']);
            if ($termItem)
                $output[] = $termItem->toArray();
            $this->getCategories($output, $term['term_id'], $term_type);
        }
    }

    public function ajaxAddPostsToMenu(Request $request)
    {
        $selects=$request->input('selects');
        $data=array();
        foreach ($selects as $select){
            $postItem=Post::find($select);
            if ($postItem){
                $data[]=array(
                    'type'=>'post',
                    'id'=>$postItem->postId,
                    'name'=>$postItem->name,
                    'class'=>'',
                );
            }
        }

        return json_encode($data);
    }

    public function ajaxAddTermsToMenu(Request $request)
    {
        $selects=$request->input('selects');
        $data=array();
        foreach ($selects as $select){
            $termItem=Term::find($select);
            if ($termItem){
                $data[]=array(
                    'type'=>'term',
                    'id'=>$termItem->term_id,
                    'name'=>$termItem->term_name,
                    'class'=>'',
                    'parent'=>$termItem->parent,
                );
            }
        }

        $sortData=array();
        $this->sortTerms($data,$sortData);

        return json_encode($sortData);
    }

    public function sortTerms($datas,&$output,$first=0)
    {
        if (count($datas)>0){
            foreach ($datas as $data){
                $this->setCatLevel($output,$datas,$data);
            }
        }
    }

    public function setCatLevel(&$output,$datas,$data,$first=0)
    {
        if (empty(filter_by_value($output,'id',$data['id']))) {
            $data['level'] = $first;
            $output[] = $data;
            $filterVals = array_values(filter_by_value($datas, 'parent', $data['id']));

            if (!empty($filterVals)) {
                foreach ($filterVals as $filterVal) {
                    $this->setCatLevel($output,$datas,$filterVal, $first + 1);
                }
            }
        }
    }

    public function storeMenu(Request $request)
    {
        if ($request->has('name') && $request->has('json')){
            if ($request->input('name')!='' && $request->input('json')!=''){
                $credentials=array(
                    'name'=>$request->input('name'),
                    'json'=>json_encode($request->input('json'))
                );
                $new_menu=Menu::create($credentials);
                if ($new_menu){
                    return json_encode(array('success'=>true,'msg'=>'فهرست جدید با موفقیت ایجاد شد','result'=>$new_menu->toArray()));
                }
                return json_encode(array('error'=>true,'msg'=>'مشکلی در ثبت منو به وجود آمده است. مجددا تلاش کنید'));
            }
            return json_encode(array('error'=>true,'msg'=>'اطلاعات فهرست را کامل کنید'));
        }
        return json_encode(array('error'=>true,'msg'=>'درخواست شما معتبر نیست'));
    }

    public function editMenu($menu_id)
    {
        $curr=Menu::find(intval($menu_id));
        if ($curr){
            $info=array(
                'id'=>$curr->id,
                'name'=>$curr->name,
                'json'=>json_decode($curr->json),
                );
            return json_encode(array('success'=>true,'result'=>$info));
        }
        return json_encode(array('error'=>true,'msg'=>'یک فهرست جهت ویرایش انتخاب کنید'));
    }

    public function updateMenu(Request $request)
    {
        if ($request->has('curr') && $request->has('name') && $request->has('json')){
            if (intval($request->input('curr'))>0 && $request->input('name')!='' && $request->input('json')!=''){

                $menuItem = Menu::find($request->input('curr'));
                $credentials=array(
                    'name'=>$request->input('name'),
                    'json'=>json_encode($request->input('json'))
                );
                $updateResult = $menuItem->update($credentials);
                if ($updateResult)
                return json_encode(array('success'=>true,'msg'=>'فهرست شما با موفقیت به روز رسانی شد','result'=>$menuItem->toArray()));

            }
            return json_encode(array('error'=>true,'msg'=>'اطلاعات فهرست را کامل کنید'));
        }
        return json_encode(array('error'=>true,'msg'=>'درخواست شما معتبر نیست'));
    }

    public function deleteMenu(Request $request)
    {
        if ($request->has('curr') && intval($request->input('curr'))>0){
            $menu=Menu::find(intval($request->input('curr')));
            if ($menu and $menu instanceof Menu){
                $menu->delete();
                return array('success'=>true,'msg'=>'فهرست مورد نطر با موفقیت حذف شد');
            }
            return array('error'=>true,'msg'=>'فهرست انتخابی یافت نشد');
        }
        return array('error'=>true,'msg'=>'فهرستی برای حذف انتخاب نشده است!!!');
    }

    public function addItemList1(Request $request)
    {
        if ($request->has('location') && $request->has('num')){
            ob_start();
            $num=$request->input('num');
            $location=$request->input('location');
            $option=Setting::firstWhere('location',$location);
            if ($option){
                $settings=json_decode($option->json,true)['settings'];
            ?>
            <div class="card option-list-item">
                <div class="card-header text-right">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn  btn-danger"><i class="fa fa-trash m-1"></i></button>
                        <button type="button" class="btn  btn-secondary"><i class="fa fa-edit m-1"></i></button>
                    </div>
                </div>
                <div class="card-body">
                <?php foreach ($settings as $value): ?>
                    <?php $id = $value['id'];
                    unset($value['id']);
                    $json = $value;
                    $newObj=new ThemeSettingsController();
                    $newObj->showSingleSetting("{$location}[$num][$id]", (object)$json, ''); ?>
                <?php endforeach; ?>
                </div>
            </div>
    <?php
            echo ob_get_clean();
            }
        }
    }

    public function addItemList(Request $request){
        if ($request->has('type')){
            $type=$request->input('type');
            $num=$request->input('num');
            if ($type=='post_meta'){
                if($request->has('option')){
                    $post_meta=true;
                    $option=json_decode($request->input('option'),true);
                }
            }else{
                $post_meta=false;
                $options=ThemeSettingsController::$site_options;
                $option_id = $request->input('id');
                $optionInfo = array_filter($options, function ($val) use ($option_id) {
                    return isset($val['id']) && $val['id'] == $option_id;
                });
                $option = (!empty($optionInfo)) ? array_values($optionInfo)[0] : $optionInfo;
            }

            echo OptionTree::addOptionToListItem($option,false,$num,$post_meta,true);
        }
    }

    public function addItemListToPostMeta(Request $request)
        {
            if ($request->has('location') && $request->has('num')){
                ob_start();
                $num=$request->input('num');
                $location=$request->input('location');
                $option=Metabox::firstWhere('location',$location);
                if ($option){
                    $settings=json_decode($option->json,true)['settings'];
                ?>
                <div class="card option-list-item">
                    <div class="card-header text-right">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn  btn-danger"><i class="fa fa-trash m-1"></i></button>
                            <button type="button" class="btn  btn-secondary"><i class="fa fa-edit m-1"></i></button>
                        </div>
                    </div>
                    <div class="card-body">
                    <?php foreach ($settings as $value): ?>
                        <?php $id = $value['id'];
                        unset($value['id']);
                        $json = $value;
                        $newObj=new PostsController();
                        $newObj->showSingleSetting("meta[{$location}][{$num}][{$id}]", (object)$json, '',true); ?>
                    <?php endforeach; ?>
                    </div>
                </div>
        <?php
                echo ob_get_clean();
                }
            }
        }

    public function ajaxUploadImage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'file.*' => 'mimetypes:image/*',
        ],[
            'file.*.mimetypes'    => 'نوع فرمت ارسال شده ساپورت نمی شود',
        ]);
        if ($validator->fails()) {
            return response()->json(['message'=> $validator->errors(), 'file' => "test"], 400);
        }
        $files=array();
        $file1 = $request->file('file');
        foreach ($file1 as $file) {
            $name = $file->getClientOriginalName();
            $name = str_lreplace('.' . $file->extension(), '_' . time() . '.' . $file->extension(), $name);
            $name=str_replace(' ','_',$name);
            $type = $file->getMimeType();
            $size = $file->getSize();
            $now = date('Y/m/d');
            $dir = storage_path( 'app/public/'.$now);
            $thumb_dir = storage_path( 'app/public/thumbnails/'.$now);

            if (!file_exists($dir)) {
                mkdir($dir, 0755, true);
            }
            if (!file_exists($thumb_dir)) {
                mkdir($thumb_dir, 0755, true);
            }
            if ($file->move($dir, $name)) {
                $credentials = array(
                    'file_name' => $name,
                    'file_type' => $type,
                    'file_size' => $size,
                    'user_upload' => Auth::id(),
                    'file_path' => $now,
                );
                Image::make($dir.'/'.$name)->resize(300,300)->save($thumb_dir.'/'.$name);

                $new_file = File::create($credentials);
                if ($new_file) {
                    $files[] = $new_file->file_id;
                }
            }
        }
        $file2 = File::orderBy('created_at','desc')->limit(15)->get();
        $returnHTML = view('admin.lib_files',["files"=>$file2,"new_files"=>$files])->render();
        return response()->json(['success' => $files,"html"=>$returnHTML]);
    }

    public function getCommentById(Request $request){
        $comment_id=$request->input('comment');
        $comment=Comment::find($comment_id);
        if ($comment){
            return json_encode(array(
                'text'=>$comment->comment_text,
                'status'=>$comment->comment_status,
            ));
        }
    }

    public function reply(Request $request){
        $reply_comment=$request->input('reply-comment');
        $comment=$request->input('comment');
        $comment_item=Comment::find($comment);
        if ($comment_item){
            $comment_post=$comment_item->post->postId;
            $comment_item->update(
                array(
                    'comment_status'=>1,
                )
            );
            $new_comment=Comment::create(
                array(
                    'comment_text'=>$reply_comment,
                    'comment_user'=>Auth::id(),
                    'comment_post'=>$comment_post,
                    'comment_parent'=>$comment,
                    'comment_status'=>1,
                )
            );
            if ($new_comment){
                return json_encode(array(
                    'author'=>$new_comment->user->name,
                    'text'=>$reply_comment,
                    'post'=>$new_comment->post->name,
                    'status'=>$new_comment->statusShow,
                    'date'=>$new_comment->created_at,
                    'id'=>$new_comment->comment_id,
                    'delete_route'=>route(CommentsController::$posts_delete_route,$new_comment->comment_id)
                ));
            }
        }
    }

    public function editComment(Request $request){
        $comment_id=$request->input('comment');
        $comment=Comment::find($comment_id);
        if ($comment){
            $comment_status=$request->input('status');
            $comment_text=$request->input('edit-comment');
            $comment->update(array(
                'comment_status'=>$comment_status,
                'comment_text'=>$comment_text,
            ));
            $new_comment=Comment::find($comment_id);
            return json_encode(array(
                'author'=>$new_comment->user->name,
                'text'=>$new_comment->comment_text,
                'post'=>$new_comment->post->name,
                'status'=>$new_comment->statusShow,
                'date'=>$new_comment->created_at,
                'id'=>$comment_id,
                'delete_route'=>route(CommentsController::$posts_delete_route,$new_comment->comment_id)
            ));
        }

    }

    public function add_user_job(Request $request){
        if ($request->has('num')){
            $num=1+intval($request->input('num'));
            $transactions=TransactionController::getTree();
            $land_types=LandTypeController::getTree();
            if (!empty($transactions) && !empty($land_types)){
                ob_start();
                ?>
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <div>
                                <input type="checkbox" class="transaction-select-all change-select-all-init" name="data[<?php echo $num?>][transaction-select-all]" data-toggle="toggle" data-onstyle="info" data-on="همه" data-off="محدود">
                            </div>
                            <div class="ml-2 flex-fill">
                                <select name="data[<?php echo $num?>][transaction]" class="select2-init mt-2">
                                    <?php foreach($transactions as $transaction){?>
                                    <option value="<?php echo $transaction['term_id']?>"><?php echo $transaction['term_name']?></option>
                                    <?php }?>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div>
                                <input type="checkbox" class="land_type-select-all change-select-all-init" name="data[<?php echo $num?>][land_type-select-all]" data-toggle="toggle" data-onstyle="info" data-on="همه" data-off="محدود">
                            </div>
                            <div class="ml-2 flex-fill">
                                <select name="data[<?php echo $num?>][land_type]" class="select2-init">
                                    <?php foreach($land_types as $land_type){?>
                                    <option value="<?php echo $land_type['term_id']?>"><?php echo $land_type['term_name']?></option>
                                    <?php }?>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="fa fa-minus-circle text-danger delete-user-job"></span>
                    </td>
                </tr>
<?php
                $html=ob_get_clean();
                echo $html;
            }
        }
    }

    public function getOstans(Request $request){
        return json_encode(Ostan::all()->toArray());
    }

    public function getShahrestans(Request $request){
        if ($request->has('ostan')){
            $ostan_id=$request->input('ostan');
            $ostan=Ostan::find($ostan_id);
            if($ostan){
                return json_encode($ostan->shahrestans()->get()->toArray());
            }else{
                return json_encode(array());
            }
        }
    }

    public function getManategh(Request $request){
         if ($request->has('shahrestan')){
             $shahrestan_id=$request->input('shahrestan');
             $shahrestan=Shahrestan::find($shahrestan_id);
             if($shahrestan){
                 return json_encode($shahrestan->manategh()->get()->toArray());
             }else{
                 return json_encode(array());
             }
         }
     }

    public function getBakhshs(Request $request){
        if ($request->has('mantaghe')){
            $mantaghe_id=$request->input('mantaghe');
            $mantaghe=Mantaghe::find($mantaghe_id);
            if($mantaghe){
                return json_encode($mantaghe->bakhshs()->get()->toArray());
            }else{
                return json_encode(array());
            }
        }
    }

    public function getRelatedTerms(Request $request){
        if ($request->has('term')){
            $term=Term::find($request->input('term'));
            $term_type=$term->term_type()->first()->term_type_name;
            if ($term){
                $relate_fields=$term->termmetas()->firstWhere('meta_key','relate_fields');
                $html='';
                if ($relate_fields){
                    $meta_values=json_decode($relate_fields->meta_value,true);
                    if (!empty($meta_values)){
                        $post=false;
                        if ($request->has('post_id')) {
                            $post = Post::find($request->input('post_id'));
                        }
                        foreach ($meta_values as $value){
                            $field_value=false;
                            if ($post){
                                $field_value=$post->postmetas()->firstWhere('meta_key', $value['id']);
                            }

                            if (isset($value['type']) && $value['type']=='select'){

                                if (isset($value['choices'])){
                                    $value['choices']=json_decode($value['choices'],JSON_UNESCAPED_UNICODE);
                                }else{
                                    $value['choices']=array();
                                }
                            }

                            $value['related-to']="[".$term_type."][".$request->input('term')."]";

                            $html.=OptionTree::showSetting($value,$field_value?$field_value->meta_value:false,false,true,$post);
                        }
                    }
                }
                return json_encode(['success'=>true,'response'=>$html]);
            }
        }
    }

    public function filterPanelAdds(Request $request)
    {
        if($request->has('page')){
            $adds=$request->input('page');
            $expressions=array(
                'breadcrumb_title'=>AddsController::$breadcrumb_title,
                'posts_edit_route'=>AddsController::$posts_edit_route,
                'posts_delete_route'=>AddsController::$posts_delete_route,
            );

            $all_posts=collect();
            $posts_allow=AddsController::get_all_adds();
            if($posts_allow && !empty($posts_allow)){
                $all_posts=Post::whereIn('postId',$posts_allow)->get();
            }

            $filter_metas=$request->has('metas')?$request->input('metas'):array();
            $filter_terms=$request->input('terms')?$request->input('terms'):array();
            $confirm=$request->has('confirm')?$request->input('confirm'):array();
            $main=$request->has('main')?$request->input('main'):array();
            $date=$request->has('main')?$request->input('date'):array();

            if($adds=="my_adds"){
                $posts_query=AddsController::filter_adds($filter_metas,$filter_terms,$confirm,$main,$date)->where('author', Auth::id());
                $posts=Post::whereIn('postId',$posts_query->pluck('postId')->where('trash','0')->toArray())->get();

                $returnHTML = view('admin.list.adds_table',compact('adds','posts','all_posts','expressions'))->render();
                return response()->json(array('success' => true, 'html'=>$returnHTML));
            }elseif ($adds=="archive_adds"){
                if (Auth::user()->can('adds_management')){
                    $posts_query=AddsController::filter_adds($filter_metas,$filter_terms,$confirm,$main,$date)->where('trash','2');
                }elseif(Auth::user()->can('local_adds_management')){
                    $posts_query=AddsController::filter_adds($filter_metas,$filter_terms,$confirm,$main,$date)->where('trash','2')->where('author',Auth::id());
                }

                $posts=Post::whereIn('postId',$posts_query->pluck('postId')->toArray())->get();
                $returnHTML = view('admin.list.adds_table',compact('adds','all_posts','posts','expressions'))->render();
                return response()->json(array('success' => true, 'html'=>$returnHTML));
            }elseif ($adds=="trash_adds"){
                if (Auth::user()->can('adds_management')) {
                    $posts_query = AddsController::filter_adds($filter_metas,$filter_terms,$confirm,$main,$date)->where('trash','3');
                    $posts=Post::whereIn('postId',$posts_query->pluck('postId')->toArray())->get();
                    $returnHTML = view('admin.list.adds_table',compact('adds','all_posts','posts','expressions'))->render();
                    return response()->json(array('success' => true, 'html'=>$returnHTML));
                }
            } else {
                $posts_query=AddsController::filter_adds($filter_metas,$filter_terms,$confirm,$main,$date);
                $posts=collect();
                $posts_allow=AddsController::get_all_adds(false,$posts_query);
                if($posts_allow && !empty($posts_allow)){
                    $posts=Post::whereIn('postId',$posts_allow)->orderBy('updated_at','desc')->where('trash','0')->get();
                }

                $returnHTML = view('admin.list.adds_table',compact('adds','all_posts','posts','expressions'))->render();
                return response()->json(array('success' => true, 'html'=>$returnHTML));

            }
        }
    }

    public function ajaxArchiveAdds(Request $request)
    {
        if ($request->has('id')){
            if (AddsController::archive($request->input('id'))){
                return response()->json(array('success'=>'true','message'=>'آگهی با موفقیت بایگانی شد'));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در بایگانی آگهی رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در بایگانی آگهی رخ داده است'));

    }

    public function ajaxTrashAdds(Request $request)
    {
        if ($request->has('id')){
            if (AddsController::trash($request->input('id'))){
                return response()->json(array('success'=>'true','message'=>'آگهی با موفقیت حذف شد'));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در حذف آگهی رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در حذف آگهی رخ داده است'));

    }

    public function ajaxRecursionAdds(Request $request)
    {
        if ($request->has('id')){
            if (AddsController::recursion($request->input('id'))){
                return response()->json(array('success'=>'true','message'=>'آگهی با موفقیت بازگردانی شد'));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در بازگردانی آگهی رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در بازگردانی آگهی رخ داده است'));

    }

    public function ajaxDeleteAdds(Request $request)
    {
        if ($request->has('id')){
            if (AddsController::delete_adds($request->input('id'))){
                return response()->json(array('success'=>'true','message'=>'آگهی با موفقیت حذف شد'));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در حذف آگهی رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در حذف آگهی رخ داده است'));

    }

    public function ajaxRejectAdds(Request $request)
    {
        if ($request->has('id')){
            if (AddsController::reject($request->input('id'),$request->has('reason')?$request->input('reason'):'')){
                return response()->json(array('success'=>'true','message'=>AddsController::$success_reject_post));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در رد کردن آگهی رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در رد کردن آگهی رخ داده است'));
    }

    public function ajaxDeleteCrmCustomer(Request $request)
    {
        if ($request->has('id')){
            if (CRMcontroller::delete_customer($request->input('id'))){
                return response()->json(array('success'=>'true','message'=>'درخواست با موفقیت حذف شد'));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در حذف درخواست رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در حذف درخواست رخ داده است'));

    }

    public function ajaxConfirmAdds(Request $request)
    {
        if ($request->has('id')){
            if (AddsController::confirm($request->input('id'))){
                return response()->json(array('success'=>'true','message'=>AddsController::$success_confirm_post));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در تأیید آگهی رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در تأیید آگهی رخ داده است'));
    }

    public function ajaxResetConfirmAdds(Request $request)
    {
        if ($request->has('id')){
            if (AddsController::reset_confirm($request->input('id'))){
                return response()->json(array('success'=>'true','message'=>AddsController::$success_reset_confirm_post));
            }
            return response()->json(array('error'=>'true','message'=>'مشکلی در بازگشت آگهی به حالت اولیه رخ داده است'));
        }
        return response()->json(array('error'=>'true','message'=>'مشکلی در بازگشت آگهی به حالت اولیه رخ داده است'));
    }

    public function getRelatedCrmTerms(Request $request){
        if ($request->has('term')){
            $term=Term::find($request->input('term'));
            $term_type=$term->term_type()->first()->term_type_name;
            if ($term){
                $relate_fields=$term->termmetas()->firstWhere('meta_key','relate_fields');
                $html='';
                if ($relate_fields){
                    $meta_values=json_decode($relate_fields->meta_value,true);
                    array_walk($meta_values,function (&$val){
                        if(isset($val['crm'])){
                            $val=array_merge($val,$val['crm']);
                        }
                    });
                    if (!empty($meta_values)){
                        $post=false;
                        if ($request->has('post_id')) {
                            $post = Post::find($request->input('post_id'));
                        }
                        foreach ($meta_values as $value){
                            $field_value=false;
                            if ($post){
                                $field_value=$post->postmetas()->firstWhere('meta_key', $value['id']);
                            }

                            if (isset($value['type']) && $value['type']=='select'){

                                if (isset($value['choices'])){
                                    $value['choices']=json_decode($value['choices'],JSON_UNESCAPED_UNICODE);
                                }else{
                                    $value['choices']=array();
                                }
                            }

                            $value['related-to']="[".$term_type."][".$request->input('term')."]";

                            $html.=OptionTree::showSetting($value,$field_value?$field_value->meta_value:false,false,true,$post,true);
                        }
                    }
                }
                return json_encode(['success'=>true,'response'=>$html]);
            }
        }
    }

    public function sendLoginCodeBySms(Request $request)
    {
        $phone = $request->input('phone');
        $usermeta = Usermeta::all()->where('meta_key', 'phone')->firstWhere('meta_value', $phone);
        if ($usermeta) {
            $user = $usermeta->user_id;
            $code = create_random(6);
            $new_request = Usermeta::updateOrCreate(
                array(
                    'user_id' => $user,
                    'meta_key' => 'phone_login_request'
                ), array(
                    'meta_value' => $code
                )
            );
            if ($new_request) {
                $new_request_time = Usermeta::updateOrCreate(
                    array(
                        'user_id' => $user,
                        'meta_key' => 'phone_login_request_time'
                    ), array(
                        'meta_value' => time()
                    )
                );
                if ($new_request_time) {
                    //send sms


                    ini_set("soap.wsdl_cache_enabled", "0");
                    try {
                        $client = new SoapClient('http://api.payamak-panel.com/post/send.asmx?wsdl', array('encoding' => 'UTF-8'));
                        $parameters['username'] = "09145985642";
                        $parameters['password'] = "bhshg@fjFGSFGJlskfghjshgs13j345t4rgfd";
                        $parameters['from'] = "50004000985642";
                        $parameters['to'] = array($phone);
                        $parameters['text'] = "$code";
                        $parameters['isflash'] = false;
                        $parameters['udh'] = "";
                        $parameters['recId'] = array(0);
                        $parameters['status'] = 0x0;
                        // echo $client->GetCredit(array("username"=>"09145985642","password"=>"bhshg@fjFGSFGJlskfghjshgs13j345t4rgfd"))->GetCreditResult;
                        if ($client->SendSms($parameters)->SendSmsResult = "8491.23999999971") {
                            return response()->json(array('success'=>'true','message'=>'کد یکبار مصرف جهت ورود به سیستم به شماره همراه شما ارسال شد'));
                        }
                    } catch (SoapFault $ex) {
                        response()->json(array('error'=>'true','message'=>$ex->faultstring));
                    }
                }
            }
        }else{
            return response()->json(array('error'=>true,'message'=>'شماره تماس شما در سیستم ثبت نشده است!!!'));
        }
    }
}
