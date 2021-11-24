<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class CommentsController extends Controller
{
    //
    public static $list_view = 'admin.list.comments';
    public static $comments_list_route = 'admin.comments.list';
    public static $comments_delete_route = 'admin.comment.delete';

    public static $items_list = 'دیدگاه ها';
    public static $success_delete_comment = 'دیدگاه مورد نظر با موفقیت حدف شد.';
    public static $failure_delete_comment = 'عملیات حذف دیدگاه موردنظر ناموفق بود.';


    public function index()
    {
        $comments = Comment::all();
        $result = ['comments' => $comments, 'page_title' => static::$items_list];
        return Response::json($result, 200);
    }

    public function delete($comment_id)
    {
        $commentItem = Comment::findOrFail($comment_id);
        if ($commentItem instanceof Comment) {
            if ($commentItem->delete()) {
                $result = ['status' => true, 'message' => static::$success_delete_comment];
            } else {
                $result = ['status' => false, 'message' => static::$failure_delete_comment];
            }
        } else {
            $result = ['status' => false, 'message' => 'آیتم انتخابی از نوع کامنت نیست.'];
        }

        return Response::json($result, 200);
    }

}
