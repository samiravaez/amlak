<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Call;
use App\Models\Cheque;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\ChequeRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;

class ChequeController extends Controller
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
        $cheques = Cheque::where('trash', $trash)
            ->paginate(15);
        $result = ['cheques' => $cheques, 'page_title' => 'لیست چک ها'];
        return Response::json($result, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ChequeRequest $request
     * @return JsonResponse
     */
    public function store(ChequeRequest $request)
    {
        DB::beginTransaction();
        try {
                $cheque = Cheque::create($request->only('serial_number','bank' ,'value', 'priority', 'owner',
                'in_charge', 'account_number','date'));
            if ($file = $request->file('file')) {
                Cheque::saveFile($file, $cheque);
            }
            $cheque->save();
            Admin_log::createAdminLog(Auth::id(), 0, 'Cheque', $cheque->id, null,
                $cheque, 'the cheque is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'چک جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد چک جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
        }

    /**
     * Display the specified resource.
     *
     * @param $cheque_id
     * @return JsonResponse
     */
    public function show($cheque_id)
    {
        $cheque = Cheque::where('id', $cheque_id)->first();
        return Response::json(['cheque' => $cheque], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $cheque_id
     * @return JsonResponse
     */
    public function edit($cheque_id)
    {
        $cheque = Cheque::findOrFail($cheque_id);
        $result = ['cheque' => $cheque, 'page_title' => 'ویرایش چک'];
        return Response::json($result, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ChequeRequest $request
     * @param $cheque_id
     * @return JsonResponse
     */
    public function update(ChequeRequest $request, $cheque_id)
    {
        $cheque = Cheque::findOrFail($cheque_id);
        DB::beginTransaction();
        try {
            $old_value = $cheque;
            $cheque->update($request->except('_token', '_method'));
            $cheque->save();

            Admin_log::createAdminLog(Auth::id(), 2, 'Cheque', $cheque->id, $old_value,
                $cheque, 'the cheque is updated successfully!');

            DB::commit();
            $result = ['status' => true, 'message' => 'چک موردنظر با موفقیت به روز رسانی شد.'];
        } catch (\Exception $exception) {
            DB::rollback();
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی چک موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $cheque_id
     * @return JsonResponse
     */
    public function destroy($cheque_id)
    {
        $cheque = Cheque::findOrFail($cheque_id);
        if (Auth::user()->hasRole('super-admin')) {
            $cheque->trash = 2;
        }
        else {
            $cheque->trash = 1;
        }
        $cheque->save();

        if ($cheque) {
            Admin_log::createAdminLog(Auth::id(),3,'Call',$cheque->id,$cheque,
                null,'the cheque is deleted successfully!');
            $result = ['status' => true, 'message' => 'چک موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف چک موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

}
