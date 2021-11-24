<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Purchase_stage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Purchase_stageRequest;
use Illuminate\Support\Facades\Response;

class PurchaseStageController extends Controller
{
    public function index()
    {
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
            $trash = 0;
//        }
        $purchase_stages = Purchase_stage::where('trash',$trash)->get();
        $result = ['purchase_stages' => $purchase_stages, 'page_title' => 'مراحل خرید'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $result = ['page_title' => 'افزودن مرحله خرید'];
        return Response::json($result, 200);
    }

    public function store(Purchase_stageRequest $request)
    {
        $purchase_stage = Purchase_stage::create($request->only('name'));

        if ($purchase_stage) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Purchase_stage', $purchase_stage->id, null,
                $purchase_stage, 'the purchase stage is created successfully!');
            $result = ['status' => true, 'message' => 'مرحله خرید جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد مرحله خرید جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($stage_id)
    {
        $purchase_stage = Purchase_stage::findOrFail($stage_id);
        $result = ['purchase_stage' => $purchase_stage, 'page_title' => 'ویرایش مرحله خرید'];

        return Response::json($result, 200);
    }

    public function update(Purchase_stageRequest $request, $stage_id)
    {
        $purchase_stage = Purchase_stage::findOrFail($stage_id);
        $old_value = $purchase_stage;
        $purchase_stage->update($request->only('name'));

        if ($purchase_stage) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Purchase_stage', $purchase_stage->id, $old_value,
                $purchase_stage, 'the purchase stage is updated successfully!');

            $result = ['status' => true, 'message' => 'مرحله موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی مرحله خرید موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function destroy($stage_id)
    {
        $purchase_stage = Purchase_stage::findOrFail($stage_id);
        $old_value = $purchase_stage;
        if (Auth::user()->hasRole('super-admin')) {
            $purchase_stage->trash = 2;
        } else {
            $purchase_stage->trash = 1;
        }
        $purchase_stage->save();

        if ($purchase_stage) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Purchase_stage', $purchase_stage->id, $old_value,
                null, 'the purchase stage is deleted successfully!');
            $result = ['status' => true, 'message' => 'مرحله خرید موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف مرحله خرید موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
