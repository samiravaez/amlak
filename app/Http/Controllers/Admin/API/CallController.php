<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Call;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests\CallRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;

class CallController extends Controller
{
    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
        $trash = 0;
        }
        $calls = Call::where('trash', $trash)
            ->with('activity')
            ->paginate(15);
        $result = ['calls' => $calls, 'page_title' => 'لیست تماس ها'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $result = ['page_title' => 'افزودن تماس'];
        return Response::json($result, 200);
    }

    public function store(CallRequest $request)
    {
        DB::beginTransaction();
        try {
            $call = Call::create($request->only('progress_rate', 'call_side', 'reminder', 'priority', 'cost',
                'status', 'type', 'weight', 'duration','start_time'));
            $activity = $call->activity()->create($request->only('topic', 'description', 'creator_id'));
            if ($request->reminder) {
                $call->reminder_time = $request->reminder_time;
                $call->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(1, 0, 'Call', $call->id, null,
                $call, 'the call is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'تماس جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد تماس جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($call_id)
    {
        $call = Call::where('id', $call_id)->with('activity')
            ->first();
        $result = ['call' => $call, 'page_title' => 'ویرایش تماس'];
        return Response::json($result, 200);
    }

    public function show($call_id)
    {
        $call = Call::where('id', $call_id)->with('activity')
            ->first();
        return Response::json(['call' => $call], 200);
    }

    public function update(CallRequest $request, $call_id)
    {
        $call = Call::findOrFail($call_id);
        DB::beginTransaction();
        try {
            $old_value = $call;
            $call->update($request->only('progress_rate', 'call_side', 'reminder', 'priority', 'cost',
                'status', 'type', 'weight', 'duration','start_time'));
            $activity = tap($call->activity())->update($request->only('topic', 'description', 'creator_id'))->first();
            if ($request->reminder) {
                $call->reminder_time = $request->reminder_time;
                $call->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(Auth::id(), 2, 'Call', $call->id, $old_value,
                $call, 'the call is updated successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'تماس موردنظر با موفقیت به روز رسانی شد.'];
        } catch (\Exception $exception) {
            DB::rollback();
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی تماس موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function destroy($call_id)
    {
        $call = Call::findOrFail($call_id);
        $old_value = $call;
        if (Auth::user()->hasRole('super-admin')) {
            $call->trash = 2;
        } else {
            $call->trash = 1;
        }
        $call->save();

        if ($call) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Call', $call->id, $old_value,
                null, 'the call is deleted successfully!');
            $result = ['status' => true, 'message' => 'تماس موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف تماس موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
