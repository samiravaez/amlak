<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bakhsh;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Shahrestan;
use Illuminate\Http\Request;

class BakhshsController extends Controller
{
    //
    public function index(){
        $ostans=Ostan::all();
        $bakhshs=Bakhsh::all();
        return view('admin.list.bakhshs',compact('bakhshs','ostans'))->with(['page_title'=>'لیست بخش ها']);
    }

    public function store(Request $request){
        $bakhsh=Bakhsh::create(array(
            'PK_Mantaghe'=>$request->input('mantaghe'),
            'Title'=>$request->input('bakhsh'),
        ));

        if ($bakhsh){
            return redirect()->route('admin.bakhshs.index')->with('success','بخش جدید با موفقیت ایجاد شد.');
        }else{
            return redirect()->route('admin.bakhshs.index');
        }
    }

    public function delete(Request $request,$bakhsh_id){
        $bakhsh=Bakhsh::find($bakhsh_id);
        if ($bakhsh){
            $bakhsh->delete();
            return redirect()->route('admin.bakhshs.index')->with('success','بخش مورد نظر با موفقیت حذف شد.');
        }else{
            return redirect()->route('admin.bakhshs.index');
        }
    }

    public function edit($bakhsh_id){
        $bakhsh_select=Bakhsh::find($bakhsh_id);
        $ostans=Ostan::all();
        if ($bakhsh_select){
            return view('admin.list.bakhshs',compact('ostans','bakhsh_select'))->with(['page_title'=>'ویرایش بخش']);
        }else{
            return redirect()->route('admin.bakhshs.index');
        }
    }

    public function update(Request $request,$bakhsh_id){
        $bakhsh = Bakhsh::find($bakhsh_id);
        if ($bakhsh){
            $update_bakhsh=$bakhsh->update(array(
                'PK_Mantaghe'=>$request->input('mantaghe'),
                'Title'=>$request->input('bakhsh'),
            ));
            if ($bakhsh){
                return redirect()->route('admin.bakhshs.index')->with('success','بخش مورد نظر با موفقیت به روز رسانی شد.');
            }
        }else{
            return redirect()->route('admin.bakhshs.index');
        }
    }


}
