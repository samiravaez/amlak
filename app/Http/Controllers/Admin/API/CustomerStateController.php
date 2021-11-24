<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Customer_state;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class CustomerStateController extends Controller
{
    public function index()
    {
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
        $trash = 0;
//        }
        $customer_states = Customer_state::where('trash',$trash)->get();
        return Response::json(['customer_states' => $customer_states, 'page_title' => 'لیست وضعیت های مشتری'], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن وضعیت مشتری'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $new_state = Customer_state::create($request->only('name'));

        if ($new_state) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Customer_state', $new_state->id, null,
                $new_state, 'the customer state is created successfully!');
            $result = ['status' => true, 'message' => 'وضعیت مشتری جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد وضعیت مشتری جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $state_id
     * @return JsonResponse
     */
    public function edit($state_id)
    {
        $customer_state = Customer_state::findOrFail($state_id);
        return Response::json(['customer_type' => $customer_state, 'page_title' => 'ویرایش وضعیت مشتری'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $state_id
     * @return JsonResponse
     */
    public function update(Request $request, $state_id)
    {
        $state = Customer_state::findOrFail($state_id);
        $old_value = $state;
        $state->update($request->except('_token', '_method'));
        if ($state) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Customer_state', $state->id, $old_value,
                $state, 'the customer type is updated successfully!');
            $result = ['status' => true, 'message' => 'وضعیت مشتری موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی وضعیت مشتری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $state_id
     * @return JsonResponse
     */
    public function destroy($state_id)
    {
        $state = Customer_state::findOrFail($state_id);
        $old_value = $state;
        if (Auth::user()->hasRole('super-admin')) {
            $state->trash = 2;
        } else {
            $state->trash = 1;
        }
        $state->save();

        if ($state) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Customer_type', $state->id, $old_value,
                null, 'the customer type is deleted successfully!');
            $result = ['status' => true, 'message' => 'وضعیت نقش مشتری موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف وضعیت مشتری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
