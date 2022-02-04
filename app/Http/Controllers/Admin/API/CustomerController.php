<?php

namespace App\Http\Controllers\Admin\API;

use App\Models\Address;
use App\Models\Admin_log;
use App\Models\Child;
use App\Models\Customer;
use App\Models\Customer_type;
use App\Models\Customermeta;
use App\Models\Entity;
use App\Models\Industry;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Requests\CustomerRequest;
use App\Http\Requests\EntityRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use phpseclib3\System\SSH\Agent\Identity;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */

    public function customer_index()
    {
        $customers = Customer::select('id', 'first_name', 'last_name', 'creator_id', 'mobile_unique',
            'description', 'customer_type_id', 'customer_state_id', 'purchase_stage_id')
//            ->with('entities', 'user', 'customer_type', 'customer_state', 'purchase_stage')
            ->paginate(20);
        return Response::json(['customers' => $customers, 'page_title' => 'لیست مشتریان'], 200);
    }

    public function my_customers()
    {
        $my_customers = Customer::select('id', 'first_name', 'last_name', 'creator_id', 'mobile_unique',
            'description', 'customer_type_id', 'customer_state_id', 'purchase_stage_id')
            ->with('entities', 'user', 'customer_type', 'customer_state', 'purchase_stage')
            ->where('creator_id', 1)
            ->paginate(20);
        return Response::json(['my_customers' => $my_customers, 'page_title' => 'لیست مشتریان من'], 200);
    }

    public function user_region_customers()
    {
        $user = User::find(Auth::id());
        $user_region_customers = Customer::select('id', 'first_name', 'last_name', 'creator_id', 'mobile_unique',
            'description', 'customer_type_id', 'customer_state_id', 'purchase_stage_id')
            ->with('entities', 'user', 'customer_type', 'customer_state', 'purchase_stage')
            ->whereIn('mantaghe_id', $user->mantaghes()->pluck('mantaghe_id'))
            ->paginate(20);
        return Response::json(['user_region_customers' => $user_region_customers, 'page_title' => 'لیست مشتریان منطقه من'], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function customer_create()
    {
        return Response::json(['page_title' => 'افزودن مشتری'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CustomerRequest $request
     * @return JsonResponse
     */
    public function customer_store(CustomerRequest $request)
    {
       return Response::json($request);
//        $new_customer = Customer::create($request->only('first_name', 'last_name', 'mobile_unique',
//            'shahrestan_id', 'mantaghe_id', 'bakhsh_id', 'username', 'gender', 'customer_type_id', 'email',
//            'id_number', 'monthly_income', 'phone', 'marital_status', 'children_count', 'eye_color_id',
//            'financial_status', 'mariage_date', 'birth_date', 'spouse_birth_date', 'physical_status',
//            'furniture_status', 'customer_state_id', 'purchase_stage_id', 'website', 'description',
//            'residence_change_reason', 'mobile_number', 'career_id', 'attendant_id', 'fund_value'
//
//        ));
////        $new_customer->creator_id = Auth::id();
//
//        if ($file = $request->file('file')) {
//            $name =  Customer::saveFile($file);
//            $new_customer->birth_certificate = $name;
//        }
//        if ($file = $request->file('photo')) {
//            $name =  Customer::saveFile($file);
//            $new_customer->birth_certificate = $name;
//        }
//        if ($file = $request->file('id_card')) {
//            $name =  Customer::saveFile($file);
//            $new_customer->birth_certificate = $name;
//        }
//        if ($file = $request->birth_certificate) {
//           $name =  Customer::saveFile($file);
//           $new_customer->birth_certificate = $name;
//        }
//
//        //[[0,1],[2,1]]
//        if ($request->has('entity')) {
//            foreach ($request->entities as $add) {
//                $address = Address::create($add);
//                $new_customer->addresses()->save($address);
//            }
//        }
//        if ($request->has('addresses')) {
//            foreach ($request->addresses as $add) {
//                $address = Address::create($add);
//                $new_customer->addresses()->save($address);
//            }
//        }
//
//        if ($request->has('children')) {
//            foreach ($request->children as $child) {
//                $child_rec = Child::create($child);
//                $new_customer->addresses()->save($child_rec);
//            }
//        }
//        $new_customer->save();
//        if ($new_customer) {
//            Admin_log::createAdminLog(1, 0, 'Customer', $new_customer->id, null,
//                $new_customer, 'the customer is created successfully!');
//            $result = ['status' => true, 'message' => 'مشتری جدید با موفقیت ایجاد شد.'];
//        } else {
//            $result = ['status' => false, 'message' => 'عملیات ایجاد مشتری جدید ناموفق بود.'];
//        }
//        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Builder|Model|JsonResponse|object
     */
    public function customer_show($id)
    {
        return Customer::with('entities', 'user', 'customer_type', 'customer_state', 'purchase_stage', 'addresses')
            ->where('_id', $id)
            ->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $customer_id
     * @return JsonResponse
     */
    public function customer_edit($customer_id)
    {
//        $custom_meta = Customer_type::getCustomMeta($request->type_id);
//        $meta_value = Customermeta::select('name', 'value', 'customer_id')
//            ->where('customer_id', $request->customer_id)
//            ->first();
        $customer = Customer::with('entities', 'addresses')
            ->where('_id', $customer_id)
            ->first();
        return Response::json($customer,  200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CustomerRequest $request
     * @param $customer_id
     * @return JsonResponse
     */
    public function customer_update(CustomerRequest $request, $customer_id)
    {
        $customer = Customer::findOrFail($customer_id);
        $old_value = $customer;
        $customer->update($request->only('first_name', 'last_name',
            'user_name', 'mobile_unique', 'gender', 'email', 'id_number', 'monthly_income',
            'entity'));
        if ($customer) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Customer', $customer->id, $old_value,
                $customer, 'the customer is updated successfully!');

            $result = ['status' => true, 'message' => 'اطلاعات مشتری موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی اطلاعات مشتری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $customer_id
     * @return JsonResponse
     */
    public function customer_destroy($customer_id)
    {
        $customer = Customer::findOrFail($customer_id);
        $old_value = $customer;
        if (Auth::user()->hasRole('super-admin')) {
            $customer->trash = 2;
        } else {
            $customer->trash = 1;
        }
        $customer->save();

        if ($customer) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Customer', $customer->id, $old_value,
                null, 'the customer is deleted successfully!');
            $result = ['status' => true, 'message' => 'مشتری موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف مشتری موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function customer_inquiry(CustomerRequest $request)
    {
        $mobile = $request->mobile_unique;
        $customer = Customer::where('mobile_unique', $mobile)->first();
        if ($customer === null) {
            $result = ['status' => true, 'message' => 'کاربر موردنظر ثبت نشده است، لطفا طلاعات کاربر را ثبت کنید.'];
        } else {
            $result = ['status' => false, 'message' => 'این کاربر قبلا ثبت شده است.'];
        }

        return Response::json($result, 200);
    }

    public function entity_inquiry(Request $request)
    {
        $mobile = $request->mobile_unique;
        $entity = Entity::where('mobile_unique', $mobile)->first();
        if ($entity === null) {
            $result = ['status' => true, 'message' => 'شرکت موردنظر ثبت نشده است، لطفا طلاعات شرکت را ثبت کنید.'];
        } else {
            $result = ['status' => false, 'message' => 'این شرکت قبلا ثبت شده است.'];
        }

        return Response::json($result, 200);
    }

    public function entity_index()
    {
        $entities = Entity::select('name', 'mobile_unique', 'launch_date',
            'staff_count', 'business_class')->with('customers')
            ->paginate(20);
        return Response::json($entities, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function entity_create()
    {
//        $custom_meta = Customer_type::getCustomMeta($request->type_id);
        return Response::json(['page_title' => 'افزودن شرکت'], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param EntityRequest $request
     * @return JsonResponse
     */
    public function entity_store(EntityRequest $request)
    {
       return Response::json($request);
        $new_entity = Entity::create($request->except('_token', '_method'));
        $new_entity->creator_id = Auth::id();
        $new_entity->customers->sync($request->customers);
        $new_entity->save();
        if ($new_entity) {
//            if ($request->has('metas')) {
//                $customer_meta = $request->input('metas');
//
//                foreach ($customer_meta as $index => $value) {
//                    $meta = Customermeta::where('name', $index)
//                        ->where('customer_id', $new_customer->id)->first();
//                    if ($meta === null) {
//                        $new_meta = Customermeta::create([
//                            'name' => $index,
//                            'value' => $value,
//                            'customer_id' => $new_customer->id
//                        ]);
//                    } else {
//                        return Response::json(['status' => false, 'message' => 'اطلاعات تکمیلی برای این کاربر وجود دارد.'], 200);
//                    }
//                }
//            }
            $result = ['status' => true, 'message' => 'شرکت جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد شرکت جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param $entity_id
     * @return JsonResponse
     */
    public function entity_show($entity_id)
    {
//        $meta_value = Customermeta::select('name', 'value', 'customer_id')
//            ->where('customer_id', $id)
//            ->first();
        $entity = Entity::with('customers', 'addresses')
            ->where('_id', $entity_id)
            ->first();
        return Response::json($entity,  200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $entity_id
     * @return JsonResponse
     */
    public function entity_edit($entity_id)
    {
//        $custom_meta = Customer_type::getCustomMeta($request->type_id);
//        $meta_value = Customermeta::select('name', 'value', 'customer_id')
//            ->where('customer_id', $request->customer_id)
//            ->first();
        $entity = Entity::with('customers', 'addresses')
            ->where('_id', $entity_id)
            ->first();
        return Response::json($entity,  200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EntityRequest $request
     * @param $entity_id
     * @return JsonResponse
     */
    public function entity_update(EntityRequest $request, $entity_id)
    {
        $entity = Customer::findOrFail($entity_id);
        $entity->update($request->except('_token', '_method'));
        if ($entity) {
//            if ($request->has('metas')) {
//                $customer_meta = $request->input('metas');
//
//                foreach ($customer_meta as $index => $value) {
//                    $meta = Customermeta::where('name', $index)
//                        ->where('customer_id', $customer->id)->first();
//                    if ($meta !== null) {
//                        $meta->value = $value;
//                        $meta->save();
//                    } else {
//                        $new_meta = Customermeta::create([
//                            'name' => $index,
//                            'value' => $value,
//                            'customer_id' => $request->customer_id
//                        ]);
//                    }
//                }
//            }
            $result = ['status' => true, 'message' => 'اطلاعات شرکت موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی اطلاعات شرکت موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $entity_id
     * @return JsonResponse
     */
    public function entity_destroy($entity_id)
    {
        $entity = Entity::findOrFail($entity_id);
        $old_value = $entity;
//        if (Auth::user()->hasRole('super-admin')) {
//            $entity->trash = 2;
//        } else {
            $entity->trash = 1;
//        }
        $entity->save();

        if ($entity) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Entity', $entity->id, $old_value,
                null, 'the entity is deleted successfully!');
            $result = ['status' => true, 'message' => 'کسب و کار موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف کسب و کار موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

}
