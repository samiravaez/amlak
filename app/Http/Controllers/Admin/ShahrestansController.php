<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ostan;
use App\Models\Shahrestan;
use Illuminate\Http\Request;

class ShahrestansController extends Controller
{
    //
    public function index(){
        $shahrestans=Shahrestan::all();
        $ostans=Ostan::all();
        return view('admin.list.shahrestans',compact('shahrestans','ostans'))->with(['page_title'=>'لیست شهر ها']);
    }

    public function store(Request $request){
        $shahrestan=Shahrestan::create(array(
            'PK_Ostan'=>$request->input('ostan'),
            'Title'=>$request->input('shahrestan'),
        ));

        if ($shahrestan){
            return redirect()->route('admin.shahrestans.index')->with('success','شهر جدید با موفقیت ایجاد شد.');
        }else{
            return redirect()->route('admin.shahrestans.index');
        }
    }

    public function delete(Request $request,$shahr_id){
        $shahr=Shahrestan::find($shahr_id);
        if ($shahr){
            $shahr->delete();
            return redirect()->route('admin.shahrestans.index')->with('success','شهر مورد نظر با موفقیت حذف شد.');
        }else{
            return redirect()->route('admin.shahrestans.index');
        }
    }

    public function edit($shahr_id){
        $shahrestan_select=Shahrestan::find($shahr_id);
        $ostans=Ostan::all();
        if ($shahrestan_select){
            return view('admin.list.shahrestans',compact('ostans','shahrestan_select'))->with(['page_title'=>'ویرایش شهر']);
        }else{
            return redirect()->route('admin.shahrestans.index');
        }
    }

    public function update(Request $request,$shahr_id){
        $shahrestan = Shahrestan::find($shahr_id);
        if ($shahrestan){
            $update_shahrestan=$shahrestan->update(array(
                'PK_Ostan'=>$request->input('ostan'),
                'Title'=>$request->input('shahrestan'),
            ));
            if ($update_shahrestan){
                return redirect()->route('admin.shahrestans.index')->with('success','شهر مورد نظر با موفقیت به روز رسانی شد.');
            }
        }else{
            return redirect()->route('admin.shahrestans.index');
        }
    }


}
