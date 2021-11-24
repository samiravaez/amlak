<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Support\Facades\Response;
use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\User;
use App\Models\Usermeta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Frontend\UsersController;
use phpDocumentor\Reflection\Utils;
use SoapClient;


class AuthController extends Controller
{
    //
    public function doLoginWithUserNameAndPass(Request $request)
    {
        $remember = $request->has('remember');
        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')], $remember)) {
            $user = auth()->user();
            $token = $user->createToken('token');
            $result = [
                'status' => true,
                'message' => $user->name . ' عزیز، خوش آمدی',
                'user' => $user,
                'token' => $token->accessToken,
            ];
        } else {
            $result = [
                'status' => false,
                'message' => ' خطا در ورود به سیستم',
            ];
        }

        return Response::json($result);
    }


    public function doRegisterWithUserNameAndPass()
    {
        $newUserDate = [
            'name' => request()->input('name'),
            'email' => request()->input('email'),
            'password' => request()->input('password')
        ];

        $newUser = User::create($newUserDate);

        if ($newUser && $newUser instanceof User) {
            $result = ['status' => true, 'message' => 'کاربر جدید با موفقیت ایجاد شد.'];
        } else {
            $result = ['status' => false, 'message' => 'عملیات ایجاد کاریر جدید ناموفق بود.'];
        }
        return Response::json($result, 200);
    }


    public function logout()
    {
        auth()->user()->token()->revoke();
        Auth::logout();
        $result = ['status' => true, 'message' => 'کاربر عزیز با موفقیت خارج شدید.'];
        return Response::json($result, 200);
    }

    public function showProfile()
    {
        return Response::json(['page_title' => 'شناسنامه']);

    }

    public function updateProfile(Request $request, $user_id)
    {
        $condition = [
            'name' => 'required',
            'email' => 'required|email',
        ];
        $messages = [
            'name.required' => 'لطفا نام کامل را وارد کنید.',
            'email.required' => 'وارد کردن ایمیل الزامی می باشد.',
            'email.email' => 'ایمیل وارد شده معتبر نمی باشد.',
        ];
        $credentials = array(
            'name' => $request->input('name'),
            'email' => $request->input('email'),
        );
        if (request()->has('password') && trim($request->input('password')) != '') {
            $condition['password'] = 'min:6|max:25';
            $messages['password.min'] = 'کلمه عبور حداقل 6 کاراکتر نیاز دارد.';
            $messages['password.max'] = 'کلمه عبور حداکثر باید 25 کاراکتر باشد.';
            $credentials['password'] = $request->input('password');
        }

        $this->validate(request(), $condition, $messages);

        $userItem = User::findOrFail($user_id);

        $update_user = $userItem->update($credentials);
        if ($update_user) {
            UsersController::updateMeta($userItem, 'phone', request()->input('phone'));
            UsersController::updateMeta($userItem, 'user_photo', request()->input('user_photo'));
            $result = ['status'=> true, 'message'=> 'اطلاعات کاربر موردنظر با موفقیت به روز رسانی شد.'];
        } else {
            $result = ['status'=> false, 'message'=> 'عملیات به روز رسانی اطلاعات کاربر موردنظر ناموفق بود.'];
        }

        return Response::json($result,200);
    }


    public function loginWithPhone(Request $request)
    {
        $phone = $request->input('phone');
        $usermeta = Usermeta::all()->where('meta_key', 'phone')->firstWhere('meta_value', $phone);
        if ($usermeta) {
            $user = $usermeta->user_id;
            $code = create_random(6);
            $new_request = Usermeta::updateOrCreate(
                array(
                    'user_id' => $user,
                    'meta_key' => 'phone_login_request'
                ), array(
                    'meta_value' => $code
                )
            );
            if ($new_request) {
                $new_request_time = Usermeta::updateOrCreate(
                    array(
                        'user_id' => $user,
                        'meta_key' => 'phone_login_request_time'
                    ), array(
                        'meta_value' => time()
                    )
                );
                if ($new_request_time) {
                    //send sms

                    ini_set("soap.wsdl_cache_enabled", "0");
                    try {
                        $client = new SoapClient('http://api.payamak-panel.com/post/send.asmx?wsdl', array('encoding' => 'UTF-8'));
                        $parameters['username'] = "09145985642";
                        $parameters['password'] = "bhshg@fjFGSFGJlskfghjshgs13j345t4rgfd";
                        $parameters['from'] = "50004000985642";
                        $parameters['to'] = array($phone);
                        $parameters['text'] = "$code";
                        $parameters['isflash'] = false;
                        $parameters['udh'] = "";
                        $parameters['recId'] = array(0);
                        $parameters['status'] = 0x0;
                        // echo $client->GetCredit(array("username"=>"09145985642","password"=>"bhshg@fjFGSFGJlskfghjshgs13j345t4rgfd"))->GetCreditResult;
                        echo $client->SendSms($parameters)->SendSmsResult;
                        if ($client->SendSms($parameters)->SendSmsResult = "8491.23999999971") {
                            echo "پیامک شما ارسال شد";
                        }
                    } catch (SoapFault $ex) {
                        echo $ex->faultstring;
                    }

                    return redirect()->route('checkLoginPhoneShow', $phone)->with('success', 'رمز ورود به تلفن همراه شما ارسال شد');
                }
            }
        } else {
            return redirect()->back()->with('error', 'شماره تلفن شما در سیستم ثبت نشده است!!');
        }
    }

    public function checkLoginPhoneShow()
    {
        return view('auth.checkLoginPhone');
    }

    public function checkLoginPhone(Request $request)
    {
        if ($request->has('phone') && $request->has('code')) {
            $phone = $request->input('phone');
            $find_phone = Usermeta::all()->where('meta_key', 'phone')->firstWhere('meta_value', $phone);
            if ($find_phone) {
                $user = $find_phone->user_id;
                $new_user = User::findOrFail($user);
                $user_code = Usermeta::where('user_id', $user)->where('meta_key', 'phone_login_request')->firstWhere('meta_value', $request->input('code'));
                if ($user_code) {
                    $user_code_time = Usermeta::where('user_id', $user)->firstWhere('meta_key', 'phone_login_request_time');
                    if (time() - $user_code_time->meta_value < 60) {
                        $remember = $request->has('remember');
                        if (Auth::loginUsingId($user, $remember)) {
                            $result = ['status'=> true, 'message'=> $new_user->name . ' عزیز، خوش آمدی'];
                        }
                    } else {
                       $result = ['status'=> false, 'message'=>'کد وارد شده معتبر نمی باشد'];
                    }
                } else {
                    $result = ['status'=> false, 'message'=>'کد وارد شده معتبر نمی باشد'];
                }
            } else {
                $result = ['status'=> false, 'message'=>'شماره تلفن شما در سیستم ثبت نشده است!!'];
            }
        } else {
            $result = ['status'=> false, 'message'=>'کد وارد شده معتبر نمی باشد'];
        }
        return Response::json($result,200);
    }

}
