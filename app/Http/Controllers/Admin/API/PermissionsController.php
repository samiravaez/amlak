<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Facade\FlareClient\Report;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Response;

class PermissionsController extends Controller
{
    //
    public function index()
    {
        $permissions = Permission::all();
        $result = ['permissions' => $permissions, 'page_title' => 'دسترسی های کاربران'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $result = ['page_title' => 'افزودن سطح دسترسی'];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $permission_name = $request->input('name');
        $permission_title = $request->input('title');
        $permissionItem = Permission::create(array(
            'name' => $permission_name,
            'title' => $permission_title,
        ));
        if ($permissionItem) {
            $result = ['status' => true, 'message' => 'سطح دسترسی جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد سطح دسترسی جدید ناموفق بود'];
        }
        return Response::json($result, 200);
    }

    public function edit($permission_id)
    {
        $permission = Permission::findOrFail($permission_id);
        $result = ['permission' => $permission, 'page_title' => 'ویرایش سطح دسترسی'];

        return Response::json($result, 200);
    }

    public function update(Request $request, $permission_id)
    {
        $permission = Permission::findOrFail($permission_id);

        $permission_title = $request->input('title');
        $permission_name = $request->input('name');
        $update_item = $permission->update(array(
            'name' => $permission_name,
            'title' => $permission_title,
        ));
        if ($update_item) {
            $result = ['status' => true, 'message' => 'سطح دسترسی با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی سطح دسترسی موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function delete($permission_id)
    {
        $permission = Permission::findOrFail($permission_id);
        if ($permission->delete()) {
            $result = ['status' => true, 'message' => 'سطح دسترسی موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف دسترسی موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

}
