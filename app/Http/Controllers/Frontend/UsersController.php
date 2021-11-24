<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Usermeta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;

class UsersController extends Controller
{
    //
    public function login()
    {
        return view('frontend.users.login')->with(['page_title' => 'ورود به حساب کاربری']);
    }

    public static function updateMeta(User $user,$meta_key,$meta_value){
        $user_phone=$user->usermetas()->firstWhere('meta_key',$meta_key);
        if($user_phone){
            $user_phone->update(array(
                'meta_value'=>$meta_value,
            ));
        }else{
            Usermeta::create(array(
                'user_id'=>$user->id,
                'meta_key'=>$meta_key,
                'meta_value'=>$meta_value,
            ));
        }
    }

    public function dologin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'password' => 'required'
        ],[
            'phone.required'    => 'وارد کردن شماره تلفن الزامی می باشد.',
            'password.required'    => 'وارد کردن کلمه عبور الزامی می باشد.',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>true,'msg'=>$validator->errors()]);
        }

        $user_phone=Usermeta::where('meta_key','phone')->firstWhere('meta_value',$request->input('phone'));
        if($user_phone){
            $user=User::find($user_phone->user_id);
            if(auth()->attempt(['id'=>$user->id,'password'=>$request->input('password')])){
                $tokenResult = $user->createToken('userToken');
                $tokenModel = $tokenResult->token;
                if ($request->remember_me)
                    $tokenModel->expires_at = Carbon::now()->addWeeks(1);
                $tokenModel->save();
                return response()->json([
                    'user' => auth()->id(),
                    'token' => $tokenResult->accessToken,
                    'token_type' => 'Bearer'
                ]);
            }
        }
        return response()->json(['error'=>true]);
    }

    public function register(Request $request)
    {
        $data=[
            'name'=>$request->input('name'),
            'meta_value'=>$request->input('phone'),
            'password'=>$request->input('password'),
        ];

        $validator = Validator::make($data, [
            'name'  => 'required',
            'meta_value' => [
                'required',
                Rule::unique('usermeta')->where(function ($query) use($request){
                    return $query->where('meta_key','phone');
                })
            ],
            'password'      => 'required|min:6|max:25',
        ],[
            'name.required' => 'لطفا نام کامل را وارد کنید.',
            'meta_value.required'    => 'وارد کردن شماره تلفن الزامی می باشد.',
            'meta_value.unique'    => 'قبلا ثبت نام کرده اید',
            'password.required'    => 'وارد کردن کلمه عبور الزامی می باشد.',
            'password.min'    => 'کلمه عبور حداقل 6 کاراکتر نیاز دارد.',
            'password.max'    => 'کلمه عبور حداکثر باید 25 کاراکتر باشد.',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>true,'msg'=>$validator->errors()]);
        }

        $newUserDate=[
            'name'=>request()->input('name'),
            'password'=>request()->input('password')
        ];

        $newUser=User::create($newUserDate);

        if ($newUser && $newUser instanceof User){
            UsersController::updateMeta($newUser,'phone',request()->input('phone'));
            $accessToken = $newUser->createToken('UserToken')->accessToken;
            return response()->json([
                'success'=>true,
                'user' => $newUser->id,
                'token' => $accessToken,
                'token_type' => 'Bearer'
            ]);
        }

        return response()->json(['error'=>'true']);
    }

    public function logout(Request $request)
    {
        /** @var User $user
         */
        $request->user()->token()->revoke();
        return response()->json(['success'=>true,'msg'=>'شما با موفقیت خارج شدید.']);
    }

    public function get_my_info(Request $request)
    {
        return $request->user();
    }

    public function updateProfile(Request $request)
    {
        $data=[
            'name'=>$request->input('name'),
            'phone'=>$request->input('phone'),
            'email'=>null,
        ];

        $condition=[
            'name'  => 'required',
            'phone'  => 'required',
        ];

        $messages=[
            'name.required' => 'لطفا نام کامل را وارد کنید.',
            'phone.required'    => 'وارد کردن شماره تلفن الزامی می باشد.',
        ];

        if($request->input('email')!=''){
            $data['email']=$request->input('email');
            $condition['email']='email';
            $messages['email.email']='ایمیل وارد شده معتبر نمی باشد.';
        }

        $validator = Validator::make($data,$condition,$messages);

        if ($validator->fails()) {
            return response()->json(['error'=>true,'msg'=>$validator->errors()]);
        }

        $user=Auth::user();

        $update_user=$user->update([
            'name'=>$request->input('name'),
            'email'=>$request->input('email'),
        ]);
        if ($update_user){
            UsersController::updateMeta($user,'phone',request()->input('phone'));
        }

        return response()->json(['success'=>true]);
    }

    public function change_password(Request $request) {
        $rules = [
            'old_password' => 'required',
            'password' => 'required|min:6|max:25|confirmed',
        ];

        $messages = [
            'old_password.required' => 'وارد کردن کلمه عبور الزامی می باشد.',
            'password.min' => 'کلمه عبور حداقل 6 کاراکتر نیاز دارد.',
            'password.max' => 'کلمه عبور حداکثر باید 25 کاراکتر باشد.',
            'password.confirmed' => 'رمز وارد شده با تکرار آن مطابقت ندارد.',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json(['error' => true, 'msg' => $validator->errors()]);
        }

        $user = Auth::user();

        if (Hash::check($request->input("old_password"), $user->password)) {
            $user->fill([
                'password' => $request->input("password")
            ])->save();
            return response()->json(['success' => true]);

        } else {
            return response()->json(['error' => true]);
        }
    }

}
