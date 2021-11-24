<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Ostan;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class OstansController extends Controller
{
    //
    public function index()
    {
        $ostans = Ostan::all();
        $result = ['ostans' => $ostans, 'page_title' => 'لیست استان ها'];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $ostan = Ostan::create(array(
            'Title' => $request->input('ostan')
        ));

        if ($ostan) {
            $result = ['status' => true, 'message' => 'استان جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد استان جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function delete($ostan_id)
    {
        $ostan = Ostan::findOrFail($ostan_id);
        if (count($ostan->shahrestans()->get()->toArray()) == 0) {
            $ostan->delete();
            $result = ['status' => true, 'message' => 'استان مورد نظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'جهت حذف استان ابتدا باید شهرهای آن را پاک کنید یا انتقال دهید.'];
        }

        return Response::json($result, 200);
    }

    public function edit($ostan_id)
    {
        $ostan_select = Ostan::findOrFail($ostan_id);
        $ostans = Ostan::all();
        $result = ['ostans' => $ostans, 'ostan_select' => $ostan_select, 'page_title' => 'ویرایش استان'];

        return Response::json($result, 200);
    }

    public function update(Request $request, $ostan_id)
    {
        $ostan = Ostan::findOrFail($ostan_id);
        $update_ostan = $ostan->update(array(
            'Title' => $request->input('ostan')
        ));
        if ($update_ostan) {
            $result = ['status' => true, 'message' => 'استان مورد نظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی استان موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
