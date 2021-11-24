<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionsController extends Controller
{
    //
    public function index(){
        $permissions=Permission::all();
        return view('admin.list.permissions',compact('permissions'))->with(['page_title'=>'دسترسی های کاربران']);
    }

    public function create(){
        return view('admin.edit.permission')->with(['page_title'=>'افزودن سطح دسترسی']);
    }

    public function store(Request $request){
        $permission_name=$request->input('permission_name');
        $permission_title=$request->input('permission_title');
        $permissionItem=Permission::create(array(
            'name'=>$permission_name,
            'title'=>$permission_title,
        ));
        if ($permissionItem){
            return redirect()->route('admin.permissions.list')->with('success','سطح دسترسی جدید با موفقیت ایجاد شد');
        }
    }

    public function edit(Request $request,$permission_id){
        $permission=Permission::find($permission_id);
        if($permission){
            return view('admin.edit.permission',compact('permission'))->with(['page_title'=>'ویرایش سطح دسترسی']);
        }else{
            return redirect()->route('admin.permissions.list');
        }
    }

    public function update(Request $request,$permission_id){
        $permission=Permission::find($permission_id);
        if ($permission){
            $permission_title=$request->input('permission_title');
            $permission_name=$request->input('permission_name');
            $update_item=$permission->update(array(
                'name'=>$permission_name,
                'title'=>$permission_title,
            ));
            if ($update_item){
                return redirect()->route('admin.permissions.list')->with('success','سطح دسترسی با موفقیت ویرایش شد');
            }
        }
    }

    public function delete(Request $request,$permission_id){
        $permission=Permission::find($permission_id);
        if ($permission){
            if ($permission->delete()){
                return redirect()->route('admin.permissions.list')->with('success','سطح دسترسی با موفقیت حذف شد');
            }
        }else{
            return redirect()->route('admin.permissions.list');
        }
    }

}
