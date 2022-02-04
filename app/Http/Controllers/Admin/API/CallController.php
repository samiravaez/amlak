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

        $session = DB::connection('mongodb')->getMongoClient()->startSession();
        $session->startTransaction();
        try {
            $call = Call::create($request->only('progress_rate', 'call_side', 'reminder', 'priority', 'cost',
                'status', 'type', 'weight','start_time','reminder_time'));
            $call->duration = $request->minutes + ($request->hours * 60);
            $call->save();

            $activity = $call->activity()->create($request->only('topic', 'description', 'creator_id'));
            if ($request->reminder) {
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(1, 0, 'Call', $call->id, null,
                $call, 'the call is created successfully!');
            $session->commitTransaction();
            $result = ['status' => true, 'message' => 'تماس جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            $session->abortTransaction();
            $result = ['status' => false, 'message' => 'عملیات ایجاد تماس جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($call_id)
    {
        $call = Call::where('_id', $call_id)->with('activity')
            ->first();
        return Response::json($call, 200);
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
                'status', 'type', 'weight','start_time','reminder_time'));
            $call->duration = $request->minutes + ($request->hours * 60);
            $call->save();

            $activity = $call->activity()->create($request->only('topic', 'description', 'creator_id'));
            if ($request->reminder) {
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
