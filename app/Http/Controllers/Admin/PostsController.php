<?php

namespace App\Http\Controllers\Admin;

use App\Classes\OptionTree;
use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\Metabox;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Postmeta;
use App\Models\Term;
use App\Models\Term_type;
use App\Models\User;
use App\Models\User_adds_region;
use App\Models\User_adds_type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use Illuminate\Database\Eloquent\Builder;

class PostsController extends Controller
{
    //
    public static $post_type='post';
    public static $list_view='admin.list.posts';
    public static $edit_view='admin.edit.post';
    public static $posts_list_route='admin.posts.list';
    public static $posts_edit_route='admin.post.edit';
    public static $posts_delete_route='admin.post.delete';
    public static $breadcrumb_title='نوشته ها';
    public static $add_item='افزودن نوشته';
    public static $edit_item='وبرایش نوشته';
    public static $items_list='لیست نوشته ها';
    public static $success_create_post='نوشته جدید با موفقیت ثبت شد.';
    public static $success_edit_post='نوشته شما با موفقیت ویرایش شد.';
    public static $success_delete_post='نوشته شما با موفقیت حدف شد.';

    public static $tab_metas=false;
    public static $tab_sections=array();

    public static $meta_value=array(
        array(
            'label'=>'گالری تصاویر',
            'content'=>array(
                array(
                    'id' => 'image_gallery',
                    'type' => 'gallery',
                    'label' => 'گالری تصاویر',
                    'description' => 'تصاویر خود را انتخاب کنید',
                ),
            ),
        ),
    );

    public static $support_terms=array(
        CategoriesController::class=>array(
            'section'=>'properties',
            'sort'=>'3'
        ),
        TagsController::class=>array(
            'section'=>'properties',
            'sort'=>'2'
        ),
    );

    public function index()
    {
        $posts=Post::all()->where('post_type',static::$post_type);
        $expressions=array(
            'breadcrumb_title'=>static::$breadcrumb_title,
            'posts_edit_route'=>static::$posts_edit_route,
            'posts_delete_route'=>static::$posts_delete_route,
        );
        return view(static::$list_view,compact('posts','expressions'))->withShortcodes()->with(['page_title' => static::$items_list]);
    }

    public function create()
    {
        $meta_value=static::$meta_value;
        $meta_array=array();
        if (!empty($meta_value)){
            if(static::$tab_metas){
                foreach ($meta_value as $item) {
                    $meta_array[]=array('sort'=>isset($item['sort'])?$item['sort']:0,'section'=>$item['section'],'content'=>$this->showMetaBoxContent($item),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }else{
                foreach ($meta_value as $item) {
                    $meta_array[]=array('sort'=>isset($item['sort'])?$item['sort']:0,'section'=>false,'content'=>$this->showMetaBoxContent($item),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }
        }

        $support_terms=static::$support_terms;
        if (!empty($support_terms)) {
            if(static::$tab_metas) {
                foreach ($support_terms as $class => $item) {
                    $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => $item['section'], 'content' => $class::showInSinglePost(),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }else{
                foreach ($support_terms as $class => $item) {
                    $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => false, 'content' => $class::showInSinglePost(),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }
        }

        $meta_boxes=static::tab_html($meta_array);

        $expressions=array(
            'breadcrumb_title'=>static::$breadcrumb_title,
            'form_title'=>static::$add_item
        );
        return view(static::$edit_view,compact('expressions','meta_boxes'))->with(['page_title' => static::$add_item ]);
    }

    public function store(Request $request)
    {
        $credentials=array(
            'name'=>request()->input('name'),
            'slug'=>request()->input('slug'),
            'description'=>request()->input('description'),
            'status'=>request()->input('status'),
            'post_type'=>static::$post_type ,
            'image'=>request()->input('mainImage'),
        );
        $currentUser=Auth::user()->getAuthIdentifier();
        $credentials['author']=$currentUser;
        if ($credentials['slug']==''){
            $credentials['slug']=$this->uniqueSlug($credentials['name']);
        }else{
            $credentials['slug']=$this->uniqueSlug($credentials['slug']);
        }
        $new_post = Post::create($credentials);

        if ($new_post) {
            if ($request->has('terms')){
                $terms=$request->input('terms');
                $new_post->terms()->sync($terms);
            }
            if ($request->has('metas')){
                $postMetas=$request->input('metas');
                if (!empty($postMetas)){
                    $sync=array();
                    foreach ($postMetas as $index=>$postMeta){
                        $meta=new Postmeta();
                        $meta->meta_key=$index;
                        if (is_array($postMeta))
                            $meta->meta_value=json_encode(array_values($postMeta));
                        else
                            $meta->meta_value=$postMeta;
                        $sync[]=$meta;
                    }
                    $new_post->postmetas()->saveMany($sync);
                }
            }

            return redirect()->route(static::$posts_list_route)->with('success', static::$success_create_post);
        }

    }

    public function edit($post_id){
        $post=Post::find($post_id);

        if ($post){
            $meta_value=static::$meta_value;
            $meta_array=array();

            if(static::$tab_metas){
                foreach ($meta_value as $item) {
                    $meta_array[]=array('sort'=>isset($item['sort'])?$item['sort']:0,'section'=>$item['section'],'content'=>$this->showMetaBoxContent($item,$post),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }else{
                foreach ($meta_value as $item) {
                    $meta_array[]=array('sort'=>isset($item['sort'])?$item['sort']:0,'section'=>false,'content'=>$this->showMetaBoxContent($item,$post),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }

            $support_terms=static::$support_terms;
            $post_terms_values=($post->terms())?$post->terms()->pluck('term_id')->toArray():false;

            if(static::$tab_metas) {
                foreach ($support_terms as $class => $item) {
                    $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => $item['section'], 'content' => $class::showInSinglePost($post_terms_values),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }else{
                foreach ($support_terms as $class => $item) {
                    $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => false, 'content' => $class::showInSinglePost($post_terms_values),'position'=>isset($item['position'])?$item['position']:'normal');
                }
            }

            $meta_boxes=static::tab_html($meta_array);

            $post_image=false;
            if($post->image){
                $file=File::find(intval($post->image));
                if ($file)
                    $post_image=$file->preview;
            }
            $expressions=array(
                'breadcrumb_title'=>static::$breadcrumb_title,
                'form_title'=>static::$edit_item,
            );
            return view(static::$edit_view,compact('post','expressions','meta_boxes','post_image'))->with(['page_title' => static::$edit_item]);
        } else{
            return redirect(route(static::$posts_list_route));
        }
    }

    public function update(Request $request, $post_id)
    {
        $postItem = Post::where('post_type',static::$post_type)->firstWhere('postId',$post_id);
        $credentials=array(
            'name'=>request()->input('name'),
            'slug'=>request()->input('slug'),
            'description'=>request()->input('description'),
            'status'=>request()->input('status'),
            'image'=>request()->input('mainImage'),
        );
        if ($credentials['slug']==''){
            $credentials['slug']=$this->uniqueSlug($credentials['name']);
        }elseif ($credentials['slug']!=$postItem->slug){
            $credentials['slug']=$this->uniqueSlug($credentials['slug']);
        }

        $updateResult = $postItem->update($credentials);

        if ($updateResult) {
            if ($request->has('terms')){
                $postItem->terms()->sync($request->input('terms'));
            }

            if ($request->has('metas')) {
                $postMetas = $request->input('metas');
                if (!empty($postMetas)) {
                    $sync = array();
                    foreach ($postMetas as $index => $postMeta) {
                        $meta = $postItem->postmetas()->firstOrNew(["meta_key" => $index]);
                        if ($postMeta != null) {
                            if (is_array($postMeta))
                                $meta->meta_value = json_encode(array_values($postMeta));
                            else
                                $meta->meta_value = $postMeta;
                            $sync[] = $meta;
                        }else{
                            $meta->delete();
                        }
                    }
                    $postItem->postmetas()->saveMany($sync);
                    $extra_metas=$postItem->postmetas()->whereNotIn('meta_key',array_keys($postMetas));
                    if ($extra_metas->count()>0){
                        $extra_metas->delete();
                    }
                }
            }

            return redirect()->route(static::$posts_list_route)->with('success', static::$success_edit_post);
        }

    }

    public function delete(Request $request, $post_id)
    {
        if ($post_id && ctype_digit($post_id)) {
            $postItem = Post::find($post_id);
            if ($postItem && $postItem instanceof Post) {
//                $postItem->delete();
                if (Auth::user()->hasRole('Superadmin')){
                    $postItem->update(
                        array('trash'=>'1')
                    );
                }
                return redirect()->route(static::$posts_list_route)->with('success', static::$success_delete_post);
            }
        }
    }

    public function uniqueSlug($text)
    {
        $slug=slug($text);
        $count=Post::where('slug',$slug)->count();
        if ($count==0){
            return $slug;
        }
        $slugs=Post::all()->filter(function ($post) use($slug) {
            return preg_match("/$slug-\d+/",$post->slug);
        })->pluck('slug')->toArray();
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

    public function showMetaBoxContent($meta_box,$post=false){
        $content = (isset($meta_box['content'])) ? $meta_box['content'] : array();
        ob_start();
        ?>
        <div class="card toggle-card bg-light">
              <div class="card-header bg-primary text-light">
                    <?php if (isset($meta_box['label'])) echo $meta_box['label']?>
                    <i class="fas fa-angle-up toggle"></i>
              </div>
              <div class="card-body">
                <?php if (!empty($content)){?>
                    <?php foreach ($content as $value){?>
                        <?php
                        if ($post) {
                            $meta_key = $post->postmetas()->where('meta_key', $value['id'])->get()->toArray();
                            $option_value = (!empty($meta_key)) ? $meta_key[0]['meta_value'] : false;
                        }else{
                            $option_value=false;
                        }
                        ?>
                        <?php echo OptionTree::showSetting($value,$option_value,false,true,$post)?>
                    <?php }?>
                <?php }?>
              </div>
        </div>
        <?php
        return ob_get_clean();
    }

    public function getCategories(&$output, $level = 0, $term_type = 'category',$first=0)
        {
            $cat = Term_type::where('term_type_name', $term_type)->first();
            $terms = (collect($cat->terms()->where('parent', $level)->orderBy('parent')->get())->toArray());
            foreach ($terms as $term) {
                $termItem = Term::find($term['term_id']);
                if ($termItem){
                    $arr=$termItem->toArray();
                    $arr['level']=$first;
                    $output[] = $arr;
                }
                $this->getCategories($output, $term['term_id'], $term_type,$first+1);
            }
        }

    public function showSettings($post_id=false)
        {
            $settings=Metabox::all()->filter(function ($value, $key) {
                $arr=explode(',',$value->post_types);
                return in_array(static::$post_type,$arr);
            });
            if ($settings->count()>0){
                ob_start();
                foreach ($settings as $setting){
                    $location=$setting->location;
                    $tree=json_decode($setting->json);
                    $this->showSingleSetting($location,$tree,$post_id);
                }
                $html=ob_get_clean();
                return $html;
            }
        }

    public function showSingleSetting($location,$tree,$post_id,$fromListItem=false)
    {
        if (property_exists($tree,'type')) {
            if ($fromListItem)
                $init=$post_id;
            else
                $init=($post_id)?$this->getOption($location,$post_id):'';

        if (!$fromListItem && $tree->type!='list-item')
                $location="meta[$location]";

            switch ($tree->type) {
                case 'text':
                        ?>
                        <div class="form-group">
                            <?php
                            if (property_exists($tree,'label') && !empty($tree->label)){
                            ?>
                          <label for="<?php echo $location?>"><?php echo $tree->label?></label>
                            <?php };?>
                            <?php $std=property_exists($tree,'std')?$tree->std:'';$val=($init)?$init:$std;?>
                          <input type="text" class="form-control" id="<?php echo $location?>" name="<?php echo $location?>" value="<?php echo old($location,$val)?>">
                            <?php
                            if (property_exists($tree,'description') && !empty($tree->description)){
                            ?>
                            <small class="form-text text-muted"><?php echo $tree->description?></small>
                            <?php
                            }
                            ?>
                        </div>
                        <?php
                    break;
                case 'textarea':
                    ?>
                    <div class="form-group">
                        <?php
                        if (property_exists($tree,'label') && !empty($tree->label)){
                        ?>
                      <label for="<?php echo $location?>"><?php echo $tree->label?></label>
                        <?php };?>
                        <?php $std=property_exists($tree,'std')?$tree->std:'';$val=(!empty($init))?$init:$std;?>
                        <textarea class="form-control" id="<?php echo $location?>" name="<?php echo $location?>" placeholder="<?php echo $tree->description?>"><?php echo old($location,$val)?></textarea>
                    </div>
                    <?php
                    break;
                case 'on-off':
                    ?>
                <div class="form-group">
                    <label class="form-switch d-flex align-items-center">
                        <?php if (property_exists($tree,'description')) {?>
                        <p><small><?php echo $tree->description?></small></p>
                        <?php }?>
                        <div class="mr-1 ml-2">
                            <?php $checked=(property_exists($tree,'std') && $tree->std=='on')?'checked':'';?>
                            <input type="checkbox" name="<?php echo $location?>" <?php echo ($init!='on')?$checked:'checked'?>><i></i>
                        </div>
                        <?php if (property_exists($tree,'label')) {?>
                        <p class="ml-1"><?php echo $tree->label?></p>
                        <?php }?>
                    </label>
                </div>
                    <?php
                    break;
                case 'select':
                    if (property_exists($tree, 'choices')) {
                        $choices = $tree->choices;
                        ?>
                        <div class="form-group">
                            <?php if (property_exists($tree, 'label')) {?>
                            <label for="<?php echo $location ?>"><?php echo $tree->label?></label>
                            <?php }?>
                            <select class="select2" name="<?php echo $location ?>" id="<?php echo $location ?>">
                                <?php
                                foreach ($choices as $index => $val) {
                                    $std = (property_exists($tree, 'std')) ? $tree->std : '';
                                    $std = (!empty($init)) ? $init : $std;
                                    $selected = ($std == $index) ? 'selected' : '';
                                    ?>
                                    <option
                                        value="<?php echo $index ?>" <?php echo $selected ?>><?php echo $val; ?></option>
                                    <?php
                                }
                                ?>
                            </select>
                            <?php if (property_exists($tree, 'description')) {?>
                            <small><?php echo $tree->description?></small>
                            <?php }?>
                        </div>
                        <?php
                    }
                    break;
                case 'image':
                ?>
                <div class="form-group">
                    <?php if (property_exists($tree, 'label')):?>
                    <label><?php echo $tree->label?></label>
                    <?php endif;?>
                    <div class="card">
                        <div class="card-header">
                            <i class="float-right fa fa-angle-up"></i>
                            <p>
                                <?php echo (property_exists($tree, 'description'))?$tree->description:'تصویر خود را آپلود کنید';?>
                                <a type="button" data-toggle="modal" data-target="#tabtarh-lib">
                                  <i class="fa fa-cloud-upload"></i>
                                </a>
                                <input type="hidden" class="tbt-hide single-file" name="<?php echo $location?>" value="<?php echo (!empty($init)?explode(',',$init)[0]:'')?>">
                            </p>

                        </div>
                        <div class="card-body d-flex flex-wrap">
                        </div>
                    </div>
                </div>
                <?php
                    break;
                case 'gallery':
                    ?>
                    <div class="form-group">
                        <?php if (property_exists($tree, 'label')):?>
                        <label><?php echo $tree->label?></label>
                        <?php endif;?>
                        <div class="card">
                            <div class="card-header">
                                <i class="float-right fa fa-angle-up"></i>
                                <p>
                                    <?php echo (property_exists($tree, 'description'))?$tree->description:'تصویر خود را آپلود کنید';?>
                                    <a type="button" data-toggle="modal" data-target="#tabtarh-lib">
                                      <i class="fa fa-cloud-upload"></i>
                                    </a>
                                    <input type="hidden" class="tbt-hide" name="<?php echo $location?>" value="<?php echo (!empty($init)?$init:'')?>">
                                </p>

                            </div>
                            <div class="card-body d-flex flex-wrap">
                            </div>
                        </div>
                    </div>
                    <?php
                    break;
                case 'list-item':
                        $this->showListItem($location,$tree,$init);
                    break;
            }
        }
    }

    public function showListItem($location,$tree,$init)
    {
        $tree=json_decode(json_encode($tree),true);
        $settings=$tree['settings'];
        $values=json_decode($init,true);
        ?>
        <div class="form-group">
            <?php if (array_key_exists('label',$tree)):?>
            <label><?php echo $tree['label']?></label>
            <?php endif;?>
            <div class="card">
                <div class="card-header">
                    <i class="float-right fa fa-angle-up"></i>
                    <p>
                        <?php echo (array_key_exists( 'description',$tree))?$tree['description']:'لیست دلخواه خود را ایجاد کنید';?>
                        <span type="button" class="fa fa-plus add-list-item-post-meta btn btn-sm btn-info rounded-circle"></span>
                        <input type="hidden" value="<?php echo $location?>">
                    </p>
                </div>
                <div class="card-body">
                    <input type="hidden" value='<?php echo json_encode($settings);?>'>
                    <?php if (!empty($values)):$cnt = count($values); ?>
                        <?php for ($i = 0; $i < $cnt; $i++) { ?>
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
                                    $init = isset($values[$i][$id])?$values[$i][$id]:'';
                                    $json = $value;
                                    $this->showSingleSetting("meta[$location][$i][$id]", (object)$json, $init,true); ?>
                                <?php endforeach; ?>
                                </div>
                            </div>
                        <?php } ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
<?php
    }

    public function getOption($name,$post_id)
        {
            $optionItem=Postmeta::firstWhere(['meta_key'=>$name,'post_id'=>$post_id]);
            if ($optionItem && $optionItem->meta_value){
                return $optionItem->meta_value;
            }
            return false;
        }

    public static function tab_html($meta_array){
        $datas=array_sort($meta_array, 'sort', SORT_ASC);
        $tab_metas=static::$tab_metas;
        $tab_sections=static::$tab_sections;

        $arr=array();
        if ($tab_metas){
            foreach ($datas as $val){
                $sec=$tab_sections[$val['section']];
                $position=$val['position'];
                $arr[$sec][$position][]=$val['content'];
            }
        }else{
            foreach ($datas as $val){
                $position=$val['position'];
                $arr[$position][]=$val['content'];
            }
        }

        $html='';
        ob_start();
        if (isset($datas) && is_array($datas) && !empty($datas)){
            if ($tab_metas){
                ?>
                <div id="wizard-example">
                    <?php foreach ($arr as $index=>$meta) {?>
                        <h3><?php echo $index?></h3>
                        <section class="card card-body meta-card">
                            <div class="row">
                                <?php if (isset($meta['normal'])){?>
                                    <div class="col-md-8">
                                        <?php foreach($meta['normal'] as $item):?>
                                            <?php echo $item?>
                                        <?php endforeach;?>
                                    </div>
                                <?php }?>
                                <?php if (isset($meta['side'])){?>
                                    <div class="col-md-4">
                                        <?php foreach($meta['side'] as $item):?>
                                            <?php echo $item?>
                                        <?php endforeach;?>
                                    </div>
                                <?php }?>
                            </div>
                        </section>
                    <?php }?>
                </div>
                <?php
            }else{
                echo '<div class="row">';
                if (isset($arr['normal'])) {
                    echo '<div class="col-md-8">';
                    foreach ($arr['normal'] as $index => $val) {
                        echo $val;
                    }
                    echo '</div>';
                }
                if (isset($arr['side'])) {
                    echo '<div class="col-md-4">';
                    foreach ($arr['side'] as $index => $val) {
                        echo $val;
                    }
                    echo '</div>';
                }
                echo '</div>';
            }
        }
        $html.=ob_get_clean();
        return $html;
    }

    public static function getMeta(){
        $meta_value=static::$meta_value;
        $arr=array();
        if (!empty($meta_value)){
            foreach ($meta_value as $post_meta){
                if (isset($post_meta['content'])){
                    $arr[]=$post_meta['content'];
                }
            }
            return array_unique($arr);
        }else{
            return array();
        }
    }

    public static function get_meta_array_by_id($id){
        $content=array_merge(...array_column(static::$meta_value,'content'));
        $val=array_values(filter_by_value($content,'id',$id)); //filter by value returns an array of id values if it exists in $id
        if (count($val)>0)
            return array_values(filter_by_value($content,'id',$id))[0];
        else
            return false;
    }

    public function touch(Request $request, $post_id)
    {
        $postItem = Post::find($post_id);
        if ($postItem){
            $postItem->touch();
        }
        return redirect()->back();

    }

}
