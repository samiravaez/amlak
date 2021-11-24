<?php

namespace App\Http\Controllers\Admin\API;

use App\Models\Admin_log;
use App\Models\Customer_type;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class CustomerTypeController extends Controller
{
    public function index()
    {
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
            $trash = 0;
//        }
        $customer_types = Customer_type::where('trash',$trash)->get();
        return Response::json(['customer_types' => $customer_types, 'page_title' => 'لیست نقش های مشتری'], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن نقش مشتری'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $new_type = Customer_type::create($request->only('name'));

        if ($new_type) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Customer_type', $new_type->id, null,
                $new_type, 'the customer type is created successfully!');
            $result = ['status' => true, 'message' => 'نقش مشتری جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد نقش مشتری جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $type_id
     * @return JsonResponse
     */
    public function edit($type_id)
    {
        $customer_type = Customer_type::findOrFail($type_id);
        return Response::json(['customer_type' => $customer_type, 'page_title' => 'ویرایش نقش مشتری'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $type_id
     * @return JsonResponse
     */
    public function update(Request $request, $type_id)
    {
        $type = Customer_type::findOrFail($type_id);
        $old_value = $type;
        $type->update($request->except('_token', '_method'));
        if ($type) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Customer_type', $type->id, $old_value,
                $type, 'the customer type is updated successfully!');
            $result = ['status' => true, 'message' => 'نقش مشتری موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی نقش مشتری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $type_id
     * @return JsonResponse
     */
    public function destroy($type_id)
    {
        $type = Customer_type::findOrFail($type_id);
        $old_value = $type;
        if (Auth::user()->hasRole('super-admin')) {
            $type->trash = 2;
        } else {
            $type->trash = 1;
        }
        $type->save();

        if ($type) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Customer_type', $type->id, $old_value,
                null, 'the customer type is deleted successfully!');
            $result = ['status' => true, 'message' => 'نقش مشتری موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف نقش مشتری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
