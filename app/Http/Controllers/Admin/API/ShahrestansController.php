<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Ostan;
use App\Models\Shahrestan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ShahrestansController extends Controller
{
    //
    public function index($ostan_id)
    {
        $shahrestans = Shahrestan::select('ID','Title')->where('PK_Ostan',$ostan_id)->get();
        $ostans = Ostan::all();
        $result = ['shahrestans' => $shahrestans, 'ostans' => $ostans, 'page_title' => 'لیست شهرها'];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $shahrestan = Shahrestan::create(array(
            'PK_Ostan' => $request->input('ostan'),
            'Title' => $request->input('shahrestan'),
        ));

        if ($shahrestan) {
            $result = ['status' => true, 'message' => 'شهر جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد شهر جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function delete($shahr_id)
    {

        $shahr = Shahrestan::findOrFail($shahr_id);
        if ($shahr->delete()) {
            $result = ['status' => true, 'message' => 'شهر مورد نظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف شهر موردنظر ناموفق بود.'];
        };
        return Response::json($result, 200);
    }

    public function edit($shahr_id)
    {
        $shahrestan_select = Shahrestan::findOrFail($shahr_id);
        $ostans = Ostan::all();
        $result = ['ostans' => $ostans, 'shahrestan_select' => $shahrestan_select, 'page_title' => 'ویرایش شهر'];
        return Response::json($result, 200);
    }

    public function update(Request $request, $shahr_id)
    {
        $shahrestan = Shahrestan::findOrFail($shahr_id);

        $update_shahrestan = $shahrestan->update(array(
            'PK_Ostan' => $request->input('ostan'),
            'Title' => $request->input('shahrestan'),
        ));
        if ($update_shahrestan) {
            $result = ['status' => true, 'message' => 'شهر مورد نظر با موفقیت به روز رسانی شد.'];
        }
        else{
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی موردنظر شهر ناموفق بود.'];
        }

        return Response::json($result, 200);
    }


}
