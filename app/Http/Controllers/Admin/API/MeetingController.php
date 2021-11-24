<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Call;
use App\Models\Meeting;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;

class MeetingController extends Controller
{
    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
            $trash = 0;
        }
        $meetings = Meeting::where('trash', $trash)
            ->whereHas('activity', function (Builder $q) use ($trash) {
                $q->where('trash', $trash);
            })
            ->paginate(15);
        $result = ['meetings' => $meetings, 'page_title' => 'لیست جلسات'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $result = ['page_title' => 'افزودن جلسه'];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {

            $meeting = Meeting::create($request->only('location', 'progress_rate', 'reminder', 'priority', 'cost',
                'status', 'type', 'weight', 'duration', 'start_time', 'end_time'));

            $activity = $meeting->activity()->create($request->only('topic', 'description', 'creator_id'));
            if ($request->reminder) {
                $meeting->reminder_time = $request->reminder_time;
                $meeting->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            if ($request->participants) {
                $activity->users()->sync($request->participants);
            }

            Admin_log::createAdminLog(Auth::id(), 0, 'Meeting', $meeting->id, null,
                $meeting, 'the meeting is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'جلسه جدید با موفقیت ایجاد شد.'];

        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد جلسه جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($meeting_id)
    {
        $meeting = Meeting::where('id', $meeting_id)->with('activity')->first();
        $result = ['meeting' => $meeting, 'page_title' => 'ویرایش جلسه'];

        return Response::json($result, 200);
    }

    public function show($meeting_id)
    {
        $meeting = Meeting::where('id', $meeting_id)->with('activity')->first();
        $result = ['meeting' => $meeting];

        return Response::json($result, 200);
    }

    public function update(Request $request, $meeting_id)
    {
        $meeting = Meeting::findOrFail($meeting_id);
        DB::beginTransaction();
        try {
            $old_value = $meeting;
            $meeting->update($request->only('location', 'progress_rate', 'reminder', 'priority', 'cost',
                'status', 'type', 'weight', 'duration', 'start_time', 'end_time'));

            $activity = tap($meeting->activity())->update($request->only('topic', 'description', 'creator_id'))->first();
            if ($request->reminder) {
                $meeting->reminder_time = $request->reminder_time;
                $meeting->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            if ($request->participants) {
                $activity->users()->sync($request->participants);
            }

            Admin_log::createAdminLog(Auth::id(), 2, 'Meeting', $meeting->id, $old_value,
                $meeting, 'the meeting is updated successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'جلسه موردنظر با موفقیت به روز رسانی شد.'];
        } catch (\Exception $exception) {
            DB::rollback();
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی جلسه موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function destroy($meeting_id)
    {
        $meeting = Meeting::findOrFail($meeting_id);
        if (Auth::user()->hasRole('super-admin')) {
            $meeting->trash = 2;
        } else {
            $meeting->trash = 1;
        }
        $meeting->save();

        if ($meeting) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Meeting', $meeting->id, $meeting,
                null, 'the meeting is deleted successfully!');
            $result = ['status' => true, 'message' => 'جلسه موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف جلسه موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
