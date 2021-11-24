<?php

namespace App\Http\Controllers\Admin\API;

use App\Models\Admin_log;
use App\Models\Eye_color;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class EyeColorController extends Controller
{
    public function index()
    {
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
            $trash = 0;
//        }
        $eye_colors = Eye_color::where('trash', $trash)->get();
        return Response::json(['eye_colors' => $eye_colors, 'page_title' => 'لیست رنگ چشم ها'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن رنگ'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $color = Eye_color::create($request->only('name'));

        if ($color) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Eye_color', $color->id, null,
                $color, 'the eye color is created successfully!');
            $result = ['status' => true, 'message' => 'رنگ چشم جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد رنگ چشم جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param $color_id
     * @return JsonResponse
     */
    public function edit($color_id)
    {
        $color = Eye_color::findOrFail($color_id);
        return Response::json(['color' => $color, 'page_title' => 'ویرایش رنگ'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $color_id
     * @return JsonResponse
     */
    public function update(Request $request, $color_id)
    {
        $color = Eye_color::findOrFail($color_id);
        $old_value = $color;
        $color->update($request->only('name'));

        if ($color) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Eye_color', $color->id, $old_value,
                $color, 'the eye color is updated successfully!');

            $result = ['status' => true, 'message' => 'رنگ چشم موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی رنگ چشم موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $color = Eye_color::findOrFail($id);
        $old_value = $color;
        if (Auth::user()->hasRole('super-admin')) {
            $color->trash = 2;
        } else {
            $color->trash = 1;
        }
        $color->save();

        if ($color) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Eye_color', $color->id, $old_value,
                null, 'the eye color is deleted successfully!');
            $result = ['status' => true, 'message' => 'رنگ چشم موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف رنگ چشم موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
