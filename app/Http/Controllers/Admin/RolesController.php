<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    //
    public function index(){
        $roles=Role::all();
        return view('admin.list.roles',compact('roles'))->with(['page_title'=>'نقش های کاربری']);
    }

    public function create(){
        $permissions=Permission::all();
        return view('admin.edit.role',compact('permissions'))->with(['page_title'=>'افزودن نقش کاربری']);
    }

    public function store(Request $request){
        $role=Role::create(array(
            'name'=>$request->input('role_name'),
            'title'=>$request->input('role_title'),
        ));
        $permissions=$request->input('permissions');
        if ($role){
            $role->syncPermissions($permissions);
        }
        return redirect()->route('admin.roles.list');

    }

    public function edit($role_id){
        $role=Role::find($role_id);
        $permissions=Permission::all();
        if ($role){
            return view('admin.edit.role',compact('role','permissions'))->with(['page_title'=>'ویرایش نقش کاربری']);
        }else{
            return redirect()->route('admin.roles.list');
        }
    }

    public function update(Request $request,$role_id){
        $role=Role::find($role_id);
        $permissions=$request->input('permissions');
        $role->update(array(
            'name'=>$request->input('role_name'),
            'title'=>$request->input('role_title'),
        ));
        $role->syncPermissions($permissions);
        return redirect()->route('admin.roles.list');
    }

    public function delete(Request $request,$role_id){
        $role=Role::find($role_id);
        if($role){
            if($role->delete()){
                return redirect()->route('admin.roles.list')->with('success','نقش کاربری با موفقیت حذف شد');
            }
        }else{
            return redirect()->route('admin.roles.list');
        }
    }
}
