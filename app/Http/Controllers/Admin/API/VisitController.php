<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Customer;
use App\Models\Visit;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\VisitRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class VisitController extends Controller
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
        $visits = Visit::where('trash', $trash)
            ->with(['post'=> function ($q) use($trash){
                $q->where('posts.trash',$trash);
            }])
            ->with(['remind_method'=> function ($q) use($trash){
                $q->where('remind_methods.trash',$trash);
            }])
//            ->with(['user'=> function ($q) use($trash){
//                $q->where('users.trash',$trash);
//            }])
            ->with(['customer'=> function ($q) use($trash){
                $q->where('customers.trash',$trash);
            }])
            ->with(['deal'=> function ($q) use($trash){
                $q->where('deals.trash',$trash);
            }])
            ->paginate(15);

        return Response::json(['visits' => $visits, 'page_title' => 'لیست بازدیدها'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param VisitRequest $request
     * @return JsonResponse
     */
    public function store(VisitRequest $request)
    {
        $visit = Visit::create($request->except('_token', '_method', 'file', 'hours'));
        if ($file = $request->file('file')) {
            Visit::saveFile($file, $visit);
        }
        $visit->duration = $request->minutes + ($request->hours * 60);
        $visit->save();

        if ($visit) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Visit', $visit->id, null,
                $visit, 'the visit is created successfully!');

            $result = ['status' => true, 'message' => 'بازدید جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد بازدید جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $visit_id
     * @return JsonResponse
     */
    public function show($visit_id)
    {
        $visit = Visit::where('id',$visit_id)->with('user','customer','post',
            'remind_method','deal')->first();
        return Response::json(['visit' => $visit]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $visit_id
     * @return JsonResponse
     */
    public function edit($visit_id)
    {
        $visit = Visit::where('id',$visit_id)->with('user','customer','post',
            'remind_method','deal')->first();
        return Response::json(['visit' => $visit, 'page_title' => 'ویرایش آدرس']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $visit_id
     * @return JsonResponse
     */
    public function update(Request $request, $visit_id)
    {
        $visit = Visit::findOrFail($visit_id);
        $old_value = $visit;
        $visit->update($request->except('_token', '_method', 'file', 'hours'));
        if ($file = $request->file('file')) {
            Visit::saveFile($file, $visit);
        }
        $visit->duration = $request->minutes + ($request->hours * 60);
        $visit->save();
        if ($visit) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Visit', $visit->id, $old_value,
                $visit, 'the visit is updated successfully!');
            $result = ['status' => true, 'message' => 'بازدید موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی بازدید موردنظر ناموفق بود.'];
        }

        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $visit_id
     * @return JsonResponse
     */
    public function destroy($visit_id)
    {
        $visit = Visit::findOrFail($visit_id);
        $old_value = $visit;
        if (Auth::user()->hasRole('super-admin')) {
            $visit->trash = 2;
        } else {
            $visit->trash = 1;
        }
        $visit->save();

        if ($visit) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Call', $visit->id, $old_value,
                null, 'the visit is deleted successfully!');
            $result = ['status' => true, 'message' => 'بازدید موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف بازدید موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);

    }
}
