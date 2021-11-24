<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Requests\CareerRequest;
use App\Models\Admin_log;
use App\Models\Career;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\CallRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class CareerController extends Controller
{
    public function index()
    {
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
            $trash = 0;
//        }
        $careers = Career::where('trash', $trash)->get();
        return Response::json(['careers' => $careers, 'page_title' => 'لیست مشاغل'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن شغل'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CareerRequest $request
     * @return JsonResponse
     */
    public function store(CareerRequest $request)
    {
        $career = Career::create($request->only('name'));

        if ($career) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Career', $career->id, null,
                $career, 'the career is created successfully!');
            $result = ['status' => true, 'message' => 'شغل جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد شغل جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $job_id
     * @return JsonResponse
     */
    public function edit($job_id)
    {
        $job = Career::findOrFail($job_id);
        return Response::json(['job' => $job, 'page_title' => 'ویرایش شغل'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CareerRequest $request
     * @param $career_id
     * @return JsonResponse
     */
    public function update(CareerRequest $request,$career_id)
    {
        $career = Career::findOrFail($career_id);
        $old_value = $career;
        $career->update($request->only('name'));

        if ($career) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Career', $career->id, $old_value,
                $career, 'the career is updated successfully!');
            $result = ['status' => true, 'message' => 'شغل موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی شغل موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $career_id
     * @return JsonResponse
     */
    public function destroy($career_id)
    {
        $career = Career::findOrFail($career_id);
        $old_value = $career;
        if (Auth::user()->hasRole('super-admin')) {
            $career->trash = 2;
        } else {
            $career->trash = 1;
        }
        $career->save();

        if ($career) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Career', $career->id, $old_value,
                null, 'the career is deleted successfully!');
            $result = ['status' => true, 'message' => 'شغل موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف شغل موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
