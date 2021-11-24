<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class CommentsController extends Controller
{
    //
    public static $list_view='admin.list.comments';
    public static $posts_list_route='admin.comments.list';
    public static $posts_delete_route='admin.comment.delete';

    public static $items_list='دیدگاه ها';
    public static $success_delete_post='دیدگاه مورد نظر با موفقیت حدف شد.';


    public function index()
    {
        $comments=Comment::all();
        $expressions=array(
            'posts_delete_route'=>static::$posts_delete_route,
        );
        return view(static::$list_view,compact('comments','expressions'))->withShortcodes()->with(['page_title' => static::$items_list]);
    }

    public function delete(Request $request,$comment_id){
        if ($comment_id && ctype_digit($comment_id)) {
            $commentItem = Comment::find($comment_id);
            if ($commentItem && $commentItem instanceof Comment) {
                $commentItem->delete();
                return redirect()->route(static::$posts_list_route)->with('success', static::$success_delete_post);
            }
        }
    }

}
