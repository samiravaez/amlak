<?php

namespace App\Http\Controllers\Admin\API;


use App\Models\Admin_log;
use App\Models\Education_level;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class EducationLevelController extends Controller
{

    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
            $trash = 0;
        }
        $levels = Education_level::where('trash',$trash)->paginate(15);
        return Response::json(['levels' => $levels, 'page_title' => 'لیست سطوح تحصیلی'], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن سطح دسترسی'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $new_level = Education_level::create($request->only('name'));

        if ($new_level) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Education_level', $new_level->id, null,
                $new_level, 'the education level is created successfully!');
            $result = ['status' => true, 'message' => 'سطح تحصیلی جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد سطح تحصیلی جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $level_id
     * @return JsonResponse
     */
    public function edit($level_id)
    {
        $level = Education_level::findOrFail($level_id);
        return Response::json(['level' => $level, 'page_title' => 'ویرایش سطح تحصیلی'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request, $level_id)
    {
        $level = Education_level::findOrFail($level_id);
        $old_value = $level;
        $level->update($request->e('_token', '_method'));
        if ($level) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Education_level', $level->id, $old_value,
                $level, 'the education level is updated successfully!');
            $result = ['status' => true, 'message' => 'سطح تحصیلی موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی سطح تحصیلی موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $level_id
     * @return JsonResponse
     */
    public function destroy($level_id)
    {
        $level = Education_level::findOrFail($level_id);
        $old_value = $level;
        if (Auth::user()->hasRole('super-admin')) {
            $level->trash = 2;
        } else {
            $level->trash = 1;
        }
        $level->save();

        if ($level) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Education_level', $level->id, $old_value,
                null, 'the education level is deleted successfully!');
            $result = ['status' => true, 'message' => 'سطح تحصیلی موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف سطح تحصیلی موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
