<?php

namespace App\Http\Controllers\Admin;

use App\Classes\OptionTree;
use App\Models\Bakhsh;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Postmeta;
use App\Models\Shahrestan;
use App\Models\Term;
use App\Models\Termmeta;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Morilog\Jalali\Jalalian;
use Illuminate\Support\Facades\Validator;


class PagesController extends PostsController
{
    public static $post_type='page';
    public static $list_view='admin.list.posts';
    public static $edit_view='admin.edit.post';
    public static $posts_list_route='admin.pages.list';
    public static $posts_edit_route='admin.page.edit';
    public static $posts_delete_route='admin.page.delete';
    public static $breadcrumb_title='برگه ها';
    public static $add_item='افزودن برگه';
    public static $items_list='همه برگه ها';

    public static $success_create_post='برگه جدید با موفقیت ثبت شد.';
    public static $success_edit_post='برگه شما با موفقیت ویرایش شد.';
    public static $success_delete_post='برگه شما با موفقیت حدف شد.';

    public static $meta_value=array(
    );

    public static $support_terms=array(
    );

}
