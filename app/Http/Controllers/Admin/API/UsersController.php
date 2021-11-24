<?php

namespace App\Http\Controllers\Admin\API;

use App\Http\Controllers\Controller;
use App\Models\Bakhsh;
use App\Models\File;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Shahrestan;
use App\Models\User;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Morilog\Jalali\Jalalian;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UsersController extends Controller
{

    public static $posts_list_route = 'admin.adds.list';
    public static $posts_edit_route = 'admin.add.edit';
    public static $posts_delete_route = 'admin.add.delete';
    public static $breadcrumb_title = 'کاربران';

    public static $success_create_user = 'کاربر جدید با موفقیت ایجاد شد.';
    public static $success_update_user = 'اطلاعات کاربر مورد نظر با موفقیت به روز رسانی شد.';
    public static $success_delete_user = 'کاربر مورد نظر با موفقیت حذف شد.';

    public static $failure_create_user = 'عملیات ایجاد کاربر جدید ناموفق بود.';
    public static $failure_update_user = 'عملیات به روز رسانی اطلاعات کاربر ناموفق بود.';
    public static $failure_delete_user = 'عملیات حذف کاربر موردنظر ناموفق بود.';


    public function get_my_info(Request $request)
    {
        return Response::json($request->user());
    }

    public function index()
    {
        $users = User::all();
        $roles = Role::all();
        $result = ['users' => $users, 'roles' => $roles, 'page_title' => 'لیست کاربران'];
        return Response::json($result, 200);
    }

    public function edit($user_id)
    {
        $user = User::findOrFail($user_id);
        $files = File::all();
        $roles = Role::all();
        $permissions = Permission::all();

        $user_meta = $user->usermetas()->get()->toArray();
        if (!empty($user_meta))
            $user_meta = array_column($user_meta, 'meta_value', 'meta_key');
        if (isset($user_meta['user_photo']))
            $user_profile = $files->firstWhere('file_id', $user_meta['user_photo']);
        else
            $user_profile = false;

        $result = ['user' => $user, 'roles' => $roles, 'permissions' => $permissions,
            'user_profile' => $user_profile, 'user_meta' => $user_meta, 'page_title' => 'ویرایش کاربر'];
        return Response::json($result, 200);
    }

    public function area($user_id)
    {
        $user = User::findOrFail($user_id);
        $regions = array();
        $ostans = Ostan::all();

        $user_regions = $user->getRegionAttribute();
        if (isset($user_regions)) {
            $regions = json_decode($user_regions, true);
            if (!empty($regions)) {
                foreach ($regions as $i => $region) {
                    foreach ($region as $index => $value) {
                        switch ($index) {
                            case 'ostan':
                                $regions[$i][$index] = Ostan::find($value);
                                break;
                            case 'shahrestan':
                                $regions[$i][$index] = Shahrestan::find($value);
                                break;
                            case 'mantaghe':
                                $regions[$i][$index] = Mantaghe::find($value);
                                break;
                            case 'bakhsh':
                                $regions[$i][$index] = Bakhsh::find($value);
                                break;
                        }
                    }
                }
            }
        }

        $transactions = TransactionController::getTree();
        $land_types = LandTypeController::getTree();
        $result = ['user' => $user, 'ostans' => $ostans, 'transactions' => $transactions,
            'land_types' => $land_types, 'regions' => $regions, 'page_title' => 'حیطه کاری کارشناس'];
        return Response::json($result, 200);
    }

    public function save_area(Request $request, $user_id)
    {
        $user = User::findOrFail($user_id);
        $sync = [];
        if ($request->has('data')) {
            $datas = $request->input('data');
            $credentials = array();
            foreach ($datas as $data) {
                if (isset($data['transaction-select-all'])) {
                    $transaction_id = '0';
                } else {
                    $transaction_id = $data['transaction'];
                }
                if (isset($data['land_type-select-all'])) {
                    $land_type_id = '0';
                } else {
                    $land_type_id = $data['land_type'];
                }
                $credentials[] = array(
                    'transaction_id' => (int)$transaction_id,
                    'land_type_id' => (int)$land_type_id,
                );
            }

            filter_user_jobs($credentials);

            $skill = $user->usermetas()->firstOrNew(['meta_key' => 'skill']);
            $skill->meta_value = json_encode($credentials, true);
        }

        if (isset($skill)) {
            $sync[] = $skill;
        } else {
            $all_skills = $user->usermetas()->where('meta_key', 'skill');
            $all_skills->delete();
        }

        if ($request->has('region')) {
            $region = $request->input('region');
            filter_user_regions($region);

            $user_region = $user->usermetas()->firstOrNew(['meta_key' => 'region']);
            $user_region->meta_value = json_encode(array_values($region), true);
        }

        if (isset($user_region)) {
            $sync[] = $user_region;
        } else {
            $all_regions = $user->usermetas()->where('meta_key', 'region');
            $all_regions->delete();
        }
//        $user->useraddsregion()->whereNotIn('id',collect($user_regions)->pluck('id')->toArray())->delete();
        $user->usermetas()->saveMany($sync);

        $result = ['status' => true, 'message' => 'حیطه کاری کارشناس با موفقیت ذخیره شد.'];
        return Response::json($result, 200);

    }

    public function create()
    {
        $roles = Role::all();
        $result = ['roles' => $roles, 'page_title' => 'افزودن کاربر'];
        return Response::json($result, 200);
    }

    public function update(Request $request, $user_id)
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

        $user = User::findOrFail($user_id);

        $update_use = $user->update($credentials);
        if ($update_use) {
            $role = $request->input('role');
            $user->syncRoles($role);
            \App\Http\Controllers\Frontend\UsersController::updateMeta($user, 'phone', request()->input('phone'));
            \App\Http\Controllers\Frontend\UsersController::updateMeta($user, 'user_photo', request()->input('user_photo'));
            $result = ['status' => true, 'message' => self::$success_update_user];
        } else {
            $result = ['status' => false, 'message' => self::$failure_update_user];
        }

        return Response::json($result, 200);
    }

    public function filter_user_permissions($user_id)
    {
        $user = User::findOrFail($user_id);

        $permissions = Permission::all();
        $result = ['user' => $user, 'permissions' => $permissions, 'page_title' => 'محدود کردن کاربر'];
        return Response::json($result, 200);
    }

    public function filter_user_permissions_post(Request $request, $user_id)
    {
        $user = User::findOrFail($user_id);

        $revokes = array();
        if ($request->has('revokes')) {
            $revokes = $request->input('revokes');
        }
        $user->syncPermissions($revokes);
        $result = ['status' => true, 'message' => 'دسترسی های مستقیم کاربر با موفقیت به روز رسانی شد.'];

        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|max:25',
        ], [
            'name.required' => 'لطفا نام کامل را وارد کنید.',
            'email.required' => 'وارد کردن ایمیل الزامی می باشد.',
            'email.email' => 'ایمیل وارد شده معتبر نمی باشد.',
            'password.required' => 'وارد کردن کلمه عبور الزامی می باشد.',
            'password.min' => 'کلمه عبور حداقل 6 کاراکتر نیاز دارد.',
            'password.max' => 'کلمه عبور حداکثر باید 25 کاراکتر باشد.',
        ]);

        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $new_user = User::create(array(
            'name' => $name,
            'email' => $email,
            'password' => $password,
        ));
        if ($new_user) {
            if ($request->has('role')) {
                $role = $request->input('role');
                $new_user->syncRoles($role);
                \App\Http\Controllers\Frontend\UsersController::updateMeta($new_user, 'phone', request()->input('phone'));
                \App\Http\Controllers\Frontend\UsersController::updateMeta($new_user, 'user_photo', request()->input('user_photo'));
            }
            $result = ['status' => true, 'message' => self::$success_create_user];
        } else {
            $result = ['status' => false, 'message' => self::$failure_create_user];
        }
        return Response::json($result, 200);
    }

    public function delete($user_id)
    {
        $user = User::findOrFail($user_id);
        $result = [];
        if ($user) {
            if ($user->posts()->count() > 0) {
                return redirect()->back()->with('error', 'قبل از حذف کاربر آگهی های کاربر را انتقال دهید');
            }
            $user->usermetas()->delete();
            $user->comments()->delete();
            if ($user->posts()->count() == 0 && $user->delete()) {
                $result = ['status' => true, 'message' => self::$success_delete_user];
            } else {
                $result = ['status' => false, 'message' => self::$failure_delete_user];
            }
        }
        return Response::json($result, 200);
    }

    public function select_user_regions($user_id)
    {
        $roles = [];
        $user = User::findOrFail($user_id);
        if ($user) {
            $roles = $user->roles()->get();
        }
       return Response::json($roles,200);
    }

    public function transfer_adds($user_id)
    {
        $user = User::findOrFail($user_id);
        $user_role = User::role('adds-expert')->get();
        $result = ['user' => $user, 'user_role' => $user_role, 'page_title' => 'انتفال نوشته های کاربر'];

        return Response::json($result, 200);
    }

    public function transfer_adds_post(Request $request, $user_id)
    {
        $user = User::findOrFail($user_id);
        $dist = User::findOrFail($request->input('manager'));
        if ($user && $dist && $request->has('manager')) {
            DB::table('posts')->where('author', $user_id)->update(['author' => $request->input('manager')]);
            $result = ['status' => true, 'message' => 'انتقال نوشته های کاربر با موفقیت انجام شد.'];
        } else {
            $result = ['status' => false, 'message' => 'انتقال نوشته های کاربر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function reload_table_users(Request $request)
    {
        $posts_query = User::select(['*']);
        if ($request->has('role')) {
            $role = $request->input('role');
            if (trim($role) != '') {
                $posts_query->whereHas('roles', function ($q) use ($role) {
                    $q->where('name', $role);
                });
            }
        }

        if ($request->has('search') && isset($request->input('search')['value']) && !empty($request->input('search')['value'])) {
            $search_str = $request->input('search')['value'];
            $posts_query->where('name', 'like', "%$search_str%")->orWhere('email', 'like', "%$search_str%");
        }
        $posts_query->orderBy('updated_at', 'desc');
        $get_count_query = $posts_query;
        $numRows = $get_count_query->count();

        if ($request->input("length") != -1) {
            $posts_query->offset($request->input('start'))->limit($request->input("length"));
        }

        $employeeData = [];
        $users = $posts_query->get();
        foreach ($users as $user) {
            $edit_route = route('admin.users.edit', $user->id);
            $filter_route = route('admin.users.filter', $user->id);
            $transfer_route = route('admin.users.transfer_adds', $user->id);
            $area_route = route('admin.users.area', $user->id);
            $delete_route = route('admin.users.delete', $user->id);
            $options = <<<EDT
                <div class="dropdown">
                    <a href="#" class="btn btn-sm"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
EDT;
            $options .= <<<EDT
                <a href="$edit_route" class="dropdown-item" type="button">ویرایش کاربر</a>
                <a href="$filter_route" class="dropdown-item" type="button">دسترسی های مستقیم کاربر</a>
                <a href="$transfer_route" class="dropdown-item" type="button">انتقال نوشته های کاربر</a>
                <a href="$area_route" class="dropdown-item" type="button">حیطه کاری کارشناس</a>
                <a href="$delete_route" class="dropdown-item delete-item" type="button">حذف کاربر</a>
EDT;

            $options .= <<<EDT
                    </div>
                </div>
EDT;
            $empRows = array();
            $empRows[] = $user->name;
            $empRows[] = implode('/', $user->roles->pluck('title')->toArray());
            $empRows[] = isset($user->phone) ? $user->phone : '';
            $empRows[] = Jalalian::forge(strtotime($user->created_at))->format('%d %B %Y h:i');
            $empRows[] = $options;
            $employeeData[] = $empRows;
        }
        $output = array(
            "draw" => intval($request->input('draw')),
            "iTotalRecords" => 10,
            "iTotalDisplayRecords" => $numRows,
            "data" => $employeeData,
        );
        echo json_encode($output);
    }

}
