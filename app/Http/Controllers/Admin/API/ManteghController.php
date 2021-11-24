<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Shahrestan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;


class ManteghController extends Controller
{
    //
    public function index($shahrestan_id)
    {
        $ostans = Ostan::all();
        $manategh = Mantaghe::select('ID', 'Title')->where('PK_Shahrestan', $shahrestan_id)->get();
        $result = ['manategh' => $manategh, 'ostans' => $ostans, 'page_title' => 'لیست مناطق'];
        return Response::json($result, 200);
    }


    public function store(Request $request)
    {
        $mantaghe = Mantaghe::create(array(
            'PK_Shahrestan' => $request->input('shahrestan'),
            'Title' => $request->input('mantaghe'),
        ));

        if ($mantaghe) {
            $result = ['status' => true, 'message' => 'منطقه جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد منطقه جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function delete($mantaghe_id)
    {

        $mantaghe = Mantaghe::findOrFail($mantaghe_id);
        if (count($mantaghe->bakhshs()->get()->toArray()) == 0) {
            $old_value = $mantaghe;
            if (Auth::user()->hasRole('super-admin')) {
                $mantaghe->trash = 2;
            } else {
                $mantaghe->trash = 1;
            }
        } else {
            $result = ['status' => false, 'message' => 'جهت حذف منطقه ابتدا باید بخش های آن را پاک کنید یا انتقال دهید.'];
            return Response::json($result, 200);
        }
        $mantaghe->save();

        if ($mantaghe) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Mantaghe', $mantaghe->id, $old_value,
                null, 'the mantaghe is deleted successfully!');
            $result = ['status' => true, 'message' => 'منطقه ی مورد نظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف منطقه ی موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

//
    public function edit($mantaghe_id)
    {
        $mantaghe_select = Mantaghe::findOrFail($mantaghe_id);
        $ostans = Ostan::all();
        $result = ['ostans' => $ostans, 'mantaghe_select' => $mantaghe_select, 'page_title' => 'ویرایش منطقه'];

        return Response::json($result, 200);
    }

    public function update(Request $request, $mantaghe_id)
    {
        $mantaghe = Mantaghe::findOrFail($mantaghe_id);
        $old_value = $mantaghe;

        $update_mantaghe = $mantaghe->update(array(
            'PK_Shahrestan' => $request->input('shahrestan'),
            'Title' => $request->input('mantaghe'),
        ));
        if ($update_mantaghe) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Eye_color', $update_mantaghe->ID, $old_value,
                $update_mantaghe, 'the mantaghe is updated successfully!');

            $result = ['status' => true, 'message' => 'منطقه مورد نظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی منطقه موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }


}
