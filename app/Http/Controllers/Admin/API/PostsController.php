<?php

namespace App\Http\Controllers\Admin\API;

use App\Classes\OptionTree;
use App\Http\Controllers\Admin\API\LandTypeController;
use App\Http\Controllers\Admin\API\UsersController;
use App\Http\Controllers\Admin\API\ThemeSettingsController;
use App\Http\Controllers\Admin\API\TransactionController;
use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\Metabox;
use App\Models\Option;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Postmeta;
use App\Models\Term;
use App\Models\Term_type;
use App\Models\User;
use App\Models\User_adds_region;
use App\Models\User_adds_type;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use Illuminate\Database\Eloquent\Builder;

class PostsController extends Controller
{
    //
    public static $post_type = 'post';
    public static $list_view = 'admin.list.posts';
    public static $edit_view = 'admin.edit.post';
    public static $posts_list_route = 'admin.posts.list';
    public static $posts_edit_route = 'admin.post.edit';
    public static $posts_delete_route = 'admin.post.delete';
    public static $breadcrumb_title = 'نوشته ها';
    public static $add_item = 'افزودن نوشته';
    public static $edit_item = 'وبرایش نوشته';
    public static $items_list = 'لیست نوشته ها';
    public static $success_create_post = 'نوشته جدید با موفقیت ایجاد شد.';
    public static $success_edit_post = 'نوشته شما با موفقیت ویرایش شد.';
    public static $success_delete_post = 'نوشته شما با موفقیت حدف شد.';
    public static $success_touch = 'عملیات به روز رسانی تاریخ نوشته موردنظر ناموفق بود.';
    public static $failure_create_post = 'عملیات ایجاد نوشته جدید ناموفق بود.';
    public static $failure_edit_post = 'عملیات به روز رسانی نوشته موردنظر ناموفق بود.';
    public static $failure_delete_post = 'عملیات حذف نوشته موردنظر ناموفق بود.';
    public static $failure_touch = 'عملیات به روز رسانی تاریخ نوشته موردنظر ناموفق بود.';
    public static $failure_type = 'آیتم انتخاب شده از نوع نوشته نیست.';

    public static $tab_metas = false;
    public static $tab_sections = array();

    public static $meta_value = array(
        array(
            'label' => 'گالری تصاویر',
            'content' => array(
                array(
                    'id' => 'image_gallery',
                    'type' => 'gallery',
                    'label' => 'گالری تصاویر',
                    'description' => 'تصاویر خود را انتخاب کنید',
                ),
            ),
        ),
    );

    public static $support_terms = array(
        CategoriesController::class => array(
            'section' => 'properties',
            'sort' => '3'
        ),
        TagsController::class => array(
            'section' => 'properties',
            'sort' => '2'
        ),
    );


    public function index()
    {
        $posts = Post::all()->where('post_type', static::$post_type);
        $result = ['posts' => $posts, 'page_title' => static::$items_list, 'breadcrumb_title' => static::$breadcrumb_title];

        return Response::json($result, 200);
    }

    public function create()
    {
        //        $special_adds = $this->getSpeciallAdds();
        $site_options = $this->getOptions();
        $adds_types = $this->getAddsTypes();
        $ostans = Ostan::all();;
        $meta_box = $this->getAddsTermAndMeta();

        $result = ['site_options' => $site_options,
            'adds_types' => $adds_types, 'ostans' => $ostans, 'meta_box' => $meta_box,
            'breadcrumb_title' => static::$breadcrumb_title, 'page_title' => static::$add_item];
        return Response::json($result, 200);
    }


    public function store(Request $request)
    {
//        $credentials = array(
//            'name' => request()->input('name'),
//            'slug' => request()->input('slug'),
//            'description' => request()->input('description'),
//            'status' => request()->input('status'),
//            'post_type' => static::$post_type,
//            'image' => request()->input('mainImage'),
//        );
//        $currentUser = Auth::user()->getAuthIdentifier();
//        $credentials['author'] = $currentUser;
//        if ($credentials['slug'] == '') {
//            $credentials['slug'] = $this->uniqueSlug($credentials['name']);
//        } else {
//            $credentials['slug'] = $this->uniqueSlug($credentials['slug']);
//        }
//        $new_post = Post::create($credentials);
//
//        if ($new_post) {
//            if ($request->has('terms')) {
//                $terms = $request->input('terms');
//                $new_post->terms()->sync($terms);
//            }
//            if ($request->has('metas')) {
//                $postMetas = $request->input('metas');
//                if (!empty($postMetas)) {
//                    $sync = array();
//                    foreach ($postMetas as $index => $postMeta) {
//                        $meta = new Postmeta();
//                        $meta->meta_key = $index;
//                        if (is_array($postMeta))
//                            $meta->meta_value = json_encode(array_values($postMeta));
//                        else
//                            $meta->meta_value = $postMeta;
//                        $sync[] = $meta;
//                    }
//                    $new_post->postmetas()->saveMany($sync);
//                }
//            }
//            $result = ['status' => true, 'message' => static::$success_create_post];
//        } else {
//            $result = ['status' => false, 'message' => static::$failure_create_post];
//        }
        return Response::json($request, 200);
    }

    public function edit($post_id)
    {
        $post = Post::findOrFail($post_id);


        $meta_value = static::$meta_value;
        $meta_array = array();

        if (static::$tab_metas) {
            foreach ($meta_value as $item) {
                $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => $item['section'], 'content' => $this->showMetaBoxContent($item, $post), 'position' => isset($item['position']) ? $item['position'] : 'normal');
            }
        } else {
            foreach ($meta_value as $item) {
                $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => false, 'content' => $this->showMetaBoxContent($item, $post), 'position' => isset($item['position']) ? $item['position'] : 'normal');
            }
        }

        $support_terms = static::$support_terms;
        $post_terms_values = ($post->terms()) ? $post->terms()->pluck('term_id')->toArray() : false;

        if (static::$tab_metas) {
            foreach ($support_terms as $class => $item) {
                $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => $item['section'], 'content' => $class::showInSinglePost($post_terms_values), 'position' => isset($item['position']) ? $item['position'] : 'normal');
            }
        } else {
            foreach ($support_terms as $class => $item) {
                $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'section' => false, 'content' => $class::showInSinglePost($post_terms_values), 'position' => isset($item['position']) ? $item['position'] : 'normal');
            }
        }

        $meta_boxes = $this->getAddsTermAndMeta();

        $post_image = false;
        if ($post->image) {
            $file = File::find(intval($post->image));
            if ($file)
                $post_image = $file->preview;
        }

        $result = ['post' => $post, 'breadcrumb_title' => static::$breadcrumb_title, 'meta_boxes' => $meta_boxes,
            'post_image' => $post_image, 'page_title' => static::$edit_item];
        return Response::json($result, 200);
    }

    public function update(Request $request, $post_id)
    {
        $postItem = Post::where('post_type', static::$post_type)->firstWhere('postId', $post_id);
        $credentials = array(
            'name' => request()->input('name'),
            'slug' => request()->input('slug'),
            'description' => request()->input('description'),
            'status' => request()->input('status'),
            'image' => request()->input('mainImage'),
        );
        if ($credentials['slug'] == '') {
            $credentials['slug'] = $this->uniqueSlug($credentials['name']);
        } elseif ($credentials['slug'] != $postItem->slug) {
            $credentials['slug'] = $this->uniqueSlug($credentials['slug']);
        }

        $updateResult = $postItem->update($credentials);

        if ($updateResult) {
            if ($request->has('terms')) {
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
                        } else {
                            $meta->delete();
                        }
                    }
                    $postItem->postmetas()->saveMany($sync);
                    $extra_metas = $postItem->postmetas()->whereNotIn('meta_key', array_keys($postMetas));
                    if ($extra_metas->count() > 0) {
                        $extra_metas->delete();
                    }
                }
            }
            $result = ['status' => true, 'message' => static::$success_edit_post];
        } else {
            $result = ['status' => false, 'message' => static::$failure_edit_post];
        }
        return Response::json($result, 200);
    }

    public function delete($post_id)
    {

        $postItem = Post::findOrFail($post_id);
        if ($postItem instanceof Post) {
//                $postItem->delete();
            if (Auth::user()->hasRole('super-admin')) {
                $postItem->update(
                    array('trash' => '1')
                );
                if ($postItem) {
                    $result = ['status' => true, 'message' => static::$success_delete_post];
                } else {
                    $result = ['status' => false, 'message' => static::$failure_delete_post];
                }

            } else {
                $result = ['status' => false, 'message' => 'به این صفحه دسترسی ندارید.'];
            }
        } else {
            $result = ['status' => false, 'message' => static::$failure_type];
        }

        return Response::json($result, 200);
    }

    public function uniqueSlug($text)
    {
        $slug = slug($text);
        $count = Post::where('slug', $slug)->count();
        if ($count == 0) {
            return $slug;
        }
        $slugs = Post::all()->filter(function ($post) use ($slug) {
            return preg_match("/$slug-\d+/", $post->slug);
        })->pluck('slug')->toArray();
        if (empty($slugs)) {
            return $slug . '-1';
        } else {
            array_walk($slugs, function (&$val) {
                $val = explode('-', $val);
                $val = end($val);
                $val = intval($val);
            });
            return $slug . '-' . (1 + max($slugs));
        }
    }

    public function showMetaBoxContent($meta_box, $post = false)
    {
        $content = (isset($meta_box['content'])) ? $meta_box['content'] : array();
        ob_start();
        ?>
        <div class="card toggle-card bg-light">
            <div class="card-header bg-primary text-light">
                <?php if (isset($meta_box['label'])) echo $meta_box['label'] ?>
                <i class="fas fa-angle-up toggle"></i>
            </div>
            <div class="card-body">
                <?php if (!empty($content)) { ?>
                    <?php foreach ($content as $value) { ?>
                        <?php
                        if ($post) {
                            $meta_key = $post->postmetas()->where('meta_key', $value['id'])->get()->toArray();
                            $option_value = (!empty($meta_key)) ? $meta_key[0]['meta_value'] : false;
                        } else {
                            $option_value = false;
                        }
                        ?>
                        <?php echo OptionTree::showSetting($value, $option_value, false, true, $post) ?>
                    <?php } ?>
                <?php } ?>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

    public function getCategories(&$output, $level = 0, $term_type = 'category', $first = 0)
    {
        $cat = Term_type::where('term_type_name', $term_type)->first();
        $terms = (collect($cat->terms()->where('parent', $level)->orderBy('parent')->get())->toArray());
        foreach ($terms as $term) {
            $termItem = Term::findOrFail($term['term_id']);

            $arr = $termItem->toArray();
            $arr['level'] = $first;
            $output[] = $arr;

            $this->getCategories($output, $term['term_id'], $term_type, $first + 1);
        }
    }

    public function showSettings($post_id = false)
    {
        $settings = Metabox::all()->filter(function ($value, $key) {
            $arr = explode(',', $value->post_types);
            return in_array(static::$post_type, $arr);
        });
        if ($settings->count() > 0) {
            ob_start();
            foreach ($settings as $setting) {
                $location = $setting->location;
                $tree = json_decode($setting->json);
                $this->showSingleSetting($location, $tree, $post_id);
            }
            $html = ob_get_clean();
            return $html;
        }
    }

    public function showSingleSetting($location, $tree, $post_id, $fromListItem = false)
    {
        if (property_exists($tree, 'type')) {
            if ($fromListItem)
                $init = $post_id;
            else
                $init = ($post_id) ? $this->getOption($location, $post_id) : '';

            if (!$fromListItem && $tree->type != 'list-item')
                $location = "meta[$location]";

            switch ($tree->type) {
                case 'text':
                    ?>
                    <div class="form-group">
                        <?php
                        if (property_exists($tree, 'label') && !empty($tree->label)) {
                            ?>
                            <label for="<?php echo $location ?>"><?php echo $tree->label ?></label>
                        <?php }; ?>
                        <?php $std = property_exists($tree, 'std') ? $tree->std : '';
                        $val = ($init) ? $init : $std; ?>
                        <input type="text" class="form-control" id="<?php echo $location ?>"
                               name="<?php echo $location ?>" value="<?php echo old($location, $val) ?>">
                        <?php
                        if (property_exists($tree, 'description') && !empty($tree->description)) {
                            ?>
                            <small class="form-text text-muted"><?php echo $tree->description ?></small>
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
                        if (property_exists($tree, 'label') && !empty($tree->label)) {
                            ?>
                            <label for="<?php echo $location ?>"><?php echo $tree->label ?></label>
                        <?php }; ?>
                        <?php $std = property_exists($tree, 'std') ? $tree->std : '';
                        $val = (!empty($init)) ? $init : $std; ?>
                        <textarea class="form-control" id="<?php echo $location ?>" name="<?php echo $location ?>"
                                  placeholder="<?php echo $tree->description ?>"><?php echo old($location, $val) ?></textarea>
                    </div>
                    <?php
                    break;
                case 'on-off':
                    ?>
                    <div class="form-group">
                        <label class="form-switch d-flex align-items-center">
                            <?php if (property_exists($tree, 'description')) { ?>
                                <p>
                                    <small><?php echo $tree->description ?></small>
                                </p>
                            <?php } ?>
                            <div class="mr-1 ml-2">
                                <?php $checked = (property_exists($tree, 'std') && $tree->std == 'on') ? 'checked' : ''; ?>
                                <input type="checkbox"
                                       name="<?php echo $location ?>" <?php echo ($init != 'on') ? $checked : 'checked' ?>><i></i>
                            </div>
                            <?php if (property_exists($tree, 'label')) { ?>
                                <p class="ml-1"><?php echo $tree->label ?></p>
                            <?php } ?>
                        </label>
                    </div>
                    <?php
                    break;
                case 'select':
                    if (property_exists($tree, 'choices')) {
                        $choices = $tree->choices;
                        ?>
                        <div class="form-group">
                            <?php if (property_exists($tree, 'label')) { ?>
                                <label for="<?php echo $location ?>"><?php echo $tree->label ?></label>
                            <?php } ?>
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
                            <?php if (property_exists($tree, 'description')) { ?>
                                <small><?php echo $tree->description ?></small>
                            <?php } ?>
                        </div>
                        <?php
                    }
                    break;
                case 'image':
                    ?>
                    <div class="form-group">
                        <?php if (property_exists($tree, 'label')): ?>
                            <label><?php echo $tree->label ?></label>
                        <?php endif; ?>
                        <div class="card">
                            <div class="card-header">
                                <i class="float-right fa fa-angle-up"></i>
                                <p>
                                    <?php echo (property_exists($tree, 'description')) ? $tree->description : 'تصویر خود را آپلود کنید'; ?>
                                    <a type="button" data-toggle="modal" data-target="#tabtarh-lib">
                                        <i class="fa fa-cloud-upload"></i>
                                    </a>
                                    <input type="hidden" class="tbt-hide single-file" name="<?php echo $location ?>"
                                           value="<?php echo(!empty($init) ? explode(',', $init)[0] : '') ?>">
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
                        <?php if (property_exists($tree, 'label')): ?>
                            <label><?php echo $tree->label ?></label>
                        <?php endif; ?>
                        <div class="card">
                            <div class="card-header">
                                <i class="float-right fa fa-angle-up"></i>
                                <p>
                                    <?php echo (property_exists($tree, 'description')) ? $tree->description : 'تصویر خود را آپلود کنید'; ?>
                                    <a type="button" data-toggle="modal" data-target="#tabtarh-lib">
                                        <i class="fa fa-cloud-upload"></i>
                                    </a>
                                    <input type="hidden" class="tbt-hide" name="<?php echo $location ?>"
                                           value="<?php echo(!empty($init) ? $init : '') ?>">
                                </p>

                            </div>
                            <div class="card-body d-flex flex-wrap">
                            </div>
                        </div>
                    </div>
                    <?php
                    break;
                case 'list-item':
                    $this->showListItem($location, $tree, $init);
                    break;
            }
        }
    }

    public function showListItem($location, $tree, $init)
    {
        $tree = json_decode(json_encode($tree), true);
        $settings = $tree['settings'];
        $values = json_decode($init, true);
        ?>
        <div class="form-group">
            <?php if (array_key_exists('label', $tree)): ?>
                <label><?php echo $tree['label'] ?></label>
            <?php endif; ?>
            <div class="card">
                <div class="card-header">
                    <i class="float-right fa fa-angle-up"></i>
                    <p>
                        <?php echo (array_key_exists('description', $tree)) ? $tree['description'] : 'لیست دلخواه خود را ایجاد کنید'; ?>
                        <span type="button"
                              class="fa fa-plus add-list-item-post-meta btn btn-sm btn-info rounded-circle"></span>
                        <input type="hidden" value="<?php echo $location ?>">
                    </p>
                </div>
                <div class="card-body">
                    <input type="hidden" value='<?php echo json_encode($settings); ?>'>
                    <?php if (!empty($values)):$cnt = count($values); ?>
                        <?php for ($i = 0; $i < $cnt; $i++) { ?>
                            <div class="card option-list-item">
                                <div class="card-header text-right">
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn  btn-danger"><i class="fa fa-trash m-1"></i>
                                        </button>
                                        <button type="button" class="btn  btn-secondary"><i class="fa fa-edit m-1"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <?php foreach ($settings as $value): ?>
                                        <?php $id = $value['id'];
                                        unset($value['id']);
                                        $init = isset($values[$i][$id]) ? $values[$i][$id] : '';
                                        $json = $value;
                                        $this->showSingleSetting("meta[$location][$i][$id]", (object)$json, $init, true); ?>
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

    public function getOption($name, $post_id)
    {
        $optionItem = Postmeta::firstWhere(['meta_key' => $name, 'post_id' => $post_id]);
        if ($optionItem && $optionItem->meta_value) {
            return $optionItem->meta_value;
        }
        return false;
    }


    public static function getMeta($option, $value, $postmetas, $direct = true)
    {
        if (isset($option['single-page']) && !$option['single-page']) {
            return null;
        }
        $units = [
            'length' => 'متر',
            'area' => 'متر مربع',
            'price' => 'تومان',
        ];
        $val = [];
        if ($option && isset($option['type'])) {
            switch ($option['type']) {
                case 'text':
                    $val['value'] = $value;
                    break;
                case 'number':
                    $val['value'] = number_format($value);
                    break;
                case 'textarea':
                    $val['value'] = $value;
                    break;
                case 'on-off':
                    if ($value == 'on') {
                        $val['value'] = true;
                    } else {
                        $val['value'] = false;
                    }
                    break;
                case 'select':
                    if (isset($option['choices'])) {
                        if (!is_array($option['choices']))
                            $option['choices'] = json_decode($option['choices'], true);
                        $select = $value;
                        if (isset($option['choices'][$select])) {
                            $val['value'] = $option['choices'][$select];
                        }
                    }
                    break;

                case 'image':
                    $file = File::findOrFail((int)$value);
                    $val['value'] = $file->url;
                    break;

                case 'gallery':
                    $images = explode(',', $value);
                    $files = [];
                    foreach ($images as $file_id) {
                        $file = File::findOrFail($file_id);
                        $files[] = $file->url;
                    }
                    $val['value'] = $files;
                    break;

                case 'term-select':
                    $term_id = $value;
                    $term = Term::findOrFail($term_id);
                    $val = [];

                    $termmetas = array_column($term->termmetas()->where('meta_key', '!=', 'relate_fields')->get()->toArray(), 'meta_value', 'meta_key');
                    $val['value'] = $term->term_name;

                    if (isset($option['term_type']) && !empty($termmetas)) {
                        $term_type = $option['term_type'];
                        $term_options = $term_type::$extra_meta;

                        $subs = [];
                        if (isset($term_options) && !empty($term_options)) {
                            foreach ($term_options as $child) {
                                $subs[] = static::getMeta($child, $termmetas[$child['id']], $termmetas);
                                $i = ['id' => $child['id']];
                                if (isset($child['label'])) {
                                    $i['label'] = $child['label'];
                                }
                                $subs[] = $i;
                            }
                        }
                        if (!empty($subs))
                            $val['subs'] = $subs;
                    }
                    $children = $term->getRelatedFields();
                    $related = [];
                    if (isset($children) && !empty($children)) {
                        foreach ($children as $child) {
                            if (isset($postmetas[$child['id']]))
                                $related[] = static::getMeta($child, $postmetas[$child['id']], $postmetas);

                        }
                    }
                    if (!empty($related))
                        $val['related'] = $related;

                    break;
                case 'year-from':
                    $year = $value;
                    if (isset($option['start']) && $year < $option['start']) {
                        $val['value'] = "قبل از " . $option['start'];
                    } else {
                        $val['value'] = $year;
                    }
                    break;
                case 'icon-select':
                    $val['value'] = $value;
                    break;
                case 'list-item':
                    $data = json_decode($value, true);
                    $settings = array_column($option['settings'], null, 'id');
                    $choices = [];
                    foreach ($data as $datum) {
                        $res = [];
                        foreach ($datum as $i => $j) {
                            $x = [];
                            $x['id'] = $settings[$i]['id'];
                            if (isset($settings[$i]['label']))
                                $x['label'] = $settings[$i]['label'];
                            $x['value'] = static::getMeta($settings[$i], $datum[$i], $postmetas, false);
                            $res[$settings[$i]['id']] = $x;
                        }
                        $choices[] = $res;
                    }
                    $val['values'] = $choices;
                    break;
                case 'date':
                    $val['value'] = $value;
                    break;
                case 'transaction-select':
                    $term_id = $value;
                    $term = Term::find($term_id);
                    $val = [];
                    if ($term) {
                        $termmetas = array_column($term->termmetas()->where('meta_key', '!=', 'relate_fields')->get()->toArray(), 'meta_value', 'meta_key');
                        $val['value'] = $term->term_name;

                        if (isset($option['term_type']) && !empty($termmetas)) {
                            $term_type = $option['term_type'];
                            $term_options = $term_type::$extra_meta;

                            $subs = [];
                            if (isset($term_options) && !empty($term_options)) {
                                foreach ($term_options as $child) {
                                    $subs[] = static::getMeta($child, $termmetas[$child['id']], $termmetas);
                                    $i = ['id' => $child['id']];
                                    if (isset($child['label'])) {
                                        $i['label'] = $child['label'];
                                    }
                                    $subs[] = $i;
                                }
                            }
                            if (!empty($subs))
                                $val['subs'] = $subs;
                        }
                        $children = $term->getRelatedFields();
                        $related = [];
                        if (isset($children) && !empty($children)) {
                            foreach ($children as $child) {
                                if (isset($postmetas[$child['id']]))
                                    $related[] = static::getMeta($child, $postmetas[$child['id']], $postmetas);

                            }
                        }
                        if (!empty($related))
                            $val['related'] = $related;
                    }
                    break;
            }
            if (!empty($val)) {
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
            } else {
                return null;
            }
        }


    }


//    public static function getMeta(){
//        $meta_value=static::$meta_value;
//        $arr=array();
//        if (!empty($meta_value)){
//            foreach ($meta_value as $post_meta){
//                if (isset($post_meta['content'])){
//                    $arr[]=$post_meta['content'];
//                }
//            }
//            return array_unique($arr);
//        }else{
//            return array();
//        }
//    }

    public static function get_meta_array_by_id($id)
    {
        $content = array_merge(...array_column(static::$meta_value, 'content'));
        $val = array_values(filter_by_value($content, 'id', $id));
        if (count($val) > 0)
            return array_values(filter_by_value($content, 'id', $id))[0];
        else
            return false;
    }

    public function touch($post_id)
    {
        $postItem = Post::findOrFail($post_id);
        if ($postItem->touch()) {
            $result = ['status' => true, 'message' => 'تاریخ آگهی موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => ' عملیات به روز رسانی تاریخ آگهی موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);

    }

    //    option functions
    public function getOptions()
    {
        $my_options = array_column(Option::all()->toArray(), 'value', 'name');
        $site_options = ThemeSettingsController::$site_options;
        $options = array_column($site_options, null, 'id');
        $res = [];
        foreach ($options as $index => $option) {
            if (isset($my_options[$index])) {
                $meta = static::getMeta($option, $my_options[$index], $my_options);
                if (isset($meta)) {
                    $res[] = $meta;
                }
            }
        }
        return response()->json(['options' => array_column($res, null, 'id')]);

    }

    public static function applyChangeToMetaArray(&$content)
    {
        if (isset($content['type']) && $content['type'] == 'term-select') {
            $term_type = $content['term_type'];
            $terms = $term_type::getTree();
            if ($terms) {
                $terms = array_column($terms, 'term_name', 'term_id');
            }
            $content['choices'] = $terms;
        } elseif (isset($content['type']) && $content['type'] == 'transaction-select') {
            $transactions = Term::where('term_type', TransactionController::getTermTypeId())->select(['term_id', 'term_name'])->get()->toArray();
            array_walk($transactions, function (&$val) {
                if (isset($val['related'])) {
                    $val['related'] = array_filter($val['related'], function ($value) {
                        return (isset($value['search-filter']) && $value['search-filter'] == 'on');
                    });
                }
            });
            $content['choices'] = $transactions;
        } elseif (isset($content['type']) && $content['type'] == 'year-from') {
            $end = Jalalian::fromCarbon(\Carbon\Carbon::now())->getYear();
            $content['end'] = (string)$end;
        }

    }


    public function getAddsTermAndMeta()
    {
        $meta_value = static::$meta_value;
        foreach ($meta_value as $index => $item) {
            if (isset($item['content'])) {
                foreach ($item['content'] as $index1 => $content) {
                    if (isset($content['front-adds']) && !$content['front-adds']) {
                        unset($meta_value[$index]['content'][$index1]);
                        continue;
                    }
                    if (isset($content['type']) && $content['type'] == 'list-item') {
                        foreach ($content['settings'] as $index2 => $setting) {
                            static::applyChangeToMetaArray($meta_value[$index]['content'][$index1]['settings'][$index2]);
                        }
                    } else {
                        static::applyChangeToMetaArray($meta_value[$index]['content'][$index1]);
                    }
                }

                if (count($meta_value[$index]['content']) == 0) {
                    unset($meta_value[$index]);
                    continue;
                }
            }
        }
        $support_terms = static::$support_terms;
        $terms = [];
        foreach ($support_terms as $term => $val) {
            $terms[] = [
                'label' => $term::$view_labels['label'],
                'choices' => array_column($term::getTree(), 'term_name', 'term_id'),
            ];
        }
        return response()->json(['metas' => $meta_value, 'terms' => $terms]);

    }

    public function getAddInfo($add_id)
    {
        $add = Post::findOrFail($add_id);

        $postmetas = array_column($add->postmetas()->get()->toArray(), 'meta_value', 'meta_key');
        if ($add->trash == 0 && isset($postmetas['confirm']) && $postmetas['confirm'] == 2 && $add->status == 1) {
            $arr = [];
            foreach ($postmetas as $index => $postmeta) {
                $meta_array = static::get_meta_array_by_id($index);
                $val = null;
                if ($meta_array && isset($meta_array['type']) && isset($postmetas[$index])) {
                    $val = static::getMeta($meta_array, $postmetas[$index], $postmetas);
                    if (isset($val)) {
                        if (isset($val['related'])) {
                            $related = $val['related'];
                            unset($val['related']);
                        }
                        $arr[$index] = $val;
                        if (isset($related))
                            $arr = array_merge($arr, array_column($related, null, 'id'));
                        unset($related);
                    }
                }
            }
            $lists = filter_by_value($arr, 'type', 'list-item');
            $arr = array_diff_key($arr, $lists);

            $prices = filter_by_value($arr, 'price', 'on');
            $arr = array_diff_key($arr, $prices);

//                return $lists;
            $arr['ostan'] = ['id' => 'ostan', 'label' => 'استان', 'value' => $add->region->getOstan()];
            $arr['shahrestan'] = ['id' => 'shahrestan', 'label' => 'شهرستان', 'value' => $add->region->getShahrestan()];
            $arr['mantaghe'] = ['id' => 'mantaghe', 'label' => 'منطقه', 'value' => $add->region->getMantaghe()];
            $arr['bakhsh'] = ['id' => 'bakhsh', 'label' => 'بخش', 'value' => $add->region->getBakhsh()];;
            $arr['address'] = ['id' => 'address', 'label' => 'آدرس', 'value' => $postmetas['address']];

            $res = ['main' => $add, 'experts' => $add->experts];
            $res['created_at'] = Jalalian::forge(strtotime($add->created_at))->format('%A %d %B %y');
            $res['updated_at'] = Jalalian::forge(strtotime($add->updated_at))->format('%A %d %B %y');

            if (!empty($lists)) {
                $res['lists'] = $lists;
            }
            if (!empty($prices)) {
                $res['prices'] = $prices;
            }
            if (isset($arr['image_gallery']) && isset($arr['image_gallery']['value'])) {
                $res['image_gallery'] = $arr['image_gallery']['value'];
                unset($arr['image_gallery']);
            }
            unset($arr['address']);
            unset($arr['bakhsh']);
            $res['metas'] = $arr;

        }


        return Response::json($arr, 200);
    }

    public function getSpeciallAdds($count = 5)
    {
        $special_add_metas = ['luxe', 'immediate', 'changeable', 'transaction'];

        $adds = static::getAllAdds()->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', ['special', 'on'])->pluck('postId')->toArray();
        $res_array = Post::with('postmetas')->whereIn('postId', $adds)->select(['postId', 'name', 'image', 'slug', 'updated_at'])->limit($count)->orderBy('updated_at', 'desc')->get()->toArray();
        $results = [];
        foreach ($res_array as $res) {
            $i = [];
            $i['id'] = $res['postId'];
            $i['title'] = $res['name'];
            $i['image'] = $res['mainImg'];
            $i['date'] = Jalalian::forge(strtotime($res['updated_at']))->format('%A %d %B %Y');
//            $i['metas']=array_column($res['postmetas'],'meta_value','meta_key');
            $prices = [];
            $i['metas'] = [];
            $metas = array_column($res['postmetas'], 'meta_value', 'meta_key');
            foreach ($special_add_metas as $value) {
                if (isset($metas[$value])) {
                    $i['metas'][$value] = static::getMeta(static::get_meta_array_by_id($value), $metas[$value], $metas);
                }
            }
            if (!empty($i)) {
                $results[] = $i;
            }
        }
        return response()->json($results);
    }


    public function getAddsTypes()
    {
        $transactions = Term::where('term_type', TransactionController::getTermTypeId())->select(['term_id', 'term_name'])->get()->toArray();

        $land_types = Term::where('term_type', LandTypeController::getTermTypeId())->select(['term_id', 'term_name'])->get()->toArray();

        array_walk($transactions, function (&$val) {
            if (isset($val['related'])) {
                $val['related'] = array_filter($val['related'], function ($value) {
                    return (isset($value['search-filter']) && $value['search-filter'] == 'on');
                });
            }
        });
        array_walk($land_types, function (&$val) {
            if (isset($val['related'])) {
                $val['related'] = array_filter($val['related'], function ($value) {
                    return (isset($value['search-filter']) && $value['search-filter'] == 'on');
                });
            }
        });

        $all_metas = static::get_all_metas();
        $all_metas = array_filter($all_metas, function (&$val) {
            return (isset($val['search-filter']) && $val['search-filter']);
        });

        array_walk($all_metas, function (&$val) {
            if (isset($val['type']) && $val['type'] == 'year-from') {
                $val['end'] = (string)Jalalian::fromCarbon(Carbon::now())->getYear();
            }
        });

        return response()->json([
            'global_filters' => array_column($all_metas, null, 'id'),
            'transactions' => array_column($transactions, null, 'term_id'),
            'land_types' => array_column($land_types, null, 'term_id'),
        ]);
    }

    public static function get_all_metas()
    {
        $meta_value = static::$meta_value;
        $res = [];
        foreach ($meta_value as $content) {
            if (isset($content['content']))
                $res = array_merge($res, $content['content']);
        }
        return $res;
    }

}
