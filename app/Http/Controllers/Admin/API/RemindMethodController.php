<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Remind_method;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Http\Requests\Remind_methodRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RemindMethodController extends Controller
{

    public function index()
    {

        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
            $trash = 0;
        }
        $remind_methods = Remind_method::where('trash', $trash)->paginate(15);
        $result = ['remind_methods' => $remind_methods, 'page_title' => 'روش های یادآوری'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $result = ['page_title' => 'افزودن روش یادآوری'];
        return Response::json($result, 200);
    }

    public function store(Remind_methodRequest $request)
    {
        $remind_method = Remind_method::create($request->only('name'));

        if ($remind_method) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Remind_method', $remind_method->id, null,
                $remind_method, 'the remind method is created successfully!');
            $result = ['status' => true, 'message' => 'روش یادآوری جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد روش یادآوری جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($method_id)
    {
        $remind_method = Remind_method::findOrFail($method_id);
        $result = ['remind_method' => $remind_method, 'page_title' => 'ویرایش روش یادآوری'];

        return Response::json($result, 200);
    }

    public function update(Remind_methodRequest $request, $method_id)
    {
        $remind_method = Remind_method::findOrFail($method_id);
        $old_value = $remind_method;
        $remind_method->update($request->only('name'));

        if ($remind_method) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Remind_method', $remind_method->id, $old_value,
                $remind_method, 'the remind method is updated successfully!');

            $result = ['status' => true, 'message' => 'روش یادآوری موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی روش یادآوری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function destroy($method_id)
    {
        $remind_method = Remind_method::findOrFail($method_id);
        $old_value = $remind_method;
        if (Auth::user()->hasRole('super-admin')) {
            $remind_method->trash = 2;
        } else {
            $remind_method->trash = 1;
        }
        $remind_method->save();

        if ($remind_method) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Remind_method', $remind_method->id, $old_value,
                null, 'the remind method is deleted successfully!');
            $result = ['status' => true, 'message' => 'روش یادآوری موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف روش یادآوری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
