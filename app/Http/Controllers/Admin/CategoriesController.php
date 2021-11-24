<?php

namespace App\Http\Controllers\Admin;

use App\Classes\OptionTree;
use App\Http\Controllers\Controller;
use App\Models\Term;
use App\Models\Term_type;
use App\Models\Termmeta;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    //
    public static $term_type='category';
    public static $has_tree=true;
    public static $show_inputs_mode=false;
    public static $list_view='admin.list.category';
    public static $posts_list_route='admin.categories.list';
    public static $posts_edit_route='admin.category.edit';
    public static $posts_delete_route='admin.category.delete';
    public static $breadcrumb_title='دسته بندی های نوشته';
    public static $add_item='افزودن دسته';
    public static $edit_item='وبرایش دسته';
    public static $items_list='لیست دسته یندی ها';
    public static $view_labels=array(
        'label'=>'دسته بندی نوشته',
        'search-label'=>'جستجوی دسته ها',
    );

    public static $extra_meta=array(
        array(
            'id' => 'main-photo',
            'type' => 'image',
            'label' => 'تصویر شاخص',
            'description' => 'تصویر خود را انتخاب کنید',
        ),
    );

    public static $success_create_post='دسته جدید با موفقیت ثبت شد.';
    public static $success_edit_post='دسته شما با موفقیت ویرایش شد.';
    public static $success_delete_post='دسته شما با موفقیت حدف شد.';

    public static function getTermTypeId(){
        return Term_type::where('term_type_name', static::$term_type)->first()->term_type_id;
    }

    public static function getTree($filter_by_value=array())
    {
        if(count($filter_by_value)>0){
            return Term::with('termmetas')->tree()->where('term_type',static::getTermTypeId())->whereIn('term_id',$filter_by_value)->get()->toArray();
        }
        return Term::with('termmetas')->tree()->where('term_type',static::getTermTypeId())->get()->toArray();
    }

    public static function showInSinglePost($values=false,$name=false){
        $has_tree=static::$has_tree;
        if ($has_tree){
            $terms=static::getTree();
        }else{
            $terms=Term::all()->where('term_type',static::getTermTypeId())->toArray();
        }

        $view_labels=static::$view_labels;
        $view_labels['tree']=static::$has_tree;
        $term_type=static::getTermTypeId();

        ob_start();
        if ($has_tree){
            ?>
            <div class="card">
                <div class="card-header">
                    <?php echo $view_labels['label']?>
                    <i class="float-right fa fa-angle-up"></i>
                </div>
                <div class="card-body catsBox">
                    <div class="form-group">
                        <label for="search-<?php echo static::$term_type?>"><?php echo $view_labels['search-label']?></label>
                        <input type="text" class="form-control" id="search-<?php echo static::$term_type?>">
                    </div>
                    <div class="w-100 catsList">
                        <?php foreach ($terms as $term){?>
                            <?php $cnt=0;echo view('admin.category_checkbox_repeat',compact('term','values','cnt','term_type'))?>
                        <?php }?>
                    </div>
                </div>
            </div>
            <?php
        }else{
            if (static::$show_inputs_mode){
                ?>
                <?php if(isset($terms) && !empty($terms)){?>
                    <div class="card bg-light">
                        <div class="card-header bg-primary text-light"><?php echo $view_labels['label']?></div>
                        <div class="card-body">
                            <?php foreach($terms as $term){?>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input name="terms<?php echo ($name)?'['.static::$term_type.']':''?>[]" type="checkbox" class="form-check-input" value="<?php echo $term['term_id']?>" <?php echo ($values && isset($terms) && in_array($term['term_id'],$values))?'checked':'' ?>>
                                        <?php echo $term['term_name']?>
                                    </label>
                                </div>
                            <?php }?>
                        </div>
                    </div>
                <?php }?>
                <?php
            }else{
            ?>
                <div class="form-group">
                    <label for="validationCustom03"><?php echo $view_labels['label']?></label>
                    <select class="select2" name="terms[]" multiple="multiple">
                        <?php if(isset($terms) && !empty($terms)){?>
                        <?php foreach($terms as $term){?>
                        <option value="<?php echo $term['term_id']?>" <?php echo ($values && isset($terms) && in_array($term['term_id'],$values))?'selected':'' ?>><?php echo $term['term_name']?></option>
                        <?php }?>
                        <?php }?>
                    </select>
                    <div class="valid-feedback">
                        صحیح است!
                    </div>
                </div>
            <?php
            }
        }
        return ob_get_clean();
    }

    public function index()
    {
        $has_tree=static::$has_tree;
        if ($has_tree){
            $terms=static::getTree();
        }else{
            $terms=Term::all()->sortBy('term_order')->where('term_type',static::getTermTypeId())->toArray();
        }

        $extra_meta=static::$extra_meta;
        $term_metas='';
        foreach ($extra_meta as $meta){
            $term_metas.=OptionTree::showSetting($meta,false,false,true);
        }

        $expressions=array(
            'breadcrumb_title'=>static::$breadcrumb_title,
            'form_title'=>static::$add_item,
            'form_button'=>static::$add_item,
            'posts_edit_route'=>static::$posts_edit_route,
            'posts_delete_route'=>static::$posts_delete_route,
        );
        return view(static::$list_view,compact('terms','has_tree','expressions','term_metas'))->with('page_title',static::$items_list);
    }

    public function store(Request $request)
    {
        $credentials=array(
            'term_type'=>static::getTermTypeId(),
            'term_name'=>request()->input('term_name'),
            'term_slug'=>request()->input('term_slug'),
            'term_description'=>request()->input('term_description'),
            'term_order'=>intval(request()->input('term_order')),
        );

        if (static::$has_tree){
            $credentials['parent']=request()->input('parent');
        }

        if ($credentials['term_slug']==''){
            $credentials['term_slug']=$this->uniqueSlug($credentials['term_name']);
        }else{
            $credentials['term_slug']=$this->uniqueSlug($credentials['term_slug']);
        }

        $new_term=Term::create($credentials);
        if ($new_term){
            if ($request->has('metas')){
                $termMetas=$request->input('metas');
                if (!empty($termMetas)){
                    $sync=array();
                    foreach ($termMetas as $index=>$termMeta){
                        $meta=new Termmeta();
                        $meta->meta_key=$index;
                        if (is_array($termMeta))
                            $meta->meta_value=json_encode(array_values($termMeta));
                        else
                            $meta->meta_value=$termMeta;
                        $sync[]=$meta;
                    }
                    $new_term->termmetas()->saveMany($sync);
                }
            }
            return redirect()->route(static::$posts_list_route)->with('success', static::$success_create_post);
        }
    }

    public function edit($term_id){
        $term_select=Term::find($term_id);

        if ($term_select && $term_select->term_type==static::getTermTypeId()){
            $a=$term_select->getRelatedFields();

            $has_tree=static::$has_tree;
            if ($has_tree){
                $terms=static::getTree();
            }else{
                $terms=Term::all()->where('term_type',static::getTermTypeId())->toArray();
            }

            $extra_meta=static::$extra_meta;
            $term_metas='';
            foreach ($extra_meta as $meta){
                if (isset($meta['type']) && $meta['type']=='select'){
                    if (isset($meta['choices'])){
                        $meta['choices']=json_decode($meta['choices'],JSON_UNESCAPED_UNICODE);
                    }else{
                        $meta['choices']=array();
                    }
                }
                $term_metas.=OptionTree::showSetting($meta,$this->getOption($meta['id'],$term_id),false,true);
            }

            $expressions=array(
                'breadcrumb_title'=>static::$breadcrumb_title,
                'form_title'=>static::$edit_item,
                'form_button'=>static::$edit_item,
                'posts_edit_route'=>static::$posts_edit_route,
                'posts_delete_route'=>static::$posts_delete_route,
            );
            return view(static::$list_view,compact('term_select','terms','has_tree','expressions','term_metas'))->with('page_title',static::$items_list);
        }else{
            return redirect(route(static::$posts_list_route));
        }
    }

    public function update(Request $request,$term_id){
        $term_select=Term::find($term_id);

        if ($term_select && $term_select->term_type==static::getTermTypeId()){
            $credentials=array(
                'term_name'=>request()->input('term_name'),
                'term_slug'=>request()->input('term_slug'),
                'term_description'=>request()->input('term_description'),
                'term_order'=>intval(request()->input('term_order')),
            );
            if (static::$has_tree){
                $credentials['parent']=request()->input('parent');
            }

            if ($credentials['term_slug']==''){
                $credentials['term_slug']=$this->uniqueSlug($credentials['term_name']);
            }elseif ($credentials['term_slug']!=$term_select->term_slug){
                $credentials['term_slug']=$this->uniqueSlug($credentials['term_slug']);
            }

            $updateResult = $term_select->update($credentials);

            if ($updateResult) {
                if ($request->has('metas')){
                    $termMetas=$request->input('metas');
                    if (!empty($termMetas)){
                        $sync=array();
                        foreach ($termMetas as $index=>$termMeta){
                            $meta=new Termmeta();
                            $meta->meta_key=$index;
                            if (is_array($termMeta))
                                $meta->meta_value=json_encode(array_values($termMeta));
                            else
                                $meta->meta_value=$termMeta;
                            $sync[]=$meta;
                        }
                        $term_select->termmetas()->delete();
                        $term_select->termmetas()->saveMany($sync);
                    }
                }
                return redirect()->route(static::$posts_list_route)->with('success', static::$success_edit_post);
            }
        }
    }

    public function delete(Request $request,$term_id){
        $term_select=Term::find($term_id);

        if ($term_select && $term_select->term_type==static::getTermTypeId()){
            $term_select->termmetas()->delete();
            $term_select->delete();
            return redirect()->route(static::$posts_list_route)->with('success', static::$success_delete_post);
        }
    }

    public function uniqueSlug($text)
    {
        $slug=slug($text);
        $catId=Term_type::where('term_type_name', static::$term_type)->first()->term_type_id;
        $count=Term::where('term_slug',$slug)->where('term_type',$catId)->count();
        if ($count==0){
            return $slug;
        }
        $slugs=Term::where('term_type',$catId)->get()->filter(function ($post) use($slug) {
            return preg_match("/$slug-\d+/",$post->term_slug);
        })->pluck('term_slug')->toArray();
        if (empty($slugs)){
            return $slug.'-1';
        }else {
            array_walk($slugs, function (&$val) {
                $val = explode('-', $val);
                $val = end($val);
                $val = intval($val);
            });
            return $slug.'-'.(1+max($slugs));
        }
    }

    public function getOption($name,$term_id)
    {
        $optionItem=Termmeta::firstWhere(['meta_key'=>$name,'term_id'=>$term_id]);
        if ($optionItem && $optionItem->meta_value){
            return $optionItem->meta_value;
        }
        return false;
    }

}
