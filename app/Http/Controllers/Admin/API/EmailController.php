<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Email;
use http\Env\Response;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
            $trash = 0;
        }
        $emails = Email::where('trash', $trash)
            ->whereHas('activity', function (Builder $q) use ($trash) {
                $q->where('trash', $trash);
            })
            ->paginate(15);
        return Response::json(['emails' => $emails, 'page_title' => 'لیست ایمیل ها']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        $result = ['page_title' => 'افزودن ایمیل'];
        return Response::json($result, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $email = Email::create($request->only('body', 'send_time', 'reminder', 'reminder_time',
                'priority', 'status', 'weight'));
            if ($file = $request->file('file')) {
                Email::saveFile($file, $email);
            }
            $activity = $email->activity()->create($request->only('topic', 'description', 'creator_id'));
            if ($request->receiver) {
                $activity->customers()->attach($request->reciever, ['role' => 1]);
            }
            if ($request->cc) {
                $activity->customers()->attach($request->cc, ['role' => 2]);
            }
            if ($request->bcc) {
                $activity->customers()->attach($request->bcc, ['role' => 3]);
            }
            if ($request->reminder) {
                $email->reminder_time = $request->reminder_time;
                $email->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(Auth::id(), 0, 'Email', $email->id, null,
                $email, 'the email is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'ایمیل جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد ایمیل جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $email_id
     * @return \Illuminate\Http\Response
     */
    public function show($email_id)
    {
        $email = Email::findOrFail($email_id);
        return Response::json(['email' => $email]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $email_id
     * @return \Illuminate\Http\Response
     */
    public function edit($email_id)
    {
        $email = Email::where('id', $email_id)->with('activity')->first();
        $result = ['email' => $email, 'page_title' => 'ویرایش ایمیل'];

        return Response::json($result, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $email_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $email_id)
    {
        $email = Email::findOrFail($email_id);
        DB::beginTransaction();
        try {
            $email->update($request->only('body', 'send_time', 'reminder', 'reminder_time',
                'priority', 'status', 'weight'));

            if ($file = $request->file('file')) {
                Email::saveFile($file, $email);
            }
            $activity = tap($email->activity())->update($request->only('topic', 'description', 'creator_id'))->first();
            $activity->customers()->detach();
            $activity->users()->detach();
            if ($request->receiver) {
                $activity->customers()->attach($request->reciever, ['role' => 1]);
            }
            if ($request->cc) {
                $activity->customers()->attach($request->cc, ['role' => 2]);
            }
            if ($request->bcc) {
                $activity->customers()->attach($request->bcc, ['role' => 3]);
            }
            if ($request->reminder) {
                $email->reminder_time = $request->reminder_time;
                $email->save();
                $activity->remind_methods()->sync($request->remind_methods);
            }
            Admin_log::createAdminLog(Auth::id(), 0, 'Email', $email->id, null,
                $email, 'the email is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'ایمیل موردنظر با موفقیت به روز رسانی شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات  به روز رسانی ایمیل موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $email_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($email_id)
    {
        $email = Email::findOrFail($email_id);
        $old_value = $email;
        if (Auth::user()->hasRole('super-admin')) {
            $email->trash = 2;
        } else {
            $email->trash = 1;
        }
        $email->save();

        if ($email) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Email', $email->id, $old_value,
                null, 'the email is deleted successfully!');
            $result = ['status' => true, 'message' => 'ایمیل موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف ایمیل موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
