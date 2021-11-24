<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenusController extends Controller
{
    //
    public function showMenuByname($name,$wrapperClass='')
    {
        $menu=Menu::where('name',$name);
        if ($menu && !empty($menu)){
            $listArray=json_decode($menu->pluck('json')->first());
            $list='';
            $this->listify($list,$listArray,$wrapperClass);
            return $list;
        }
    }

    public function listify(&$html,$json,$wrapperClass='')
    {
        if (is_array($json) && count($json)>0){
            $html.="<ul class='$wrapperClass'>";
            foreach ($json as $item){
                $name=$item->name;
                $class=property_exists($item,'class')?$item->class:'';
                $type=$item->type;
                $id=$item->id;
                $href=$this->getItemUrl($type,$id);
                $html.="<li class='$class'><a href='$href'>$name</a>";
                if (property_exists($item,'children')){
                    $this->listify($html,$item->children);
                }
                $html.="</li>";
            }
            $html.="</ul>";
        }
    }

    public function getItemUrl($type,$id)
    {
            $url='123';
            return $url;
    }
}
