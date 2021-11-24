<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Term;
use App\Models\Term_type;
use Illuminate\Http\Request;

class FacilitiesController extends CategoriesController
{
    //
    public static $term_type='facility';
    public static $has_tree=false;
    public static $list_view='admin.list.category';
    public static $posts_list_route='admin.facilities.list';
    public static $posts_edit_route='admin.facility.edit';
    public static $posts_delete_route='admin.facility.delete';
    public static $breadcrumb_title='مراکز مهم';
    public static $add_item='افزودن مراکز مهم';
    public static $edit_item='وبرایش مراکز مهم';
    public static $items_list='لیست مراکز مهم';

    public static $view_labels=array(
        'label'=>'مراکز مهم',
    );

    public static $extra_meta=array(
        array(
            'id' => 'icon',
            'type' => 'icon-select',
            'label' => 'انتخاب آیکون',
            'description' => 'آیکون خود را انتخاب کنید',
        ),
    );


    public static $success_create_post='مراکز مهم جدید با موفقیت ثبت شد.';
    public static $success_edit_post='مراکز مهم شما با موفقیت ویرایش شد.';
    public static $success_delete_post='مراکز مهم شما با موفقیت حدف شد.';

}
