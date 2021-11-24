<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Bakhsh;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Shahrestan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class BakhshsController extends Controller
{
    //
    public function index($mantaghe_id)
    {
        $ostans = Ostan::all();
        $bakhshs = Bakhsh::select('ID','Title')->where('PK_Mantaghe',$mantaghe_id)->get();
        $result = ['bakhshs' => $bakhshs, 'ostans' => $ostans, 'page_title' => 'لیست بخش ها'];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $bakhsh = Bakhsh::create(array(
            'PK_Mantaghe' => $request->input('mantaghe'),
            'Title' => $request->input('bakhsh'),
        ));

        if ($bakhsh) {
            $result = ['status' => true, 'message' => 'بخش جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد بخش جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function delete($bakhsh_id)
    {

        $bakhsh = Bakhsh::findOrFail($bakhsh_id);
        $old_value = $bakhsh;
        if (Auth::user()->hasRole('super-admin')) {
            $bakhsh->trash = 2;
        } else {
            $bakhsh->trash = 1;
        }
        $bakhsh->save();

        if ($bakhsh) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Entity', $bakhsh->id, $old_value,
                null, 'the bakhsh is deleted successfully!');
            $result = ['status' => true, 'message' => 'بخش مورد نظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف بخش موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);

}

    public function edit($bakhsh_id)
    {
        $bakhsh_select = Bakhsh::findOrFail($bakhsh_id);
        $ostans = Ostan::all();
        $result = ['ostans' => $ostans, 'bakhsh_select' => $bakhsh_select, 'page_title' => 'ویرایش بخش'];

        return Response::json($result, 200);
    }

    public function update(Request $request, $bakhsh_id)
    {
        $bakhsh = Bakhsh::findOrFail($bakhsh_id);
        $old_value = $bakhsh;
        $update_bakhsh = $bakhsh->update(array(
            'PK_Mantaghe' => $request->input('mantaghe'),
            'Title' => $request->input('bakhsh'),
        ));
        if ($update_bakhsh) {
            Admin_log::createAdminLog(Auth::id(), 2, '', $update_bakhsh->ID, $old_value,
                $update_bakhsh, 'the bakhsh is updated successfully!');

            $result = ['status' => true, 'message' => 'بخش مورد نظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی بخش موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }


}
