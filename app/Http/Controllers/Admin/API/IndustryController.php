<?php

namespace App\Http\Controllers\Admin\API;

use App\Models\Admin_log;
use App\Models\Industry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;


class IndustryController extends Controller
{
    public function index()
    {
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
            $trash = 0;
//        }
        $industries = Industry::where('trash', $trash)->get();
        return Response::json(['industries' => $industries, 'page_title' => 'لیست صنایع'], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن صنعت'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $industry = Industry::create($request->only('name'));

        if ($industry) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Industry', $industry->id, null,
                $industry, 'the industry is created successfully!');
            $result = ['status' => true, 'message' => 'صنعت جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد صنعت جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $industry_id
     * @return JsonResponse
     */
    public function edit($industry_id)
    {
        $industry = Industry::findOrFail($industry_id);
        return Response::json(['industry' => $industry, 'page_title' => 'ویرایش صنعت'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request)
    {
        $industry = Industry::findOrFail($request->industry_id);
        $old_value = $industry;
        $industry->update($request->only('name'));

        if ($industry) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Industry', $industry->id, $old_value,
                $industry, 'the industry is updated successfully!');
            $result = ['status' => true, 'message' => 'صنعت موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی صنعت موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $industry_id
     * @return JsonResponse
     */
    public function destroy($industry_id)
    {
        $industry = Industry::findOrFail($industry_id);
        $old_value = $industry;
        if (Auth::user()->hasRole('super-admin')) {
            $industry->trash = 2;
        } else {
            $industry->trash = 1;
        }
        $industry->save();

        if ($industry) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Industry', $industry->id, $old_value,
                null, 'the industry is deleted successfully!');
            $result = ['status' => true, 'message' => 'صنعت موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف صنعت موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
