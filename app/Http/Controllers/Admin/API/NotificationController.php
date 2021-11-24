<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Notification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Mockery\Matcher\Not;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::where('trash',0)->paginate(15);
        return Response::json(['notifications' => $notifications, 'page_title' => 'لیست نوتیفیکیشن ها'], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن نوتیفیکیشن'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $notification = Notification::create($request->except('_token', '_method'));
       $notification->user_id = Auth::id();
       $notification->save();
        if ($notification) {
            $result = ['status' => true, 'message' => 'نوتیفیکیشن جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد نوتیفیکیشن جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $notification_id
     * @return JsonResponse
     */
    public function show($notification_id)
    {
        $notification = Notification::where('id', $notification_id)->first();
        return Response::json(['notification' => $notification], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Request $request
     * @param $notification_id
     * @return JsonResponse
     */
    public function edit(Request $request,$notification_id)
    {
        $notification = Notification::where('id', $notification_id)
            ->first();
        return Response::json(['notification' => $notification, 'page_title' => 'ویرایش وتیفیکیشن'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $notification_id
     * @return JsonResponse
     */
    public function update(Request $request,$notification_id)
    {
        $notification = Notification::findOrFail($notification_id);
        $notification->update($request->except('_token', '_method'));
        if ($notification) {
            $result = ['status' => true, 'message' => 'نوتیفیکیشن موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی نوتیفیکیشن موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Customer $customer
     * @return JsonResponse
     */
    public function destroy($notification_id)
    {
        $notification = Notification::findOrFail($notification_id);
        if ($notification->delete()) {
            $result = ['status' => true, 'message' => 'نوتیفیکیشن موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف نوتیفیکیشن موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function get_unpopped()
    {
        $unpopped_notifs = Notification::where('popped', 0)
            ->where('trash',0)
            ->where('user_id', Auth::id())->get();
        if ($unpopped_notifs) {
            $unpopped_notifs->update(['popped'=>1]);
            $result = ['status' => true, 'message' => 'نوتیفیکیشن های پاپ نشده'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات بازیابی نوتیفیکیشن های موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function get_unseen()
    {
        $unseen_notifs = Notification::where('seen', 0)
            ->where('trash',0)
            ->where('user_id', Auth::id())->get();
        if ($unseen_notifs) {
            $unseen_notifs->update(['seen'=>1]);
            $result = ['status' => true, 'message' => 'نوتیفیکیشن های دیده نشده'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات بازیابی نوتیفیکیشن های موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
