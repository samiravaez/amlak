<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Response;

class RolesController extends Controller
{
    //
    public function index()
    {
        $roles = Role::all();
        $result = ['roles' => $roles, 'page_title' => 'نقش های کاربری'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $permissions = Permission::all();
        $result = ['permissions' => $permissions, 'page_title' => 'افزودن نقش کاربری'];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $role = Role::create(array(
            'name' => $request->input('name'),
            'title' => $request->input('title'),
        ));
        $permissions = $request->input('permissions');
        if ($role) {
            $role->syncPermissions($permissions);
            $result = ['status' => true, 'message' => 'نقش کاربری جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد نقش کاربری جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($role_id)
    {
        $role = Role::findOrFail($role_id);
        $permissions = Permission::all();
        $result = ['role' => $role, 'permissions' => $permissions, 'page_title' => 'ویرایش نقش کاربری'];

        return Response::json($result, 200);
    }

    public function update(Request $request, $role_id)
    {
        $role = Role::findOrFail($role_id);
        $permissions = $request->input('permissions');

        $role->update(array(
            'name' => $request->input('name'),
            'title' => $request->input('title'),
        ));
        $role->syncPermissions($permissions);

        if ($role) {
            $result = ['status' => true, 'message' => 'نقش کاربری موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی نقش کاربری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function delete($role_id)
    {
        $role = Role::findOrFail($role_id);
        if ($role->delete()) {
            $result = ['status' => true, 'message' => 'نقش کاربری موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف نقش کاربری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
