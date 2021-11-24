<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ostan;
use Illuminate\Http\Request;

class OstansController extends Controller
{
    //
    public function index(){
        $ostans=Ostan::all();
        return view('admin.list.ostans',compact('ostans'))->with(['page_title'=>'لیست استان ها']);
    }

    public function store(Request $request){
        $ostan=Ostan::create(array(
            'Title'=>$request->input('ostan')
        ));

        if ($ostan){
            return redirect()->route('admin.ostans.index')->with('success','استان جدید با موفقیت ایجاد شد.');
        }else{
            return redirect()->route('admin.ostans.index');
        }
    }

    public function delete(Request $request,$ostan_id){
        $ostan=Ostan::find($ostan_id);
        if ($ostan){
            if (count($ostan->shahrestans()->get()->toArray())==0){
                $ostan->delete();
                return redirect()->route('admin.ostans.index')->with('success','استان مورد نظر با موفقیت حذف شد.');
            }else{
                return redirect()->back()->with('error','جهت حذف استان ابتدا باید شهرهای آن را پاک کنید یا انتقال دهید');
            }
        }else{
            return redirect()->route('admin.ostans.index');
        }
    }

    public function edit($ostan_id){
        $ostan_select=Ostan::find($ostan_id);
        $ostans=Ostan::all();
        if ($ostan_select){
            return view('admin.list.ostans',compact('ostans','ostan_select'))->with(['page_title'=>'ویرایش استان']);
        }else{
            return redirect()->route('admin.ostans.index');
        }
    }

    public function update(Request $request,$ostan_id){
        $ostan = Ostan::find($ostan_id);
        if ($ostan){
            $update_ostan=$ostan->update(array(
                'Title'=>$request->input('ostan')
            ));
            if ($update_ostan){
                return redirect()->route('admin.ostans.index')->with('success','استان مورد نظر با موفقیت به روز رسانی شد.');
            }
        }else{
            return redirect()->route('admin.ostans.index');
        }
    }
}
