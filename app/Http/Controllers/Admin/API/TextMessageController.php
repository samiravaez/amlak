<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Text_message;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Http\Requests\Text_messageRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;

class TextMessageController extends Controller
{
    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
        $trash = 0;
        }
        $messages = Text_message::where('trash', $trash)
            ->whereHas('activity', function (Builder $q) use ($trash) {
                $q->where('trash', $trash);
            })
            ->paginate(15);

        $result = ['messages' => $messages, 'page_title' => 'لیست پیامک ها'];
        return Response::json($result, 200);
    }

    public function create()
    {
        $result = ['page_title' => 'افزودن پیامک'];
        return Response::json($result, 200);
    }

    public function show($message_id)
    {
        $message = Text_message::where('id', $message_id)->with('activity')->first();
        return Response::json(['messages' => $message]);
    }

    public function store(Text_messageRequest $request)
    {
        DB::beginTransaction();
        try {
//            [$send_date, $send_time] = array($request->send_date, $request->send_time);
//            [$remind_date, $remind_time] = array($request->reminder_date, $request->reminder_time);
//
//            //merge time and date to Carbon timestamps
//            $send = $send_date and $send_time ? Carbon::createFromTimestamp($send_date . $send_time) : $send_date;
//            $remind = $remind_date and $remind_time ? Carbon::createFromTimestamp($remind_date . $remind_time) : $remind_date;
//
//            $send_jalali = $send ? Jalalian::fromFormat('Y-m-d H:i:s', $send)->toCarbon() : null;
//            $remind_jalali = $remind ? Jalalian::fromFormat('Y-m-d H:i:s', $remind)->toCarbon() : null;

            $message = Text_message::create($request->only('body', 'send_time', 'message_side', 'reminder', 'priority',
                'weight'));
//            $message->send_time = $send_jalali;
//            $message->reminder_time = $remind_jalali;
//            $message->save();
            $activity = $message->activity()->create($request->only('topic', 'description', 'creator_id'));
            if ($request->participants) {
                $activity->users()->sync($request->participants);
            }
            if ($request->reminder) {
                $message->reminder_time = $request->reminder_time;
                $message->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(Auth::id(), 0, 'Text_message', $message->id, null,
                $message, 'the text message is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'پیامک جدید با موفقیت ایجاد شد.'];

        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد پیامک جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($message_id)
    {
        $message = Text_message::where('id', $message_id)->with('activity')->first();
        $result = ['message' => $message, 'page_title' => 'ویرایش پیامک'];

        return Response::json($result, 200);
    }

    public function update(Text_messageRequest $request, $message_id)
    {
        $message = Text_message::findOrFail($message_id);
        DB::beginTransaction();
        try {
            $old_value = $message;
           $message->update($request->only('body', 'send_time', 'message_side', 'reminder', 'priority',
                'weight', 'reminder_time'));
            $activity = tap($message->activity())->update($request->only('topic', 'description', 'creator_id'))->first();
            if ($request->participants) {
                $activity->users()->sync($request->participants);
            }
            if ($request->reminder) {
                $message->reminder_time = $request->reminder_time;
                $message->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(1, 2, 'Text_message', $message->id, $old_value,
                $message, 'the text message is updated successfully!');

            DB::commit();
            $result = ['status' => true, 'message' => 'پیامک موردنظر با موفقیت به روز رسانی شد.'];
        } catch (\Exception $exception) {
            DB::rollback();
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی پیامک موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function destroy($message_id)
    {
        $message = Text_message::findOrFail($message_id);
        $old_value = $message;
        if (Auth::user()->hasRole('super-admin')) {
            $message->trash = 2;
        } else {
            $message->trash = 1;
        }
        $message->save();

        if ($message) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Text_message', $message->id, $old_value,
                null, 'the message is deleted successfully!');
            $result = ['status' => true, 'message' => 'پیامک موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف پیامک موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
