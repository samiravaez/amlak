<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Admin_log;
use App\Models\Offer;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Http\Requests\OfferRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class OfferController extends Controller
{
    public function index()
    {
        if (Auth::user()->hasRole('super-admin')) {
            $trash = 0 or 1;
        } else {
            $trash = 0;
        }
        $offers = Offer::where('trash', $trash)
            ->with(['post'=> function ($q) use($trash){
                $q->where('posts.trash',$trash);
            }])
//            ->with(['user'=> function ($q) use($trash){
//                $q->where('users.trash',$trash);
//            }])
            ->with(['customer'=> function ($q) use($trash){
                $q->where('customers.trash',$trash);
            }])
            ->paginate(15);
        $result = ['offers' => $offers, 'page_title' => 'پیشنهادات'];
        return Response::json($result, 200);
    }


    public function store(OfferRequest $request)
    {
        $offer = Offer::create($request->except('_token', '_method', 'file'));
        if ($file = $request->file('file')) {
            Offer::saveFile($file, $offer);
        }

        if ($offer) {
            Admin_log::createAdminLog(Auth::id(), 0, 'Offer', $offer->id, null,
                $offer, 'the offer is created successfully!');
            $result = ['status' => true, 'message' => 'پیشنهاد جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد پیشنهاد جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function edit($offer_id)
    {
        $offer = Offer::where('id',$offer_id)->with('user','customer','post')->first();
        $result = ['offer' => $offer, 'page_title' => 'ویرایش پیشنهاد'];

        return Response::json($result, 200);
    }

    public function show($offer_id)
    {
        $offer = Offer::where('id',$offer_id)->with('user','customer','post')->first();
        return Response::json(['offer'=>$offer]);
    }

    public function update(OfferRequest $request, $offer_id)
    {
        $offer = Offer::findOrFail($offer_id);
        $old_value = $offer;
        $offer->update($request->except('_token', '_method','file'));
        if ($file = $request->file('file')) {
            Offer::saveFile($file, $offer);
        }
        if ($offer) {
            Admin_log::createAdminLog(Auth::id(), 2, 'Offer', $offer->id, $old_value,
                $offer, 'the offer is updated successfully!');

            $result = ['status' => true, 'message' => 'پیشنهاد موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات به روز رسانی پیشنهاد موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function destroy($offer_id)
    {
        $offer = Offer::findOrFail($offer_id);
        $old_value = $offer;
        if (Auth::user()->hasRole('super-admin')) {
            $offer->trash = 2;
        } else {
            $offer->trash = 1;
        }
        $offer->save();

        if ($offer) {
            Admin_log::createAdminLog(Auth::id(), 3, 'Offer', $offer->id, $old_value,
                null, 'the offer is deleted successfully!');
            $result = ['status' => true, 'message' => 'پیشنهاد موردنظر با موفقیت حذف شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف پیشنهاد موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }
}
