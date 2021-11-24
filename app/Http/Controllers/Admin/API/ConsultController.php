<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;

use App\Models\Admin_log;
use App\Models\Cheque;
use App\Models\Consult;
use Composer\IO\ConsoleIO;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\ConsultRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;

class ConsultController extends Controller
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
        $consults = Consult::where('trash', $trash)
            ->with(['customer'=> function ($q) use($trash){
                $q->where('customers.trash',$trash);
            }])
            ->paginate(15);

        $result = ['consults' => $consults, 'page_title' => 'لیست مشاوره ها'];
        return Response::json($result, 200);
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
     * @param ConsultRequest $request
     * @return JsonResponse
     */
    public function store(ConsultRequest $request)
    {
        DB::beginTransaction();
        try {
            $consult = Consult::create($request->only('progress_rate','call_side' ,'reminder', 'priority', 'cost',
                'status', 'type', 'weight', 'duration'));
            Admin_log::createAdminLog(Auth::id(), 0, 'Consult', $consult->id, null,
                $consult, 'the consult is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'مشاوره جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد مشاوره جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $consult_id
     * @return JsonResponse
     */
    public function show($consult_id)
    {
        $consult = Consult::findOrFail($consult_id);
        return Response::json(['consult'=>$consult]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $consult_id
     * @return JsonResponse
     */
    public function edit($consult_id)
    {
        $consult = Consult::findOrFail($consult_id);
        return Response::json(['consult'=>$consult]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ConsultRequest $request
     * @param $consult_id
     * @return JsonResponse
     */
    public function update(ConsultRequest $request, $consult_id)
    {
        $consult = Consult::findOrFail($consult_id);
        DB::beginTransaction();
        try {

            $old_value = $consult;
            $consult->update($request->except('_token', '_method'));

            Admin_log::createAdminLog(Auth::id(), 2, 'Consult', $consult->id, $old_value,
                $consult, 'the consult is updated successfully!');

            DB::commit();
            $result = ['status' => true, 'message' => 'مشاوره موردنظر با موفقیت به روز رسانی شد.'];
        } catch (\Exception $exception) {
            DB::rollback();
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی مشاوره موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $consult_id
     * @return JsonResponse
     */
    public function destroy($consult_id)
    {
        $consult = Consult::findOrFail($consult_id);
        if (Auth::user()->hasRole('super-admin')) {
            $consult->trash = 2;
        }
        else {
            $consult->trash = 1;
        }
        $consult->save();

        if ($consult) {
            Admin_log::createAdminLog(Auth::id(),3,'Call',$consult->id,$consult,
                null,'the cheque is deleted successfully!');
            $result = ['status' => true, 'message' => 'مشاوره موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف مشاوره موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }


}
