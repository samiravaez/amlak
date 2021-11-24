<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Shahrestan;
use Illuminate\Http\Request;

class ManteghController extends Controller
{
    //
    public function index(){
        $ostans=Ostan::all();
        $manategh=Mantaghe::all();
        return view('admin.list.manategh',compact('manategh','ostans'))->with(['page_title'=>'لیست مناطق']);
    }

    public function store(Request $request){
        $mantaghe=Mantaghe::create(array(
            'PK_Shahrestan'=>$request->input('shahrestan'),
            'Title'=>$request->input('mantaghe'),
        ));

        if ($mantaghe){
            return redirect()->route('admin.manategh.index')->with('success','منطقه جدید با موفقیت ایجاد شد.');
        }else{
            return redirect()->route('admin.manategh.index');
        }
    }

    public function delete(Request $request,$mantaghe_id){
        $mantaghe=Mantaghe::find($mantaghe_id);
        if ($mantaghe){
            if (count($mantaghe->bakhshs()->get()->toArray())==0){
                $mantaghe->delete();
                return redirect()->route('admin.manategh.index')->with('success','منطقه مورد نظر با موفقیت حذف شد.');
            }else{
                return redirect()->back()->with('error','جهت حذف منطقه ابتدا باید بخش های آن را پاک کنید یا انتقال دهید');
            }
        }else{
            return redirect()->route('admin.manategh.index');
        }
    }
//
    public function edit($mantaghe_id){
        $mantaghe_select=Mantaghe::find($mantaghe_id);
        $ostans=Ostan::all();
        if ($mantaghe_select){
            return view('admin.list.manategh',compact('ostans','mantaghe_select'))->with(['page_title'=>'ویرایش منطقه']);
        }else{
            return redirect()->route('admin.manategh.index');
        }
    }

    public function update(Request $request,$mantaghe_id){
        $mantaghe = Mantaghe::find($mantaghe_id);
        if ($mantaghe){
            $update_mantaghe=$mantaghe->update(array(
                'PK_Shahrestan'=>$request->input('shahrestan'),
                'Title'=>$request->input('mantaghe'),
            ));
            if ($update_mantaghe){
                return redirect()->route('admin.manategh.index')->with('success','منطقه مورد نظر با موفقیت به روز رسانی شد.');
            }
        }else{
            return redirect()->route('admin.manategh.index');
        }
    }


}
