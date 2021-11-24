<?php

namespace App\Http\Controllers\Admin;


class TagsController extends CategoriesController
{
    //
    public static $term_type='tag';
    public static $has_tree=false;
    public static $list_view='admin.list.category';
    public static $posts_list_route='admin.tags.list';
    public static $posts_edit_route='admin.tag.edit';
    public static $posts_delete_route='admin.tag.delete';
    public static $breadcrumb_title='برچسب های نوشته';
    public static $add_item='افزودن برچسب';
    public static $edit_item='وبرایش برچسب';
    public static $items_list='لیست برچسب ها';

    public static $view_labels=array(
        'label'=>'برچسب نوشته',
    );

    public static $success_create_post='برچسب جدید با موفقیت ثبت شد.';
    public static $success_edit_post='برچسب شما با موفقیت ویرایش شد.';
    public static $success_delete_post='برچسب شما با موفقیت حدف شد.';

}
