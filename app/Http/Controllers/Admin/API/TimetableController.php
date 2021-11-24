<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\TimetableRequest;
use App\Models\Admin_log;
use App\Models\Task;
use App\Models\Timetable;
use App\Models\Visit;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class TimetableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
            $trash = 0;
        }
        $timetables = Timetable::where('trash', $trash)
            ->with(['post'=> function ($q) use($trash){
                $q->where('posts.trash',$trash);
            }])
//            ->with(['user'=> function ($q) use($trash){
//                $q->where('users.trash',$trash);
//            }])
            ->paginate(15);
        $result = ['timetables' => $timetables, 'page_title' => 'جدول زمانی'];
        return Response::json($result, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        $result = ['page_title' => 'افزودن زمان بندی'];
        return Response::json($result, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TimetableRequest $request
     * @return JsonResponse
     */
    public function store(TimetableRequest $request)
    {
        $timetable = Timetable::create($request->only('post_id', 'day', 'start_time', 'end_time',
            'user_id'));

        if ($timetable) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Task', $timetable->id, null,
                $timetable, 'the timetable is created successfully!');
            $result = ['status' => true, 'message' => 'زمان بندی جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد زمان بندی جدید ناموفق بود.'];
        }

        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Timetable $timetable
     * @return JsonResponse
     */
    public function show($time_id)
    {
        $timetable = Timetable::where('id', $time_id)->with('post','user')->first();
        $result = ['timetable' => $timetable];

        return Response::json($result, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $time_id
     * @return JsonResponse
     */
    public function edit($time_id)
    {
        $timetable = Timetable::where('id',$time_id)->with('user','post')->first();
        return Response::json(['timetable' => $timetable, 'page_title' => 'ویرایش زمان بندی']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param \App\Models\Timetable $timetable
     * @return JsonResponse
     */
    public function update(Request $request, $time_id)
    {
        $timetable = Timetable::findOrFail($time_id);
        $old_value = $timetable;
        $timetable->update($request->except('_token', '_method', 'file', 'hours'));
        if ($file = $request->file('file')) {
            Visit::saveFile($file, $timetable);
        }
        $timetable->duration = $request->minutes + ($request->hours * 60);
        $timetable->save();
        if ($timetable) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Timetable', $timetable->id, $old_value,
                $timetable, 'the timetable is updated successfully!');
            $result = ['status' => true, 'message' => 'زمان بندی موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی زمان بندی موردنظر ناموفق بود.'];
        }

        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $time_id
     * @return JsonResponse
     */
    public function destroy($time_id)
    {
        $timetable = Timetable::findOrFail($time_id);
        $old_value = $timetable;
        if (Auth::user()->hasRole('super-admin')) {
            $timetable->trash = 2;
        } else {
            $timetable->trash = 1;
        }
        $timetable->save();

        if ($timetable) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Timetable', $timetable->id, $old_value,
                null, 'the visit is deleted successfully!');
            $result = ['status' => true, 'message' => 'زمان بندی موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف زمان بندی موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);

    }
}
