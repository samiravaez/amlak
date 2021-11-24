<?php

namespace App\Http\Controllers\Admin\API;

use App\Classes\OptionTree;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Term;
use App\Models\Term_type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class TransactionController extends CategoriesController
{
    //
    public static $term_type='transaction';
    public static $has_tree=false;
    public static $show_inputs_mode=true;
    public static $posts_list_route='admin.transactions.list';
    public static $posts_edit_route='admin.transaction.edit';
    public static $posts_delete_route='admin.transaction.delete';
    public static $breadcrumb_title='نوع معامله';
    public static $add_item='افزودن نوع معامله';
    public static $edit_item='وبرایش نوع معامله';
    public static $items_list='لیست انواع معاملات';

    public static $view_labels=array(
        'label'=>'انواع معامله',
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
                    'id'=>'price',
                    'label'=>'در بخش قیمت آگهی نشان داده شود',
                    'type'=>'on-off',
                    'std'=>'off'
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
        array(
            'id'=>'land_type',
            'label'=>'انواع ملک',
            'type'=>'term-select',
            'show_related'=>false,
            'multiple'=>true,
            'term_type'=>LandTypeController::class,
        ),
        array(
            'id' => 'icon',
            'label'=>'انتخاب آیکون',
            'description' => 'آیکون این نوع معامله را انتخاب کنید',
            'type' => 'image',
        ),
//        array(
//            'id'=>'price_fields',
//            'label'=>'فیلدهای قیمت',
//            'description'=>'فیلدهای قیمت را با علامت | جدا کنید',
//            'type'=>'text',
//        ),
    );

    public static $success_create_post='نوع معامله جدید با موفقیت ثبت شد.';
    public static $success_edit_post='نوع معامله شما با موفقیت ویرایش شد.';
    public static $success_delete_post='نوع معامله شما با موفقیت حدف شد.';
    public static $failure_delete_post = 'عملیات حذف نوع معامله موردنظر ناموفق بود.';
    public static $failure_create_post = 'عملیات ایجاد نوع معامله جدید ناموفق بود.';
    public static $failure_select_post = 'نوع معامله موردنظر یافت نشد.';
    public static $failure_edit_post = 'عملیات به روز رسانی نوع معامله موردنظر ناموفق بود.';

}
