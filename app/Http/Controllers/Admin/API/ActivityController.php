<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Admin_log;
use App\Models\Call;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
//        if (Auth::user()->hasRole('super-admin')) {
//            $trash = 0 or 1;
//        } else {
        $trash = 0;
//        }
        $activities = Activity::
        where('trash', $trash)
            ->with('actionable', 'user')
//            ->with(['remind_methods'=> function ($q) use($trash){
//                $q->where('remindables.trash',$trash);
//            }])
//            ->with(['users','customers'=> function ($q) use($trash){
//                $q->where('activables.trash',$trash);
//            }])
            ->paginate(15);
        return Response::json($activities);
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
     * @param $activity_id
     * @return JsonResponse
     */
    public function destroy($activity_id)
    {
        $session = DB::connection('mongodb')->getMongoClient()->startSession();
        $session->startTransaction();
        try {
            $activity = Activity::findOrFail($activity_id);
//        if (Auth::user()->hasRole('super-admin')) {
//            $activity->trash = 2;
//        } else {
            $activity->trash = 1;
//        }
            $activity->actionable()->update(['trash' => 1]);
            $activity->save();


            Admin_log::createAdminLog(null, 3, 'Activity', $activity->_id, $activity,
                null, 'the activity is deleted successfully!');
            $session->commitTransaction();
            $result = ['status' => true, 'message' => 'فعالیت موردنظر با موفقیت حذف شد.'];
        } catch (\Exception $exception) {
            $session->abortTransaction();
            $result = ['status' => false, 'message' => 'عملیات حذف فعالیت موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
