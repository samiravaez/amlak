<?php

namespace App\Http\Controllers\Admin\API;

use App\Models\Address;
use App\Models\Admin_log;
use App\Models\Customer;
use App\Models\Entity;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\AddressRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;


class AddressController extends Controller
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
        $addresses = Address::where('trash', $trash)
            ->with('addressable')
            ->with(['mantaghes'=> function ($q) use($trash){
                $q->where('mantaghes.trash',$trash);
            }])
            ->paginate(15);

        return Response::json(['addresses' => $addresses, 'page_title' => 'لیست آدرس ها'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return Response::json(['page_title' => 'افزودن آدرس'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param AddressRequest $request
     * @return JsonResponse
     */
    public function store(AddressRequest $request)
    {
        if ($request->has($request->customer)) {
            $customer = Customer::findOrFail($request->customer_id);
        } else {
            $customer = Entity::findOrFail($request->customer_id);
        }
        $address = Address::create($request->only('mantaghe_id', 'address'));
        $customer->addresses()->create($address);
        if ($address) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Address', $address->id, null,
                $address, 'the address is created successfully!');

            $result = ['status' => true, 'message' => 'آدرس جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد آدرس جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $address_id
     * @return JsonResponse
     */
    public function show($address_id)
    {
        $address = Address::where('id', $address_id)->with('addressable','mantaghes')->first();
        return Response::json(['address' => $address], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $address_id
     * @return JsonResponse
     */
    public function edit($address_id)
    {
        $address = Address::where('id', $address_id)->with('addressable','mantaghes')
            ->first();
        return Response::json(['address' => $address, 'page_title' => 'ویرایش آدرس'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AddressRequest $request
     * @param $address_id
     * @return JsonResponse
     */
    public function update(AddressRequest $request, $address_id)
    {

        if ($request->has($request->customer)) {
            $customer = Customer::findOrFail($request->customer_id);
        } else {
            $customer = Entity::findOrFail($request->customer_id);
        }
        $address = Address::findOrFail($address_id);
        $old_value = $address;
        $address->associate($customer);
        $address->update($request->only('mantaghe_id', 'address'));
        if ($address) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Address', $address->id, $old_value,
                $address, 'the address is updated successfully!');
            $result = ['status' => true, 'message' => 'آدرس موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی آدرس موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $address_id
     * @return JsonResponse
     */
    public function destroy($address_id)
    {
        $address = Address::findOrFail($address_id);
        $old_value = $address;
        if (Auth::user()->hasRole('super-admin')) {
            $address->trash = 2;
        } else {
            $address->trash = 1;
        }
        $address->save();

        if ($address) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Address', $address->id, $old_value,
                null, 'the address is deleted successfully!');
            $result = ['status' => true, 'message' => 'آدرس موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف آدرس موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
