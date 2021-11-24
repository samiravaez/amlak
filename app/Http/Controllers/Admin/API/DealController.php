<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Deal;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Morilog\Jalali\Jalalian;

class DealController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $deals = Deal::paginate(20);
        return Response::json(['deals' => $deals, 'page_title' => 'لیست معاملات'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن معامله'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $deal = Deal::create($request->only('topic', 'type', 'contract_number', 'prepayment',
                'price', 'rent', 'price_method', 'rent_method', 'prepayment_method', 'description'));


            Admin_log::createAdminLog(Auth::id(), 0, 'Deal', $deal->id, null,
                $deal, 'the deal is created successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'معامله جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد معامله جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $deal_id
     * @return JsonResponse
     */
    public function show($deal_id)
    {
        $deal = Deal::where('id', $deal_id)->with('customers', 'users', 'visits')->first();
        return Response::json(['deal' => $deal]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $deal_id
     * @return JsonResponse
     */
    public function edit($deal_id)
    {
        $deal = Deal::where('id', $deal_id)->with('customers', 'users', 'visits')->first();
        return Response::json(['deal' => $deal, 'page_title' => 'ویرایش معامله']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $deal_id
     * @return JsonResponse
     */
    public function update(Request $request, $deal_id)
    {
        $deal = Deal::findOrFail($deal_id);
        DB::beginTransaction();
        try {

            $deal->update($request->only('topic', 'type', 'contract_number', 'prepayment',
                'price', 'rent', 'price_method', 'rent_method', 'prepayment_method', 'description'));

            Admin_log::createAdminLog(Auth::id(), 0, 'Call', $deal->id, null,
                $deal, 'the deal is updated successfully!');
            DB::commit();
            $result = ['status' => true, 'message' => 'تماس جدید با موفقیت ایجاد شد.'];
        } catch (\Exception $exception) {
            DB::rollBack();
            $result = ['status' => false, 'message' => 'عملیات ایجاد تماس جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $deal_id
     * @return JsonResponse
     */
    public function destroy($deal_id)
    {
        $deal = Deal::findOrFail($deal_id);
        $old_value = $deal;
        if (Auth::user()->hasRole('super-admin')) {
            $deal->trash = 2;
        } else {
            $deal->trash = 1;
        }
        $deal->save();

        if ($deal) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Deal', $deal->id, $old_value,
                null, 'the deal is deleted successfully!');
            $result = ['status' => true, 'message' => 'معامله موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف معامله موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);

    }
}
