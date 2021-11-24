<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Term;
use App\Models\Term_type;
use Illuminate\Http\Request;

class LandTypeController extends CategoriesController
{
    //
    public static $term_type='land_type';
    public static $has_tree=false;
    public static $show_inputs_mode=true;
    public static $list_view='admin.list.category';
    public static $posts_list_route='admin.land_types.list';
    public static $posts_edit_route='admin.land_type.edit';
    public static $posts_delete_route='admin.land_type.delete';
    public static $breadcrumb_title='نوع ملک';
    public static $add_item='افزودن نوع ملک';
    public static $edit_item='وبرایش نوع ملک';
    public static $items_list='لیست انواع ملک';

    public static $view_labels=array(
        'label'=>'انواع ملک',
    );

    public static $extra_meta=array(
        array(
            'id'=>'relate_fields',
            'label'=>'ویژگی های وابسته',
            'type'=>'list-item',
            'settings'=>array(
                array(
                    'id'=>'id',
                    'label'=>'شناسه',
                    'type'=>'text',
                ),
                array(
                    'id'=>'label',
                    'label'=>'عنوان',
                    'type'=>'text',
                ),
                array(
                    'id'=>'type',
                    'label'=>'نوع فیلد',
                    'type'=>'text',
                ),
                array(
                    'id'=>'choices',
                    'label'=>'json حالت های ممکن',
                    'description'=>'فقط برای نوع select',
                    'type'=>'text',
                ),
                array(
                    'id'=>'search-filter',
                    'label'=>'فیلتر جستجو',
                    'type'=>'on-off',
                    'std'=>'off'
                ),
                array(
                    'id'=>'unit',
                    'label'=>'انتخاب کمیت',
                    'type'=>'select',
                    'choices'=>array(
                        'none'=>'هیچ کدام',
                        'price'=>'قیمت',
                        'area'=>'مساحت',
                        'length'=>'طول',
                    ),
                ),
                array(
                    'id'=>'crm',
                    'label'=>'اطلاعات crm',
                    'description'=>'داده به شکل json وارد شود',
                    'type'=>'json',
                ),
            ),
        ),
    );

    public static $success_create_post='نوع ملک جدید با موفقیت ثبت شد.';
    public static $success_edit_post='نوع ملک شما با موفقیت ویرایش شد.';
    public static $success_delete_post='نوع ملک شما با موفقیت حدف شد.';

}
