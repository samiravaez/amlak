<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Admin_log;
use App\Models\Call;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class ActivityController extends Controller
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
        $activities = Activity::where('trash', $trash)
            ->with('actionable', 'user')
            ->with(['remind_methods'=> function ($q) use($trash){
                $q->where('remindables.trash',$trash);
            }])
            ->with(['users','customers'=> function ($q) use($trash){
                $q->where('activables.trash',$trash);
            }])
            ->paginate(15);
        return Response::json(['activities' => $activities, 'page_title' => 'لیست فعالیت ها'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
//       $activity = Activity::create(['topic'=>'hi','description'=>'bye']);
//        $call = Call::find(1);
//       $call->activity()->save($activity);

    }

    /**
     * Display the specified resource.
     *
     * @param Activity $activity
     * @return JsonResponse
     */
    public function show(Activity $activity)
    {
        return Response::json(['activity' => $activity]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Activity $activity
     * @return void
     */
    public function edit(Activity $activity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Activity $activity
     * @return void
     */
    public function update(Request $request, Activity $activity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Activity $activity
     * @return JsonResponse
     */
    public function destroy(Activity $activity)
    {
        $old_value = $activity;
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 2;
        } else {
            $trash = 1;
        }
        $activity->trash = $trash;
        $activity->save();

        if ($activity) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Activity', $activity->id, $old_value,
                null, 'the activity is deleted successfully!');
            $result = ['status' => true, 'message' => 'فعالیت موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف فعالیت موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
