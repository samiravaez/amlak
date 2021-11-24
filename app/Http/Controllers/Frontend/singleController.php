<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class singleController extends Controller
{
    use Functions;
    //
    public function show($post_slug)
    {
        $post=Post::where('slug',$post_slug);
        $options=array();
        if ($post->count()>0){
            $post=$post->first();
            $options['defaultBanner']=$this->getOption('defaultBanner');
            return view('frontend.single.post',compact('post','options'))->withShortcodes()->with('page_title',$post->name);
        }else{
            return abort(404);
        }
    }
}
