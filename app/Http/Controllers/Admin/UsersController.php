<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bakhsh;
use App\Models\File;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Shahrestan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Morilog\Jalali\Jalalian;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UsersController extends Controller
{
    //
    public function index(){
        $users=User::all();
        $roles=Role::all();
        return view('admin.list.users',compact('users','roles'))->with(['page_title'=>'لیست کاربران']);
    }

    public function edit($user_id){
        $edit_user=User::find($user_id);
        $files=File::all();
        $roles=Role::all();
        $permissions=Permission::all();

        $edit_usermetas=$edit_user->usermetas()->get()->toArray();
        if (!empty($edit_usermetas))
            $edit_usermetas=array_column($edit_usermetas,'meta_value','meta_key');
        if (isset($edit_usermetas['user_photo']))
            $user_profile=$files->firstWhere('file_id',$edit_usermetas['user_photo']);
        else
            $user_profile=false;

        return view('admin.edit.user',compact('edit_user','roles','permissions','user_profile','edit_usermetas'))->with(['page_title'=>'ویرایش کاربر']);
    }

    public function area($user_id){
        $edit_user=User::find($user_id);
        $regions=array();
        $ostans=Ostan::all();

        $user_regions=$edit_user->getRegionAttribute();
        if(isset($user_regions)){
            $regions=json_decode($user_regions,true);
            if(!empty($regions)){
                foreach ($regions as $i=>$region){
                    foreach ($region as $index=>$value){
                        switch ($index){
                            case 'ostan':
                                $regions[$i][$index]=Ostan::find($value);
                                break;
                            case 'shahrestan':
                                $regions[$i][$index]=Shahrestan::find($value);
                                break;
                            case 'mantaghe':
                                $regions[$i][$index]=Mantaghe::find($value);
                                break;
                            case 'bakhsh':
                                $regions[$i][$index]=Bakhsh::find($value);
                                break;
                        }
                    }
                }
            }
        }

        $transactions=TransactionController::getTree();
        $land_types=LandTypeController::getTree();
        $compact=['edit_user','ostans','transactions','land_types','regions'];
        return view('admin.edit.user_area',compact($compact))->with(['page_title'=>'حیطه کاری کارشناس']);
    }

    public function save_area(Request $request,$user_id){
        $user=User::find($user_id);
        $sync=[];
        if ($request->has('data')){
            $datas=$request->input('data');
            $credentials=array();
            foreach ($datas as $data){
                if(isset($data['transaction-select-all'])){
                    $transaction_id='0';
                }else{
                    $transaction_id=$data['transaction'];
                }
                if(isset($data['land_type-select-all'])){
                    $land_type_id='0';
                }else{
                    $land_type_id=$data['land_type'];
                }
                $credentials[]=array(
                    'transaction_id'=>(int)$transaction_id,
                    'land_type_id'=>(int)$land_type_id,
                );
            }

            filter_user_jobs($credentials);

            $skill=$user->usermetas()->firstOrNew(['meta_key'=>'skill']);
            $skill->meta_value=json_encode($credentials,true);
        }

        if(isset($skill)){
            $sync[]=$skill;
        }else{
            $all_skills=$user->usermetas()->where('meta_key','skill');
            $all_skills->delete();
        }

        if ($request->has('region')){
            $region=$request->input('region');
            filter_user_regions($region);

            $user_region=$user->usermetas()->firstOrNew(['meta_key'=>'region']);
            $user_region->meta_value=json_encode(array_values($region),true);
        }

        if(isset($user_region)){
            $sync[]=$user_region;
        }else{
            $all_regions=$user->usermetas()->where('meta_key','region');
            $all_regions->delete();
        }
//        $user->useraddsregion()->whereNotIn('id',collect($user_regions)->pluck('id')->toArray())->delete();
        $user->usermetas()->saveMany($sync);

        return redirect()->back();

    }

    public function create(){
        $roles=Role::all();
        return view('admin.edit.user',compact('roles'))->with(['page_title'=>'افزودن کاربر']);
    }

    public function update(Request $request,$user_id){
        $condition=[
            'name'  => 'required',
            'email'      => 'required|email',
        ];
        $messages=[
            'name.required' => 'لطفا نام کامل را وارد کنید.',
            'email.required'    => 'وارد کردن ایمیل الزامی می باشد.',
            'email.email'    => 'ایمیل وارد شده معتبر نمی باشد.',
        ];
        $credentials=array(
            'name'=>$request->input('name'),
            'email'=>$request->input('email'),
        );
        if (request()->has('password') && trim($request->input('password')) != ''){
            $condition['password']='min:6|max:25';
            $messages['password.min']='کلمه عبور حداقل 6 کاراکتر نیاز دارد.';
            $messages['password.max']='کلمه عبور حداکثر باید 25 کاراکتر باشد.';
            $credentials['password']=$request->input('password');
        }

        $this->validate(request(),$condition,$messages);

        $user=User::find($user_id);
        if ($user){
            $update_use=$user->update($credentials);
            if ($update_use){
                $role=$request->input('role');
                $user->syncRoles($role);
                \App\Http\Controllers\Frontend\UsersController::updateMeta($user,'phone',request()->input('phone'));
                \App\Http\Controllers\Frontend\UsersController::updateMeta($user,'user_photo',request()->input('user_photo'));
                return redirect()->back()->with('success','ویرایش با موفقیت انجام شد');
            }
        }
    }

    public function filter_user_permissions(Request $request,$user_id){
        $edit_user=User::find($user_id);
        if ($edit_user){
            $permissions=Permission::all();
            return view('admin.edit.filter_user_access',compact('edit_user','permissions'))->with(['page_title'=>'محدود کردن کاربر']);
        }else{
            return redirect()->route('admin.users.list');
        }
    }

    public function filter_user_permissions_post(Request $request,$user_id){
        $user=User::find($user_id);
        if ($user){
            $revokes=array();
            if ($request->has('revokes')){
                $revokes=$request->input('revokes');
            }
            $user->syncPermissions($revokes);
            return redirect()->route('admin.users.list');
        }else{
            return redirect()->route('admin.users.list');
        }
    }

    public function store(Request $request){
        $this->validate(request(),[
            'name'  => 'required',
            'email'      => 'required|email',
            'password'      => 'required|min:6|max:25',
        ],[
            'name.required' => 'لطفا نام کامل را وارد کنید.',
            'email.required'    => 'وارد کردن ایمیل الزامی می باشد.',
            'email.email'    => 'ایمیل وارد شده معتبر نمی باشد.',
            'password.required'    => 'وارد کردن کلمه عبور الزامی می باشد.',
            'password.min'    => 'کلمه عبور حداقل 6 کاراکتر نیاز دارد.',
            'password.max'    => 'کلمه عبور حداکثر باید 25 کاراکتر باشد.',
        ]);

        $name=$request->input('name');
        $email=$request->input('email');
        $password=$request->input('password');
        $new_user=User::create(array(
            'name'=>$name,
            'email'=>$email,
            'password'=>$password,
        ));
        if ($new_user){
            if ($request->has('role')){
                $role=$request->input('role');
                $new_user->syncRoles($role);
                \App\Http\Controllers\Frontend\UsersController::updateMeta($new_user,'phone',request()->input('phone'));
                \App\Http\Controllers\Frontend\UsersController::updateMeta($new_user,'user_photo',request()->input('user_photo'));
            }
            return redirect()->route('admin.users.list')->with('success','کاربر جدید با موفقیت افزوده شد');
        }
    }

    public function delete(Request $request,$user_id){
        $user=User::find($user_id);
        if ($user){
            if($user->posts()->count()>0){
                return redirect()->back()->with('error','قبل از حذف کاربر آگهی های کاربر را انتقال دهید');
            }
            $user->usermetas()->delete();
            $user->comments()->delete();
            if ($user->posts()->count()==0 && $user->delete()){
                return redirect()->route('admin.users.list')->with('success','کاربر مورد نظر با موفقیت حذف شد');
            }
        }
    }

    public function select_user_regions(Request $request,$user_id){
        $edit_user=User::find($user_id);
        if ($edit_user){
            $edit_user->roles()->get();
        }
    }

    public function transfer_adds($user_id){
        $edit_user=User::find($user_id);
        $users=User::role('adds-expert')->get();
        if($edit_user){
            return view('admin.edit.transfer_user_posts',compact('edit_user','users'))->with(['page_title'=>'انتفال نوشته های کاربر']);
        }
        return redirect()->back();
    }

    public function transfer_adds_post(Request $request,$user_id)
    {
        $edit_user=User::find($user_id);
        if($edit_user && $request->has('manager') && $dist=User::find($request->input('manager'))){
            DB::table('posts')->where('author',$user_id)->update(['author'=>$request->input('manager')]);
        }
        return redirect()->back();
    }

    public function reload_table_users(Request $request)
    {
        $posts_query=User::select(['*']);

        if($request->has('role')){
            $role=$request->input('role');
            if(trim($role)!=''){
                $posts_query->whereHas('roles',function($q) use ($role){
                    $q->where('name', $role);
                });
            }
        }

        if($request->has('search') && isset($request->input('search')['value']) && !empty($request->input('search')['value'])){
            $search_str=$request->input('search')['value'];
            $posts_query->where('name','like',"%$search_str%")->orWhere('email','like',"%$search_str%");
        }
        $posts_query->orderBy('updated_at','desc');
        $get_count_query=$posts_query;
        $numRows=$get_count_query->count();

        if($request->input("length") != -1){
            $posts_query->offset($request->input('start'))->limit($request->input("length"));
        }

        $employeeData=[];
        $users=$posts_query->get();
        foreach ($users as $user){
            $edit_route=route('admin.users.edit',$user->id);
            $filter_route=route('admin.users.filter',$user->id);
            $transfer_route=route('admin.users.transfer_adds',$user->id);
            $area_route=route('admin.users.area',$user->id);
            $delete_route=route('admin.users.delete',$user->id);
            $options=<<<EDT
                <div class="dropdown">
                    <a href="#" class="btn btn-sm"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
EDT;
            $options.=<<<EDT
                <a href="$edit_route" class="dropdown-item" type="button">ویرایش کاربر</a>
                <a href="$filter_route" class="dropdown-item" type="button">دسترسی های مستقیم کاربر</a>
                <a href="$transfer_route" class="dropdown-item" type="button">انتقال نوشته های کاربر</a>
                <a href="$area_route" class="dropdown-item" type="button">حیطه کاری کارشناس</a>
                <a href="$delete_route" class="dropdown-item delete-item" type="button">حذف کاربر</a>
EDT;

            $options.=<<<EDT
                    </div>
                </div>
EDT;
            $empRows = array();
            $empRows[]=$user->name;
            $empRows[]=implode('/',$user->roles->pluck('title') ->toArray());
            $empRows[]=isset($user->phone)?$user->phone:'';
            $empRows[]=Jalalian::forge(strtotime($user->created_at))->format('%d %B %Y h:i');
            $empRows[]=$options;
            $employeeData[]=$empRows;
        }
        $output = array(
            "draw"	=>	intval($request->input('draw')),
            "iTotalRecords"	=> 	10,
            "iTotalDisplayRecords"	=>  $numRows,
            "data"	=> 	$employeeData,
        );
        echo json_encode($output);
    }

}
