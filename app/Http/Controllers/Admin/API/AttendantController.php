<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Attendant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class AttendantController extends Controller
{
    public function index()
    {
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
        $trash = 0;
//        }
        $attendants = Attendant::where('trash', $trash)->get();
        return Response::json(['attendants' => $attendants, 'page_title' => 'لیست همراهان'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن همراه'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $attendant = Attendant::create($request->only('name'));

        if ($attendant) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Attendant', $attendant->id, null,
                $attendant, 'the attendant is created successfully!');
            $result = ['status' => true, 'message' => 'همراه جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد همراه جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param $attendant_id
     * @return JsonResponse
     */
    public function edit($attendant_id)
    {
        $attendant = Attendant::findOrFail($attendant_id);
        return Response::json(['attendant' => $attendant, 'page_title' => 'ویرایش همراه'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $attendant_id
     * @return JsonResponse
     */
    public function update(Request $request, $attendant_id)
    {
        $attendant = Attendant::findOrFail($attendant_id);
        $old_value = $attendant;
        $attendant->update($request->only('name'));

        if ($attendant) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Attendant', $attendant->id, $old_value,
                $attendant, 'the attendant is updated successfully!');

            $result = ['status' => true, 'message' => 'همراه موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی همراه موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $attendant_id
     * @return JsonResponse
     */
    public function destroy($attendant_id)
    {
        $attendant = Attendant::findOrFail($attendant_id);
        $old_value = $attendant;
        if (Auth::user()->hasRole('super-admin')) {
            $attendant->trash = 2;
        } else {
            $attendant->trash = 1;
        }
        $attendant->save();

        if ($attendant) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Attendant', $attendant->id, $old_value,
                null, 'the attendant is deleted successfully!');
            $result = ['status' => true, 'message' => 'همراه موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف همراه موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
