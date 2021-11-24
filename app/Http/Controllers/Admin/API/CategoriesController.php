<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Controller;
use App\Models\Term;
use App\Models\Term_type;
use App\Models\Termmeta;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Morilog\Jalali\Jalalian;

class CategoriesController extends Controller
{
    //
    public static $term_type = 'category';
    public static $has_tree = true;
    public static $show_inputs_mode = false;
    public static $list_view = 'admin.list.category';
    public static $posts_list_route = 'admin.categories.list';
    public static $posts_edit_route = 'admin.category.edit';
    public static $posts_delete_route = 'admin.category.delete';
    public static $breadcrumb_title = 'دسته بندی های نوشته';
    public static $add_item = 'افزودن دسته';
    public static $edit_item = 'وبرایش دسته';
    public static $items_list = 'لیست دسته یندی ها';
    public static $view_labels = array(
        'label' => 'دسته بندی نوشته',
        'search-label' => 'جستجوی دسته ها',
    );


    public static $extra_meta = array(
        array(
            'label' => 'گالری تصاویر',
            'content' => array(
                array(
                    'id' => 'main-photo',
                    'type' => 'image',
                    'label' => 'تصویر شاخص',
                    'description' => 'تصویر خود را انتخاب کنید.',
                ),
            ),
        ),
    );

    public static $success_create_post = 'دسته جدید با موفقیت ایجاد شد.';
    public static $success_edit_post = 'دسته موردنظر با موفقیت به روز رسانی شد.';
    public static $success_delete_post = 'دسته موردنظر با موفقیت حدف شد.';
    public static $failure_delete_post = 'عملیات حذف دسته ی موردنظر ناموفق بود.';
    public static $failure_create_post = 'عملیات ایجاد دسته جدید ناموفق بود.';
    public static $failure_select_post = 'دسته موردنظر یافت نشد.';
    public static $failure_edit_post = 'عملیات به روز رسانی دسته موردنظر ناموفق بود.';

    public static function getTermTypeId()
    {
        return Term_type::where('term_type_name', static::$term_type)->first()->term_type_id;
    }

    public static function getTree($filter_by_value = array())
    {
        if (count($filter_by_value) > 0) {
            return Term::with('termmetas')->tree()->where('term_type', static::getTermTypeId())->whereIn('term_id', $filter_by_value)->get()->toArray();
        }
        return Term::with('termmetas')->tree()->where('term_type', static::getTermTypeId())->get()->toArray();
    }

    public function index()
    {
        $has_tree = static::$has_tree;
        if ($has_tree) {
            $terms = static::getTree();
        } else {
            $terms = Term::all()->sortBy('term_order')->where('term_type', static::getTermTypeId())->toArray();
        }

        $term_metas = $this->getCategoriesTermAndMeta();
        $expressions = array(
            'breadcrumb_title' => static::$breadcrumb_title,
            'form_title' => static::$add_item,
            'form_button' => static::$add_item,
            'posts_edit_route' => static::$posts_edit_route,
            'posts_delete_route' => static::$posts_delete_route,
        );
        $result = ['terms' => $terms, 'has_tree' => $has_tree, 'expressions' => $expressions, 'term_metas' => $term_metas, 'page_title' => static::$items_list];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $credentials = array(
            'term_type' => static::getTermTypeId(),
            'term_name' => request()->input('term_name'),
            'term_slug' => request()->input('term_slug'),
            'term_description' => request()->input('term_description'),
            'term_order' => intval(request()->input('term_order')),
        );

        if (static::$has_tree) {
            $credentials['parent'] = request()->input('parent');
        }

        if ($credentials['term_slug'] == '') {
            $credentials['term_slug'] = $this->uniqueSlug($credentials['term_name']);
        } else {
            $credentials['term_slug'] = $this->uniqueSlug($credentials['term_slug']);
        }

        $new_term = Term::create($credentials);
        if ($new_term) {
            if ($request->has('metas')) {
                $termMetas = $request->input('metas');
                if (!empty($termMetas)) {
                    $sync = array();
                    foreach ($termMetas as $index => $termMeta) {
                        $meta = new Termmeta();
                        $meta->meta_key = $index;
                        if (is_array($termMeta))
                            $meta->meta_value = json_encode(array_values($termMeta));
                        else
                            $meta->meta_value = $termMeta;
                        $sync[] = $meta;
                    }
                    $new_term->termmetas()->saveMany($sync);
                }
            }
            $result = ['status' => true, 'message' => static::$success_create_post];
        } else {
            $result = ['status' => false, 'message' => static::$failure_create_post];
        }
        return Response::json($result, 200);
    }


    public function edit($term_id)
    {
        $term_select = Term::findOrFail($term_id);
        if ($term_select && $term_select->term_type == static::getTermTypeId()) {
            $a = $term_select->getRelatedFields();

            $has_tree = static::$has_tree;
            if ($has_tree) {
                $terms = static::getTree();
            } else {
                $terms = Term::all()->where('term_type', static::getTermTypeId())->toArray();
            }

            $term_metas = $this->getCategoriesTermAndMeta();
//            foreach ($extra_meta as $meta) {
//                if (isset($meta['type']) && $meta['type'] == 'select') {
//                    if (isset($meta['choices'])) {
//                        $meta['choices'] = json_decode($meta['choices'], JSON_UNESCAPED_UNICODE);
//                    } else {
//                        $meta['choices'] = array();
//                    }
//                }
//                $term_metas .= OptionTree::showSetting($meta, $this->getOption($meta['id'], $term_id), false, true);
//            }

            $expressions = array(
                'breadcrumb_title' => static::$breadcrumb_title,
                'form_title' => static::$edit_item,
                'form_button' => static::$edit_item,
                'posts_edit_route' => static::$posts_edit_route,
                'posts_delete_route' => static::$posts_delete_route,
            );
            $result = ['term_select' => $term_select, 'terms' => $terms, 'has_tree' => $has_tree,
                'expressions' => $expressions, 'term_metas' => $term_metas, 'page_title' => static::$items_list];
        }
        else {
            $result = ['status'=>false, 'message'=>'دسته موردنظر موجود نیست.'];
        }

        return Response::json($result, 200);
    }

    public function update(Request $request, $term_id)
    {
        $term_select = Term::findOrFail($term_id);

        if ($term_select && $term_select->term_type == static::getTermTypeId()) {
            $credentials = array(
                'term_name' => request()->input('term_name'),
                'term_slug' => request()->input('term_slug'),
                'term_description' => request()->input('term_description'),
                'term_order' => intval(request()->input('term_order')),
            );
            if (static::$has_tree) {
                $credentials['parent'] = request()->input('parent');
            }

            if ($credentials['term_slug'] == '') {
                $credentials['term_slug'] = $this->uniqueSlug($credentials['term_name']);
            } elseif ($credentials['term_slug'] != $term_select->term_slug) {
                $credentials['term_slug'] = $this->uniqueSlug($credentials['term_slug']);
            }

            $updateResult = $term_select->update($credentials);

            if ($updateResult) {
                if ($request->has('metas')) {
                    $termMetas = $request->input('metas');
                    if (!empty($termMetas)) {
                        $sync = array();
                        foreach ($termMetas as $index => $termMeta) {
                            $meta = new Termmeta();
                            $meta->meta_key = $index;
                            if (is_array($termMeta))
                                $meta->meta_value = json_encode(array_values($termMeta));
                            else
                                $meta->meta_value = $termMeta;
                            $sync[] = $meta;
                        }
                        $term_select->termmetas()->delete();
                        $term_select->termmetas()->saveMany($sync);
                    }
                }
                $result = ['status' => true, 'message' => static::$success_edit_post];
            } else {
                $result = ['status' => false, 'message' => static::$failure_edit_post];
            }
        }
        return Response::json($result, 200);
    }

    public function delete($term_id)
    {
        $term_select = Term::findOrFail($term_id);

        if ($term_select && $term_select->term_type == static::getTermTypeId()) {
            $term_select->termmetas()->delete();
            $term_select->delete();
            $result = ['status' => true, 'message' => static::$success_delete_post];
        } else {
            $result = ['status' => false, 'message' => static::$failure_select_post];
        }
        return Response::json($result, 200);
    }

    public function uniqueSlug($text)
    {
        $slug = slug($text);
        $catId = Term_type::where('term_type_name', static::$term_type)->first()->term_type_id;
        $count = Term::where('term_slug', $slug)->where('term_type', $catId)->count();
        if ($count == 0) {
            return $slug;
        }
        $slugs = Term::where('term_type', $catId)->get()->filter(function ($post) use ($slug) {
            return preg_match("/$slug-\d+/", $post->term_slug);
        })->pluck('term_slug')->toArray();
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

    public function getOption($name, $term_id)
    {
        $optionItem = Termmeta::firstWhere(['meta_key' => $name, 'term_id' => $term_id]);
        if ($optionItem && $optionItem->meta_value) {
            return $optionItem->meta_value;
        }
        return false;
    }


    public function getCategoriesTermAndMeta()
    {
        $meta_value = static::$extra_meta;
        foreach ($meta_value as $index => $item) {
            if (isset($item['content'])) {
                foreach ($item['content'] as $index1 => $content) {
                    if (isset($content['front-adds']) && !$content['front-adds']) {
                        unset($meta_value[$index]['content'][$index1]);
                        continue;
                    }
                }
                if (count($meta_value[$index]['content']) == 0) {
                    unset($meta_value[$index]);
                    continue;
                }
            }
        }
        return response()->json(['metas' => $meta_value, 'terms' => []]);
    }


}
