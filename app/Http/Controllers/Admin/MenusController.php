<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Post;
use App\Models\Term;
use App\Models\Term_type;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\AssignOp\Mod;

class MenusController extends Controller
{
    //
    public function index()
    {
        $pages=Post::where('post_type',PagesController::$post_type)->toArray();
        $categories=array();
        $this->getCategories($categories,0,'category');
        $tags=array();
        $this->getCategories($tags,0,'tag');
        $menus=Menu::all();
        return view('admin.edit.menu',compact('pages','categories','tags','menus'))->with('page_title','فهرست ها');
    }

    public function create()
    {
        $posts=Post::all()->toArray();
        $categories=array();
        $this->getCategories($categories,0,'category');
        $tags=array();
        $this->getCategories($tags,0,'tag');
        $menus=Menu::all();
        return view('admin.edit.menu',compact('posts','categories','tags','menus'))->with('page_title','فهرست ها');
    }

    public function getCategories(&$output, $level = 0, $term_type = 'category',$first=0)
        {
            $cat = Term_type::where('term_type_name', $term_type)->first();
            $terms = (collect($cat->terms()->where('parent', $level)->orderBy('parent')->get())->toArray());
            foreach ($terms as $term) {
                $termItem = Term::find($term['term_id']);
                if ($termItem){
                    $arr=$termItem->toArray();
                    $arr['level']=$first;
                    $output[] = $arr;
                }
                $this->getCategories($output, $term['term_id'], $term_type,$first+1);
            }
        }

}
