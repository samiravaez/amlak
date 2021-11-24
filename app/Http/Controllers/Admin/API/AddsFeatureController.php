<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Term;
use App\Models\Term_type;
use Illuminate\Http\Request;

class AddsFeatureController extends CategoriesController
{
    //
    public static $term_type='adds_feature';
    public static $has_tree=false;
    public static $show_inputs_mode=true;
    public static $posts_list_route='admin.adds_features.list';
    public static $posts_edit_route='admin.adds_feature.edit';
    public static $posts_delete_route='admin.adds_feature.delete';
    public static $breadcrumb_title='امکانات رفاهی';
    public static $add_item='افزودن امکانات رفاهی';
    public static $edit_item='وبرایش امکانات رفاهی';
    public static $items_list='لیست امکانات رفاهی';

    public static $view_labels=array(
        'label'=>'امکانات رفاهی',
    );

    public static $extra_meta=array(
        array(
            'id' => 'icon',
            'type' => 'icon-select',
            'label' => 'انتخاب آیکون',
            'description' => 'آیکون خود را انتخاب کنید',
        ),
    );

    public static $success_create_post='امکانات رفاهی جدید با موفقیت ثبت شد.';
    public static $success_edit_post='امکانات رفاهی شما با موفقیت ویرایش شد.';
    public static $success_delete_post='امکانات رفاهی شما با موفقیت حدف شد.';
    public static $failure_delete_post = 'عملیات حذف امکانات رفاهی موردنظر ناموفق بود.';
    public static $failure_create_post = 'عملیات ایجاد امکانات رفاهی جدید ناموفق بود.';
    public static $failure_select_post = 'امکانات رفاهی موردنظر یافت نشد.';
    public static $failure_edit_post = 'عملیات به روز رسانی امکانات رفاهی موردنظر ناموفق بود.';

}
