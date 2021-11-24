<?php

namespace App\Http\Controllers\Admin\API;

use App\Classes\OptionTree;
use App\Http\Controllers\Admin\TransactionController;
use App\Models\Bakhsh;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Postmeta;
use App\Models\Shahrestan;
use App\Models\Term;
use App\Models\Termmeta;
use App\Models\User;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Morilog\Jalali\Jalalian;
use Illuminate\Support\Facades\Validator;


class AddsController extends PostsController
{
    public static $post_type = 'add';
    public static $posts_list_route = 'admin.adds.list';
    public static $posts_edit_route = 'admin.add.edit';
    public static $posts_delete_route = 'admin.add.delete';
    public static $breadcrumb_title = 'آگهی ها';
    public static $add_item = 'افزودن آگهی';
    public static $items_list = 'همه آگهی ها';
    public static $items_my_list = 'آگهی های من';
    public static $edit_item = 'وبرایش آگهی';
    public static $archive_item = 'بایگانی';
    public static $trash_item = 'زباله دان';

    public static $success_create_post = 'آگهی جدید با موفقیت ایجاد شد.';
    public static $success_edit_post = 'آگهی شما با موفقیت ویرایش شد.';
    public static $success_delete_post = 'آگهی شما با موفقیت حدف شد.';
    public static $success_archive_post = 'آگهی شما با موفقیت بایگانی شد.';
    public static $success_trash_post = 'آگهی شما با موفقیت حدف شد.';
    public static $success_recursion_post = 'آگهی شما با موفقیت بازیابی شد.';
    public static $success_reject_post = 'آگهی شما با موفقیت رد شد.';
    public static $success_confirm_post = 'آگهی شما با موفقیت تأیید شد.';
    public static $success_reset_confirm_post = 'آگهی شما با موفقیت به حالت اولیه بازگردانی شد.';
    public static $success_touch = 'عملیات به روز رسانی تاریخ آگهی موردنظر ناموفق بود.';
    public static $failure_create_post = 'عملیات ایجاد آگهی جدید ناموفق بود.';
    public static $failure_edit_post = 'عملیات به روز رسانی آگهی موردنظر ناموفق بود.';
    public static $failure_delete_post = 'عملیات حذف آگهی موردنظر ناموفق بود.';
    public static $failure_touch = 'عملیات به روز رسانی تاریخ آگهی موردنظر ناموفق بود.';
    public static $failure_type = 'آیتم انتخاب شده از نوع آگهی نیست.';

    public static $post_filters = array(
        array(
            'label' => 'وضعیت تایید آگهی',
            'type' => 'checkbox',
            'name' => 'confirm[]',
            'content' => array(
                array(
                    'label' => 'رد شده',
                    'value' => 0,
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'label' => 'تایید شده',
                    'value' => 2,
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'label' => 'در انتظار تایید',
                    'value' => 1,
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
            ),
        ),

        array(
            'label' => 'وضعیت انتشار آگهی',
            'type' => 'checkbox',
            'name' => 'main[status][]',
            'content' => array(
                array(
                    'label' => 'پیش نویس',
                    'value' => 0,
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),

                array(
                    'label' => 'منتشر شده',
                    'value' => 1,
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
            ),
        ),

        array(
            'label' => 'نوع آگهی',
            'type' => 'checkbox',
            'name' => 'metas[special]',
            'content' => array(
                array(
                    'label' => 'آگهی های ویژه',
                    'value' => 'on',
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
            ),
        ),
        array(
            'label' => 'کد آگهی',
            'type' => 'number',
            'name' => 'main[postId]',
        ),
        array(
            'label' => 'نویسنده آگهی',
            'type' => 'select',
            'name' => 'main[author]',
            'url' => 'api/admin/users',
        ),
        array(
            'label' => 'استان',
            'type' => 'select',
            'name' => 'metas[region][ostan]',
            'url' => 'api/admin/regions/ostans',
            'related' => array(
                'label' => 'شهر',
                'type' => 'select',
                'name' => 'metas[region][ostan]',
                'url' => 'api/admin/regions/ostans',
            ),
        ),
    );

    public static $meta_value = array(
        array(
            'label' => 'مشخصات ساختمان',
            'position' => 'side',
            'sort' => '3',
            'content' => array(
//                array(
//                    'id'=>'transaction',
//                    'label'=>'نوع معامله',
//                    'type'=>'term-select',
//                    'term_type'=>TransactionController::class,
//                ),
//                array(
//                    'id'=>'land_type',
//                    'label'=>'نوع ملک',
//                    'type'=>'term-select',
//                    'term_type'=>LandTypeController::class,
//                ),
                array(
                    'id' => 'transaction',
                    'label' => 'نوع معامله',
                    'type' => 'transaction-select',
                ),
            ),
            'crm' => false,
        ),
        array(
            'label' => 'مشخصات تماس',
            'sort' => '2',
            'position' => 'normal',
            'content' => array(
                array(
                    'id' => 'phone',
                    'label' => 'شماره صاحب ملک',
                    'type' => 'text',
                    'single-page' => false,
                    'validate_rule' => array(
                        'phone' => 'required',
                    ),
                    'validate_message' => array(
                        'phone.required' => 'وارد کردن شماره ملک الزامی است.'
                    ),
                ),
                array(
                    'id' => 'comision',
                    'label' => 'کمیسیون',
                    'type' => 'text',
                    'single-page' => false,
                    'front-adds' => false,
                ),
            ),
            'crm' => false,
        ),
        array(
            'label' => 'گالری تصاویر',
            'content' => array(
                array(
                    'id' => 'image_gallery',
                    'type' => 'gallery',
                    'class' => 'col-xl-3 col-lg-4 col-md-6 col-sm-12',
                    'description' => 'تصاویر خود را انتخاب کنید',
                ),
            ),
            'position' => 'normal',
            'sort' => '3',
            'crm' => false,
        ),
        array(
            'label' => 'فاصله ملک تا مراکز مهم',
            'content' => array(
                array(
                    'id' => 'adds_facilities',
                    'type' => 'list-item',
                    'settings' => array(
                        array(
                            'id' => 'name',
                            'type' => 'term-select',
                            'term_type' => FacilitiesController::class,
                            'label' => 'انتخاب مرکز',
                        ),
                        array(
                            'id' => 'value',
                            'type' => 'text',
                            'term_type' => 'facility',
                            'label' => 'فاصله تا مرکز',
                        ),
                    ),
                    'front-adds' => false,
                ),
            ),
            'position' => 'normal',
            'sort' => '5',
            'crm' => false,
        ),
        array(
            'label' => 'وضعیت ملک',
            'position' => 'side',
            'sort' => '3',
            'content' => array(
                array(
                    'id' => 'doc-status',
                    'label' => 'وضعیت سند',
                    'type' => 'select',
                    'choices' => array(
                        '0' => 'سند شش دانگ',
                        '1' => 'قراردادی',
                        '2' => 'قولنامه ای',
                        '3' => 'در دست اقدام',
                    ),
                    'search-filter' => true,
                    'crm' => array(
                        'multiple' => true,
                        'search-mode' => true,
                        'search-type' => 'in-array',
                    ),
                ),
                array(
                    'id' => 'orientation',
                    'label' => 'موقعیت',
                    'type' => 'select',
                    'choices' => array(
                        '0' => 'شمالی',
                        '1' => 'جنوبی',
                        '2' => 'شرقی',
                        '3' => 'غربی',
                        '4' => 'شمالی- شرقی (نبش یا 2 بر)',
                        '5' => 'شمالی- غربی (نبش یا 2 بر)',
                        '6' => 'جنوبی- شرقی (نبش یا 2 بر)',
                        '7' => 'جنوبی- غربی (نبش یا 2 بر)',
                        '8' => '2 کله شمالی- جنوبی',
                        '9' => '2 کله شرقی- غربی',
                        '10' => '3 نبش یا 3 بر'
                    ),
                    'search-filter' => true,
                    'crm' => array(
                        'multiple' => true,
                        'search-mode' => true,
                        'search-type' => 'in-array',
                    ),
                ),
                array(
                    'id' => 'build_year',
                    'label' => 'سال ساخت',
                    'type' => 'year-from',
                    'start' => '1370',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'from-to',
//                        'search-level'=>[2,3],
                        'type' => 'number',
                    ),
                    'search-filter' => true,
                ),
                array(
                    'id' => 'area',
                    'label' => 'متراژ',
                    'type' => 'number',
                    'unit' => 'area',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'from-to',
                        'type' => 'number',
                    ),
                    'search-filter' => true,
                ),
//                array(
//                    'id'=>'room_count',
//                    'label'=>'تعداد اتاق',
//                    'type'=>'text',
//                    'crm'=>array(
//                        'search-mode'=>true,
//                        'type'=>'number',
//                    ),
//                ),
            ),
            'crm' => array(
                'sort' => '4',
                'position' => 'normal'
            ),
        ),
        array(
            'label' => 'ویژگی های ملک',
            'content' => array(
                array(
                    'id' => 'elevator',
                    'type' => 'on-off',
                    'std' => 'off',
                    'label' => 'آسانسور',
                    'search-filter' => true,
                    'class' => 'col-md-6 float-left',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'id' => 'parking',
                    'type' => 'on-off',
                    'std' => 'off',
                    'label' => 'پارکینگ',
                    'search-filter' => true,
                    'class' => 'col-md-6 float-left',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'id' => 'immediate',
                    'type' => 'on-off',
                    'std' => 'off',
                    'label' => 'فوری',
                    'search-filter' => true,
                    'class' => 'col-md-6 float-left',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'id' => 'changeable',
                    'type' => 'on-off',
                    'std' => 'off',
                    'label' => 'قابل معاوضه',
                    'search-filter' => true,
                    'class' => 'col-md-6 float-left',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'id' => 'luxe',
                    'type' => 'on-off',
                    'std' => 'off',
                    'label' => 'لوکس',
                    'search-filter' => true,
                    'class' => 'col-md-6 float-left',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'id' => 'cellar',
                    'type' => 'on-off',
                    'std' => 'off',
                    'label' => 'انباری',
                    'search-filter' => true,
                    'class' => 'col-md-6 float-left',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
            ),
            'position' => 'normal',
            'sort' => '2',
        ),
        array(
            'id' => 'branches',
            'label' => 'انشعابات',
            'position' => 'side',
            'sort' => 5,
            'content' => array(
                array(
                    'id' => 'water',
                    'label' => 'آب',
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'id' => 'electricity',
                    'label' => 'برق',
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                ),
                array(
                    'id' => 'gas',
                    'label' => 'گاز',
                    'type' => 'on-off',
                    'std' => 'on',
                    'crm' => array(
                        'search-mode' => true,
                        'search-type' => 'only-if-on',
                    ),
                )
            ),
        ),
    );

    public static $support_terms = array(
//        LandTypeController::class=>array(
//            'sort'=>'1',
//            'position'=>'side',
//            'type'=>'checkbox',
//        ),
//        TransactionController::class=>array(
//            'sort'=>'2',
//            'position'=>'side',
//            'type'=>'checkbox',
//        ),
        AddsFeatureController::class => array(
            'sort' => '3',
            'position' => 'normal',
            'crm' => array(
                'sort' => '6',
                'position' => 'side',
            ),
        ),
    );

//    public static function is_add_in_user_region($region,$user_id=false){
//        if (!$user_id){
//            $user=Auth::user();
//            $user_id=$user->id;
//        }else{
//            $user=User::find($user_id);
//            if (!$user)
//                return false;
//        }
//
//        if ($user->can('adds_management')){
//            return true;
//        }
//
//        if (!$user->can('local_adds_management')){
//            return false;
//        }
//
//
//        $add_region=array_merge(...$region);
//        $regions=[];
//        if (isset($add_region['bakhsh']) && intval($add_region['bakhsh'])>0){
//            $regions[]=array(
//                'region_type'=>4,
//                'region_id'=>intval($add_region['bakhsh']),
//            );
//        }
//        if (isset($add_region['mantaghe']) && intval($add_region['mantaghe'])>0){
//            $regions[]=array(
//                'region_type'=>3,
//                'region_id'=>intval($add_region['mantaghe']),
//            );
//        }
//        if (isset($add_region['shahrestan']) && intval($add_region['shahrestan'])>0){
//            $regions[]=array(
//                'region_type'=>2,
//                'region_id'=>intval($add_region['shahrestan']),
//            );
//        }
//        if (isset($add_region['ostan']) && intval($add_region['ostan'])>0){
//            $regions[]=array(
//                'region_type'=>1,
//                'region_id'=>intval($add_region['ostan']),
//            );
//        }
//        $regions[]=array(
//            'region_type'=>1,
//            'region_id'=>0,
//        );
//
//        $count=User_adds_region::where('user_id',$user_id)->where(function ($query) use($regions){
//            foreach ($regions as $region){
//                $query->orWhere(function ($query) use($region){
//                    $query->where('region_type',$region['region_type'])->where('region_id',$region['region_id']);
//                });
//            }
//        })->count();
//
//        if($count>0)
//            return true;
//        return false;
//    }
//
//    public static function is_add_in_user_adds_type($transaction,$land_type,$user_id=false){
//        if (!$user_id){
//            $user=Auth::user();
//            $user_id=$user->id;
//        }else{
//            $user=User::find($user_id);
//            if (!$user)
//                return false;
//        }
//
//        if ($user->can('adds_management')){
//            return true;
//        }
//
//        if (!$user->can('local_adds_management')){
//            return false;
//        }
//
//        $count=User_adds_type::where('user_id',$user_id)->where('transaction_id',$transaction)->orWhere('transaction_id',0)->where('land_type_id',$land_type)->orWhere('land_type_id',0)->count();
//
//        if ($count>0)
//            return true;
//        return false;
//    }


    public static function is_add_id_in_user_by_adds_object($add)
    {
        $user = Auth::user();
        if ($user->can('adds_management')) {
            return true;
        }
        if ($user->can('local_adds_management')) {
            $user_adds = [];
            $posts_allow = static::get_all_adds();
            if ($posts_allow && !empty($posts_allow)) {
                $user_adds = Post::whereIn('postId', $posts_allow)->select(['postId'])->pluck('postId')->toArray();
            }

            if (in_array($add->postId, $user_adds)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public function index()
    {
        $ostans = Ostan::all();
        $land_types = LandTypeController::getTree();
        $transactions = TransactionController::getTree();
        $features = AddsFeatureController::getTree();
        $adds = 'all_adds';

        $expressions = array(
            'breadcrumb_title' => static::$breadcrumb_title,
        );

        if (Auth::user()->can('adds_management')) {
            $users = User::select('id', 'name')->whereHas('posts', function ($query) {
                return $query->where('post_type', static::$post_type);
            })->get();
            $compact = ['adds', 'expressions', 'ostans', 'land_types', 'transactions', 'features', 'users'];
        } else {
            $compact = ['adds', 'expressions', 'ostans', 'land_types', 'transactions', 'features'];
        }

        $post_meta = array();
        $doc_status_array = static::get_meta_array_by_id('doc-status');
        if ($doc_status_array) {
            $doc_status_array['search-mode'] = true;
            $post_meta['doc-status'] = $doc_status_array;
        }
        $orientation_array = static::get_meta_array_by_id('orientation');
        if ($orientation_array) {
            $orientation_array['search-mode'] = true;
            $post_meta['orientation'] = $orientation_array;
        }
        $build_year_array = static::get_meta_array_by_id('build_year');
        if ($build_year_array) {
            $build_year_array['search-mode'] = true;
            $post_meta['build_year'] = $build_year_array;
        }
        $compact[] = 'post_meta';

        $result = ['post_meta' => compact($compact), 'page_title' => static::$items_list];
        return Response::json($result, 200);
    }

    public function store(Request $request)
    {
        $credentials = array(
//            'name'=>request()->input('name'),
//            'slug'=>request()->input('slug'),
            'description' => request()->input('description'),
            'status' => request()->input('status'),
            'post_type' => static::$post_type,
            'image' => request()->input('mainImage'),
        );

        $rules = array_merge(...array_column(static::get_all_metas(), 'validate_rule'));
        $messages = array_merge(...array_column(static::get_all_metas(), 'validate_message'));
        $rules['address'] = 'required';
        $messages['address.required'] = 'وارد کردن آدرس الرامی است';

        $validator = Validator::make($request->input('metas'), $rules, $messages);
        if ($validator->fails()) {
            return Response::json(['status' => false, 'errors' => $validator->errors()]);
        }

        $name = [];
        if ($request->has('metas')) {
            $metas = $request->input('metas');
            if (isset($metas['transaction']) && isset($metas['land_type'])) {
                $transaction = Term::find($metas['transaction']);
                $land_type = Term::find($metas['land_type']);
                if ($transaction) {
                    $name[] = $transaction->term_name;
                } else {
                    $name[] = 'معامله';
                }
                if ($land_type) {
                    $name[] = $land_type->term_name;
                } else {
                    $name[] = 'ملک';
                }
                if (isset($metas['area'])) {
                    $name[] = $metas['area'] . ' متری';
                }
                if (isset($metas['region'])) {
                    if (isset($metas['region']) && isset($metas['region']['bakhsh']) && $bakhsh = Bakhsh::find($metas['region']['bakhsh'])) {
                        $name[] = $bakhsh->Title;
                    } elseif (isset($metas['region']) && isset($metas['region']['mantaghe']) && $mantaghe = Mantaghe::find($metas['region']['mantaghe'])) {
                        $name[] = $mantaghe->Title;
                    } elseif (isset($metas['region']) && isset($metas['region']['shahrestan']) && $shahrestan = Shahrestan::find($metas['region']['shahrestan'])) {
                        $name[] = $shahrestan->Title;
                    } elseif (isset($metas['region']) && isset($metas['region']['ostan']) && $ostan = Ostan::find($metas['region']['ostan'])) {
                        $name[] = $ostan->Title;
                    }
                }
            }
        }

        $credentials['name'] = (count($name) > 0) ? implode(' ', $name) : 'ثبت ملک با اطلاعات ناقص';
        $credentials['slug'] = $this->uniqueSlug($credentials['name']);

        $credentials['author'] = Auth::id();

//        if ($credentials['slug']==''){
//            $credentials['slug']=$this->uniqueSlug($credentials['name']);
//        }else{
//            $credentials['slug']=$this->uniqueSlug($credentials['slug']);
//        }

        $new_post = Post::create($credentials);

        if ($new_post) {
            if ($request->has('terms')) {
                $terms = $request->input('terms');
                $new_post->terms()->sync($terms);
            }
            if ($request->has('metas')) {
                $postMetas = $request->input('metas');
                if (isset($postMetas['related-to'])) {
                    foreach ($postMetas['related-to'] as $index => $val) {
                        if (!isset($postMetas[$index])) {
                            unset($postMetas['related-to'][$index]);
                        } else {
                            foreach ($val as $i => $j) {
                                $relate_fields_object = Termmeta::where('term_id', $i)->firstWhere('meta_key', 'relate_fields');
                                if ($relate_fields_object) {
                                    $f = array_column(json_decode($relate_fields_object->meta_value), 'id');
                                }
                                if (!empty($f)) {
                                    foreach ($j as $x => $y) {
                                        if (!in_array($x, $f)) {
                                            unset($val[$i][$x]);
                                        }
                                    }
                                }
                            }
                            $postMetas = array_merge($postMetas, array_values($val)[0]);
                        }
                    }
                }
                unset($postMetas['related-to']);

                if (!empty($postMetas)) {
                    $sync = array();
                    foreach ($postMetas as $index => $postMeta) {
                        $meta = new Postmeta();
                        $meta->meta_key = $index;
                        if (is_array($postMeta)) {
                            if ($index == 'region') {
                                array_walk($postMeta, function (&$val) {
                                    $val = (int)$val;
                                });
                                $meta->meta_value = json_encode($postMeta);
                            } else {
                                $meta->meta_value = json_encode(array_values($postMeta));
                            }
                        } else {
                            $meta->meta_value = $postMeta;
                        }
                        $sync[] = $meta;
                    }
                    $new_post->postmetas()->saveMany($sync);
                }
            }

            if (static::is_add_id_in_user_by_adds_object($new_post)) {
                static::confirm($new_post->postId);
            }

            $result = ['status' => true, 'message' => static::$success_create_post];
        } else {
            $result = ['status' => false, 'message' => static::$failure_create_post];
        }
        return Response::json($result, 200);
    }

    public function update(Request $request, $post_id)
    {
        $postItem = Post::where('post_type', static::$post_type)->firstWhere('postId', $post_id);
        $credentials = array(
//            'name'=>request()->input('name'),
//            'slug'=>request()->input('slug'),
            'description' => request()->input('description'),
            'status' => request()->input('status'),
            'image' => request()->input('mainImage'),
        );

//        if ($credentials['slug']==''){
//            $credentials['slug']=$this->uniqueSlug($credentials['name']);
//        }elseif ($credentials['slug']!=$postItem->slug){
//            $credentials['slug']=$this->uniqueSlug($credentials['slug']);
//        }

        $rules = array_merge(...array_column(static::get_all_metas(), 'validate_rule'));
        $messages = array_merge(...array_column(static::get_all_metas(), 'validate_message'));
        $rules['address'] = 'required';
        $messages['address.required'] = 'وارد کردن آدرس الرامی است';

        $validator = Validator::make($request->input('metas'), $rules, $messages);
        if ($validator->fails()) {
            return Response::json(['status' => false, 'errors' => $validator->errors()]);
        }

        $name = [];
        if ($request->has('metas')) {
            $metas = $request->input('metas');
            if (isset($metas['transaction']) && isset($metas['land_type'])) {
                $transaction = Term::find($metas['transaction']);
                $land_type = Term::find($metas['land_type']);
                if ($transaction) {
                    $name[] = $transaction->term_name;
                } else {
                    $name[] = 'معامله';
                }
                if ($land_type) {
                    $name[] = $land_type->term_name;
                } else {
                    $name[] = 'ملک';
                }
                if (isset($metas['area'])) {
                    $name[] = $metas['area'] . ' متری';
                }
                if (isset($metas['region'])) {
                    if (isset($metas['region']) && isset($metas['region']['bakhsh']) && $bakhsh = Bakhsh::find($metas['region']['bakhsh'])) {
                        $name[] = $bakhsh->Title;
                    } elseif (isset($metas['region']) && isset($metas['region']['mantaghe']) && $mantaghe = Mantaghe::find($metas['region']['mantaghe'])) {
                        $name[] = $mantaghe->Title;
                    } elseif (isset($metas['region']) && isset($metas['region']['shahrestan']) && $shahrestan = Shahrestan::find($metas['region']['shahrestan'])) {
                        $name[] = $shahrestan->Title;
                    } elseif (isset($metas['region']) && isset($metas['region']['ostan']) && $ostan = Ostan::find($metas['region']['ostan'])) {
                        $name[] = $ostan->Title;
                    }
                }
            }
        }

        $credentials['name'] = (count($name) > 0) ? implode(' ', $name) : 'ثبت ملک با اطلاعات ناقص';

        if ($postItem->name != $credentials['name']) {
            $credentials['slug'] = $this->uniqueSlug($credentials['name']);
        }

        $updateResult = $postItem->update($credentials);

        if ($updateResult) {
            if ($request->has('terms')) {
                $postItem->terms()->sync($request->input('terms'));
            }

            if ($request->has('metas')) {
                $postMetas = $request->input('metas');
                if (isset($postMetas['related-to'])) {
                    foreach ($postMetas['related-to'] as $index => $val) {
                        if (!isset($postMetas[$index])) {
                            unset($postMetas['related-to'][$index]);
                        } else {
                            foreach ($val as $i => $j) {
                                $relate_fields_object = Termmeta::where('term_id', $i)->firstWhere('meta_key', 'relate_fields');
                                if ($relate_fields_object) {
                                    $f = array_column(json_decode($relate_fields_object->meta_value), 'id');
                                }
                                if (!empty($f)) {
                                    foreach ($j as $x => $y) {
                                        if (!in_array($x, $f)) {
                                            unset($val[$i][$x]);
                                        }
                                    }
                                }
                            }
                            $postMetas = array_merge($postMetas, array_values($val)[0]);
                        }
                    }
                }
                unset($postMetas['related-to']);

                if (!empty($postMetas)) {
                    $sync = array();
                    foreach ($postMetas as $index => $postMeta) {
                        if ($index == 'region') {
                            array_walk($postMeta, function (&$val) {
                                $val = (int)$val;
                            });
                        }
                        $meta = $postItem->postmetas()->firstOrNew(["meta_key" => $index]);
                        if ($postMeta != null) {
                            if (is_array($postMeta)) {
                                if ($index == 'region')
                                    $meta->meta_value = json_encode($postMeta);
                                else
                                    $meta->meta_value = json_encode(array_values($postMeta));
                            } else {
                                $meta->meta_value = $postMeta;
                            }
                            $sync[] = $meta;

                        } else {
                            $meta->delete();
                        }
                    }
                    $postItem->postmetas()->saveMany($sync);
                    $extra_metas = $postItem->postmetas()->whereNotIn('meta_key', array_keys($postMetas));
                    if ($extra_metas->count() > 0) {
                        $extra_metas->delete();
                    }

                }
            }

            if (static::is_add_id_in_user_by_adds_object($postItem)) {
                static::confirm($post_id);
            } else {
                static::reset_confirm($post_id);
            }
            $result = ['status' => true, 'message' => self::$success_edit_post];
        } else {
            $result = ['status' => false, 'message' => self::$failure_edit_post];
        }
        return Response::json($result, 200);
    }

    public function filter_all_adds(Request $request)
    {
        $all_posts = static::get_all_adds();

        $filter_metas = $request->input('metas');
        $filter_terms = $request->input('terms');

        $posts_query = static::filter_adds($filter_metas, $filter_terms);

        if ($request->has('confirm')) {
            $confirm = $request->input('confirm');
        }

        $posts = static::get_all_adds(false, $posts_query);
        $ostans = Ostan::all();
        $land_types = LandTypeController::getTree();
        $transactions = TransactionController::getTree();
        $features = AddsFeatureController::getTree();

        $result = ['posts' => $posts, 'all_posts' => $all_posts, 'breadcrumb_title' => static::$breadcrumb_title,
            'ostans' => $ostans, 'land_types' => $land_types, 'transactions' => $transactions, 'features' => $features, 'page_title' => static::$items_list];
        return Response::json($result, 200);
    }

    public function filter_my_adds(Request $request)
    {
        $all_posts = static::get_all_adds();

        $filter_metas = $request->input('metas');
        $filter_terms = $request->input('terms');

        $posts_query = static::filter_adds($filter_metas, $filter_terms)->where('author', Auth::id())->where('trash', '0')->orderBy('updated_at', 'desc');

        $posts = $posts_query->get();

        $ostans = Ostan::all();
        $land_types = LandTypeController::getTree();
        $transactions = TransactionController::getTree();
        $features = AddsFeatureController::getTree();

        $result = ['posts' => $posts, 'all_posts' => $all_posts, 'breadcrumb_title' => static::$breadcrumb_title, 'ostans' => $ostans,
            'land_types' => $land_types, 'transactions' => $transactions, 'features' => $features, 'page_title' => static::$items_my_list];
        return Response::json($result, 200);
    }

    public static function filter_adds($filter_metas, $filter_terms, $confirm = array(), $main = array(), $date = array())
    {
        $posts_query = Post::select(['posts.postId'])
            ->where('post_type', 'add')
            ->leftJoin('postmeta', 'posts.postId', '=', 'postmeta.post_id')
            ->leftJoin('post_term', 'posts.postId', '=', 'post_term.post_postId')
            ->groupBy('posts.postId');

        if (count($date) > 0) {
            if (isset($date['created_at'])) {
                if (isset($date['created_at']['from'])) {
                    $carbon = \Morilog\Jalali\CalendarUtils::createCarbonFromFormat('Y/m/d', $date['created_at']['from'])->getTimestamp();
                    $posts_query->whereDate('created_at', '>=', date('Y/m/d H:i:s', $carbon));
                }
                if (isset($date['created_at']['to'])) {
                    $carbon = \Morilog\Jalali\CalendarUtils::createCarbonFromFormat('Y/m/d', $date['created_at']['from'])->getTimestamp();
                    $posts_query->whereDate('created_at', '<=', date('Y/m/d H:i:s', $carbon));
                }
            }
            if (isset($date['updated_at'])) {
                if (isset($date['updated_at']['from'])) {
                    $carbon = \Morilog\Jalali\CalendarUtils::createCarbonFromFormat('Y/m/d', $date['updated_at']['from'])->getTimestamp();
                    $posts_query->whereDate('updated_at', '>=', date('Y/m/d H:i:s', $carbon));
                }
                if (isset($date['updated_at']['to'])) {
                    $carbon = \Morilog\Jalali\CalendarUtils::createCarbonFromFormat('Y/m/d', $date['updated_at']['to'])->getTimestamp();
                    $posts_query->whereDate('updated_at', '<=', date('Y/m/d H:i:s', $carbon));
                }
            }
        }

        if (count($main) > 0) {
            foreach ($main as $index => $item) {
                if (is_array($item) && !empty($item)) {
                    $posts_query->whereIn($index, $item);
                } else {
                    $posts_query->where($index, $item);
                }
            }
        }

        if (count($filter_metas) > 0) {
            if (isset($filter_metas['related-to'])) {
                $params = [];
                $partial_query_0 = [];
                foreach ($filter_metas['related-to'] as $index => $val) {
                    $partial_query = [];
                    if (isset($filter_metas[$index])) {
                        //$filter_metas[land_type][43]
                        //$filter_metas[related-to][land_type][42]
                        //$filter_metas[related-to][land_type]
                        foreach ($filter_metas[$index] as $value) {
                            //$filter_metas[land_type]->42,43
                            //meta_key=$index->example->land_type
                            //meta_value=$cnt->example->42
                            $str = [];
                            $str[] = 'sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0';
                            $params[] = $index;
                            $params[] = $value;
                            if (isset($filter_metas['related-to'][$index][$value])) {
                                foreach ($filter_metas['related-to'][$index][$value] as $inner_cnt => $inner_value) {
                                    //meta_key=$inner_cnt->example->area
                                    $params[] = $inner_cnt;
                                    if (is_array($inner_value)) {
                                        if (array_key_exists('from', $inner_value) && array_key_exists('to', $inner_value)) {
                                            if ($inner_value['to'] && $inner_value['from']) {
                                                //meta_value from $inner_value['from'] to $inner_value['to']
                                                $str[] = 'sum(case when meta_key = ? and meta_value >= ? and meta_value <= ? then 1 else 0 end) > 0';
                                                $params[] = (int)$inner_value['from'];
                                                $params[] = (int)$inner_value['to'];
                                            } elseif ($inner_value['from']) {
                                                //meta_value from $inner_value['from']
                                                $str[] = 'sum(case when meta_key = ? and meta_value >= ? then 1 else 0 end) > 0';
                                                $params[] = (int)$inner_value['from'];
                                            } elseif ($inner_value['to']) {
                                                //meta_value to $inner_value['to']
                                                $str[] = 'sum(case when meta_key = ? and meta_value <= ? then 1 else 0 end) > 0';
                                                $params[] = (int)$inner_value['to'];
                                            }
                                        } else {
                                            //meta_value whereIn $inner_value
                                        }
                                    } else {
                                        //meta_value=$inner_value->example->10000
                                        $str[] = 'sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0';
                                        $params[] = $inner_value;
                                    }
                                }
                            }
                            if (!empty($str)) {
                                $partial_query[] = "(" . implode(' and ', $str) . ")";
                            }
                        }
                        if (!empty($partial_query))
                            $partial_query_0[] = "(" . implode(' or ', $partial_query) . ")";
                        unset($filter_metas[$index]);
                    }
                }
                if (!empty($partial_query_0))
                    $q = "(" . implode(' and ', $partial_query_0) . ")";
                if (!empty($q) && !empty($params))
                    $posts_query->havingRaw($q, $params);
                unset($filter_metas['related-to']);
            }
            foreach ($filter_metas as $index => $meta) {
                if ($index == 'region') {
                    $region = $meta;
                    if (isset($region['bakhsh'])) {
                        if ($region['bakhsh'] == 0) {
                            if (isset($region['mantaghe'])) {
                                $posts_query->havingRaw("sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0", [$index, (string)$region['mantaghe'], '$.mantaghe']);
                            }
                        } else {
                            $posts_query->havingRaw("sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0", [$index, (string)$region['bakhsh'], '$.bakhsh']);
                        }
                    } elseif (isset($region['mantaghe'])) {
                        if ($region['mantaghe'] == 0) {
                            if (isset($region['shahrestan'])) {
                                $posts_query->havingRaw("sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0", [$index, (string)$region['shahrestan'], '$.shahrestan']);
                            }
                        } else {
                            $posts_query->havingRaw("sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0", [$index, (string)$region['mantaghe'], '$.mantaghe']);
                        }

                    } elseif (isset($region['shahrestan'])) {
                        if ($region['shahrestan'] == 0) {
                            if (isset($region['ostan'])) {
                                $posts_query->havingRaw("sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0", [$index, (string)$region['ostan'], '$.ostan']);
                            }
                        } else {
                            $posts_query->havingRaw("sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0", [$index, (string)$region['shahrestan'], '$.shahrestan']);
                        }
                    } elseif (isset($region['ostan'])) {
                        if ($region['ostan'] > 0) {
                            $posts_query->havingRaw("sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0", [$index, (string)$region['shahrestan'], '$.shahrestan']);
                        }
                    }
                } elseif (is_array($meta)) {
                    if (array_key_exists('from', $meta) && array_key_exists('to', $meta)) {
                        if ($meta['to'] && $meta['from']) {
                            $posts_query->havingRaw('sum(case when meta_key = ? and meta_value >= ? then 1 else 0 end) > 0', [$index, (int)$meta['from']])->havingRaw('sum(case when meta_key = ? and meta_value <= ? then 1 else 0 end) > 0', [$index, $meta['to']]);
                        } elseif ($meta['from']) {
                            $posts_query->havingRaw('sum(case when meta_key = ? and meta_value >= ? then 1 else 0 end) > 0', [$index, (int)$meta['from']]);
                        } elseif ($meta['to']) {
                            $posts_query->havingRaw('sum(case when meta_key = ? and meta_value <= ? then 1 else 0 end) > 0', [$index, (int)$meta['to']]);
                        }
                    } else {
                        $str = implode(', ', array_fill(0, count($meta), '?'));

                        $posts_query->havingRaw("sum(case when meta_key = ? and meta_value IN ($str) then 1 else 0 end) > 0", [$index, $meta]);
                    }
                } else {
                    $posts_query->havingRaw('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0', [$index, $meta]);
                }
            }
        }

        if (count($filter_terms) > 0) {
            foreach ($filter_terms as $index => $term) {
                $str = implode(', ', array_fill(0, count($term), '?'));
                $posts_query->havingRaw("sum(case when term_term_id IN ($str) then 1 else 0 end) > 0", [$term]);
            }
        }

        if (count($confirm) > 0) {
            $str = implode(', ', array_fill(0, count($confirm), '?'));

            if (is_array($confirm) && in_array('0', $confirm)) {
                $posts_query->havingRaw("(sum(case when meta_key = ? and meta_value IN ($str) then 1 else 0 end) > 0 or sum(case when meta_key = ? then 1 else 0 end) = 0) ", ['confirm', $confirm, 'confirm']);
            } else {
                $posts_query->havingRaw("sum(case when meta_key = ? and meta_value IN ($str) then 1 else 0 end) > 0", ['confirm', $confirm]);
            }

        }

//        $posts=Post::whereIn('postId',array_column($posts_query->get()->toArray(),'postId'))->orderBy('updated_at','desc');
//
//        return $posts;
        return $posts_query;
    }

    public function my_adds()
    {
        $ostans = Ostan::all();
        $land_types = LandTypeController::getTree();
        $transactions = TransactionController::getTree();
        $features = AddsFeatureController::getTree();
        $adds = 'my_adds';

        $post_meta = array();
        $doc_status_array = static::get_meta_array_by_id('doc-status');
        if ($doc_status_array) {
            $doc_status_array['search-mode'] = true;
            $post_meta['doc-status'] = OptionTree::showSetting($doc_status_array, false, false, true);
        }
        $orientation_array = static::get_meta_array_by_id('orientation');
        if ($doc_status_array) {
            $orientation_array['search-mode'] = true;
            $post_meta['orientation'] = OptionTree::showSetting($orientation_array, false, false, true);
        }
        $build_year_array = static::get_meta_array_by_id('build_year');
        if ($build_year_array) {
            $build_year_array['search-mode'] = true;
            $post_meta['build_year'] = OptionTree::showSetting($build_year_array, false, false, true);
        }
        $compact = ['adds', 'ostans', 'land_types', 'transactions', 'features'];
        $compact[] = 'post_meta';

        $result = ['post_meta' => compact($compact), 'page_title' => static::$items_my_list,
            'breadcrumb_title' => static::$breadcrumb_title,];
        return Response::json($result);
    }

    public function waiting_adds()
    {
        $ostans = Ostan::all();
        $land_types = LandTypeController::getTree();
        $transactions = TransactionController::getTree();
        $features = AddsFeatureController::getTree();
        $adds = 'waiting_adds';


        if (Auth::user()->can('adds_management')) {
            $users = User::select('id', 'name')->whereHas('posts', function ($query) {
                return $query->where('post_type', static::$post_type);
            })->get();
            $compact = ['adds', 'ostans', 'land_types', 'transactions', 'features', 'users'];
        } else {
            $compact = ['adds', 'ostans', 'land_types', 'transactions', 'features'];
        }

        $post_meta = array();
        $doc_status_array = static::get_meta_array_by_id('doc-status');
        if ($doc_status_array) {
            $doc_status_array['search-mode'] = true;
            $post_meta['doc-status'] = OptionTree::showSetting($doc_status_array, false, false, true);
        }
        $orientation_array = static::get_meta_array_by_id('orientation');
        if ($doc_status_array) {
            $orientation_array['search-mode'] = true;
            $post_meta['orientation'] = OptionTree::showSetting($orientation_array, false, false, true);
        }
        $build_year_array = static::get_meta_array_by_id('build_year');
        if ($build_year_array) {
            $build_year_array['search-mode'] = true;
            $post_meta['build_year'] = OptionTree::showSetting($build_year_array, false, false, true);
        }
        $compact[] = 'post_meta';

        $result = ['post_meta' => compact($compact), 'page_title' => 'آگهی های تأیید نشده', 'breadcrumb_title' => 'آگهی های تأیید نشده'];
        return Response::json($result, 200);
    }

    public function show_trash_adds()
    {
        if (Auth::user()->can('adds_management')) {
            $posts = Post::where('post_type', static::$post_type)->where('trash', '3')->get();
            $ostans = Ostan::all();
            $land_types = LandTypeController::getTree();
            $transactions = TransactionController::getTree();
            $features = AddsFeatureController::getTree();
            $adds = 'trash_adds';

            $users = User::select('id', 'name')->whereHas('posts', function ($query) {
                return $query->where('post_type', static::$post_type);
            })->get();

            $result = ['posts' => $posts, 'adds' => $adds, 'breadcrumb_title' => static::$breadcrumb_title
                , 'ostans' => $ostans, 'land_types' => $land_types, 'transactions' => $transactions,
                'features' => $features, 'users' => $users, 'page_title' => static::$trash_item];
        } else {
            $result = ['status' => false, 'message' => 'دسترسی به این صفحه برای شما مجاز نیست.'];
        }
        return Response::json($result, 200);
    }

    public static function get_all_adds($user_id = false, $filter = false)
    {
        if (!$user_id) {
            $user = Auth::user();
            $user_id = $user->id;
        } else {
            $user = User::find($user_id);
            if (!$user)
                return false;
        }

        if (!$user->can('local_adds_management') && !$user->can('adds_management')) {
            return false;
        }

        if ($user->can('adds_management') || $user->can('local_adds_management')) {
            if (!$filter) {
                $filter = Post::select(['posts.postId'])
                    ->where('post_type', 'add')
                    ->leftJoin('postmeta', 'posts.postId', '=', 'postmeta.post_id')
                    ->leftJoin('post_term', 'posts.postId', '=', 'post_term.post_postId')
                    ->groupBy('posts.postId');
//                $filter=Post::where('post_type', static::$post_type)->orderBy('updated_at','desc');
            }
            $all_adds = $filter->where('trash', '!=', '1');
            if (!$user->can('adds_management')) {
                $user_region = $user->region;
                $str = [];
                $parameters = [];
                $all_regions = false;
                if (isset($user_region)) {
                    $user_region = json_decode($user_region, true);
                    foreach ($user_region as $region) {
                        if (isset($region['bakhsh'])) {
                            if ($region['bakhsh'] == 0) {
                                if (isset($region['mantaghe'])) {
                                    $str[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                                    $parameters = array_merge($parameters, ['region', (string)$region['mantaghe'], '$.mantaghe']);
                                }
                            } else {
                                $str[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                                $parameters = array_merge($parameters, ['region', (string)$region['bakhsh'], '$.bakhsh']);
                            }
                        } elseif (isset($region['mantaghe'])) {
                            if ($region['mantaghe'] == 0) {
                                if (isset($region['shahrestan'])) {
                                    $str[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                                    $parameters = array_merge($parameters, ['region', (string)$region['shahrestan'], '$.shahrestan']);
                                }
                            } else {
                                $str[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                                $parameters = array_merge($parameters, ['region', (string)$region['mantaghe'], '$.mantaghe']);
                            }

                        } elseif (isset($region['shahrestan'])) {
                            if ($region['shahrestan'] == 0) {
                                if (isset($region['ostan'])) {
                                    $str[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                                    $parameters = array_merge($parameters, ['region', (string)$region['ostan'], '$.ostan']);
                                }
                            } else {
                                $str[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                                $parameters = array_merge($parameters, ['region', (string)$region['shahrestan'], '$.shahrestan']);
                            }
                        } elseif (isset($region['ostan'])) {
                            if ($region['ostan'] > 0) {
                                $str[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                                $parameters = array_merge($parameters, ['region', (string)$region['shahrestan'], '$.shahrestan']);
                            } else {
                                $all_regions = true;
                            }
                        }
                    }
                }
                if (!empty($str)) {
                    $all_adds->havingRaw("(" . implode(' OR ', $str) . ")", $parameters);
                } else {
                    if (!$all_regions)
                        return false;
                }
                $user_skill = $user->skill;
                $str = [];
                $parameters = [];
                $all_skills = false;
                if (isset($user_skill)) {
                    $user_skill = json_decode($user_skill, true);
                    foreach ($user_skill as $skill) {
                        $str1 = [];
                        if ((int)$skill['transaction_id'] > 0) {
                            $str1[] = "sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0";
                            $parameters = array_merge($parameters, ['transaction', (string)$skill['transaction_id']]);
                        }
                        if ((int)$skill['land_type_id'] > 0) {
                            $str1[] = "sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0";
                            $parameters = array_merge($parameters, ['land_type', (string)$skill['land_type_id']]);
                        }
                        if ((int)$skill['transaction_id'] == 0 && (int)$skill['land_type_id'] == 0) {
                            $all_skills = true;
                        }
                        if (!empty($str1)) {
                            $str[] = "(" . implode(' AND ', $str1) . ")";
                        }
                    }
                }
                if (!empty($str)) {
                    $all_adds->havingRaw("(" . implode(' OR ', $str) . ")", $parameters);
                } else {
                    if (!$all_skills)
                        return false;
                }
            }
            return $all_adds->pluck('postId')->toArray();
        }
        return false;
    }

    public function show_archive_adds(Request $request)
    {
        $all_posts = static::get_all_adds();
        if (Auth::user()->can('adds_management')) {
            $posts = Post::all()->where('post_type', static::$post_type)->where('trash', '2');
        } elseif (Auth::user()->can('local_adds_management')) {
            $posts = Post::all()->where('post_type', static::$post_type)->where('trash', '2')->where('author', Auth::id());
        } else {
            $posts = collect();
        }

        $ostans = Ostan::all();
        $land_types = LandTypeController::getTree();
        $transactions = TransactionController::getTree();
        $features = AddsFeatureController::getTree();
        $adds = 'archive_adds';

        if (Auth::user()->can('adds_management')) {
            $users = User::select('id', 'name')->whereHas('posts', function ($query) {
                return $query->where('post_type', static::$post_type);
            })->get();
            $compact = ['posts', 'all_posts', 'adds', 'ostans', 'land_types', 'transactions', 'features', 'users'];
        } else {
            $compact = ['posts', 'all_posts', 'adds', 'ostans', 'land_types', 'transactions', 'features'];
        }


        $result = ['post_meta' => compact($compact), 'page_title' => static::$archive_item,
            'breadcrumb_title' => 'بایگانی',];
        return Response::json($result, 200);
    }

    public static function archive($add_id)
    {
        $add = Post::where('post_type', static::$post_type)->firstWhere('postId', $add_id);
        if ($add) {
            if (Auth::user()->can('adds_management') || (Auth::user()->can('local_adds_management') && $add->author == Auth::id())) {
                $state = $add->update(array(
                    'trash' => '2',
                ));

                if ($state) {
                    $obj = $add->postmetas()->firstWhere('meta_key', 'confirm');
                    if ($obj) {
                        $obj->delete();
                    }
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public function archive_adds($post_id)
    {
        if (static::archive($post_id)) {
            $result = ['status' => true, 'message' => static::$success_archive_post];
        } else {
            $result = ['status' => false, 'message' => 'عملیات بایگانی آگهی ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public static function trash($add_id)
    {
        $add = Post::where('post_type', static::$post_type)->firstWhere('postId', $add_id);
        if ($add) {
            if (Auth::user()->can('adds_management') || (Auth::user()->can('local_adds_management') && $add->author == Auth::id())) {
                $state = $add->update(array(
                    'trash' => '3',
                ));

                if ($state) {
                    $obj = $add->postmetas()->firstWhere('meta_key', 'confirm');
                    if ($obj) {
                        $obj->delete();
                    }
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public function trash_adds($post_id)
    {
        if (static::trash($post_id)) {
            $result = ['status' => true, 'message' => static::$success_trash_post];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف آگهی ناموفق بود.'];

        }
        return Response::json($result, 200);
    }

    public static function recursion($add_id)
    {
        $add = Post::where('post_type', static::$post_type)->firstWhere('postId', $add_id);
        if ($add) {
            if (Auth::user()->can('adds_management') || (Auth::user()->can('local_adds_management') && $add->author == Auth::id())) {
                $state = $add->update(array(
                    'trash' => '0',
                ));

                if ($state) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public function recursion_adds($post_id)
    {
        if (static::recursion($post_id)) {
            $result = ['status' => true, 'message' => static::$success_recursion_post];
        } else {
            $result = ['status' => false, 'message' => 'عملیات بازیابی آگهی ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public static function delete_adds($add_id)
    {
        $add = Post::where('post_type', static::$post_type)->firstWhere('postId', $add_id);
        if ($add) {
            if (Auth::user()->can('adds_management')) {
                $state = $add->update(array(
                    'trash' => '1',
                ));

                if ($state) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public function delete(Request $request, $post_id)
    {
        if (static::delete_adds($post_id)) {
            $result = ['status' => true, 'message' => static::$success_delete_post];
        } else {
            $result = ['status' => false, 'message' => 'عملیات حذف آگهی ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public static function reject($add_id, $reason = false)
    {
        $add = Post::where('post_type', static::$post_type)->firstWhere('postId', $add_id);

        if ($add && static::is_add_id_in_user_by_adds_object($add)) {
            $status = Postmeta::updateOrCreate(array(
                'post_id' => $add_id,
                'meta_key' => 'confirm',
            ), array(
                'meta_value' => 1
            ));

            if ($status) {
                $reject_reason = array(
                    'reason' => ($reason) ? $reason : '',
                    'author' => Auth::id(),
                );
                Postmeta::updateOrCreate(array(
                    'post_id' => $add_id,
                    'meta_key' => 'reject_reason',
                ), array(
                    'meta_value' => json_encode($reject_reason, true)
                ));
                return true;
            }
            return false;
        }
        return false;
    }

    public function reject_adds($post_id)
    {
        if (static::reject($post_id)) {
            $result = ['status' => true, '_message' => static::$success_reject_post];
        } else {
            $result = ['status' => false, 'message' => 'عملیات رد آگهی ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public static function confirm($add_id)
    {
        $add = Post::where('post_type', static::$post_type)->firstWhere('postId', $add_id);

        if ($add && static::is_add_id_in_user_by_adds_object($add)) {
            $status = Postmeta::updateOrCreate(array(
                'post_id' => $add_id,
                'meta_key' => 'confirm',
            ), array(
                'meta_value' => 2
            ));

            if ($status) {
                $reject_reason = Postmeta::where('post_id', $add_id)->where('meta_key', 'reject_reason');
                if ($reject_reason) {
                    $reject_reason->delete();
                }
                return true;
            }
            return false;
        }
        return false;
    }

    public function confirm_adds($post_id)
    {
        if (static::confirm($post_id)) {
            $result = ['status' => true, 'message' => static::$success_confirm_post];
        } else {
            $result = ['status' => false, 'message' => 'عملیات تایید آگهی ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public static function reset_confirm($add_id)
    {
        $add = Post::where('post_type', static::$post_type)->firstWhere('postId', $add_id);

        if ($add && static::is_add_id_in_user_by_adds_object($add)) {
            $confirm = $add->postmetas()->firstWhere('meta_key', 'confirm');
            if ($confirm && $confirm->delete()) {
                $reject_reason = Postmeta::where('post_id', $add_id)->where('meta_key', 'reject_reason');
                if ($reject_reason) {
                    $reject_reason->delete();
                }
                return true;
            }
            return false;
        }
        return false;
    }

    public function reset_confirm_adds($post_id)
    {
        if (static::reset_confirm($post_id)) {
            $result = ['status' => true, 'message' => static::$success_reset_confirm_post];
        } else {
            $result = ['status' => false, 'message' => 'عملیات موردنظر ناموفق بود.'];
        }
        return Response::json($result, 200);
    }

    public function reload_table_datas(Request $request)
    {
        $page = ($request->has('page')) ? $request->input('page') : 'all_adds';
        $posts_allow = static::get_all_adds();

        if ($request->has('filters')) {
            $filter_serialize = $request->input('filters');
            $filters = [];
            parse_str($filter_serialize, $filters);
        }
        $filter_metas = (isset($filters) && isset($filters['metas'])) ? $filters['metas'] : array();
        $filter_terms = (isset($filters) && isset($filters['terms'])) ? $filters['terms'] : array();
        $confirm = (isset($filters) && isset($filters['confirm'])) ? $filters['confirm'] : array();
        if ($page == 'waiting_adds') {
            $confirm = ['0'];
        }
        $main = (isset($filters) && isset($filters['main'])) ? $filters['main'] : array();
        $date = (isset($filters) && isset($filters['date'])) ? $filters['date'] : array();
        $filtered_adds = AddsController::filter_adds($filter_metas, $filter_terms, $confirm, $main, $date)->pluck('postId')->toArray();

        switch ($page) {
            case 'archive_adds':
                if (Auth::user()->can('adds_management')) {
                    $posts_query = Post::where('post_type', static::$post_type)->where('trash', '2');
                } elseif (Auth::user()->can('local_adds_management')) {
                    $posts_query = Post::where('post_type', static::$post_type)->where('trash', '2')->where('author', Auth::id());
                } else {
                    $posts_query = collect();
                }
                break;
            case 'trash_adds':
                if (Auth::user()->can('adds_management')) {
                    $posts_query = Post::where('post_type', static::$post_type)->where('trash', '3');
                } else {
                    $posts_query = collect();
                }
                break;
            case 'my_adds':
                $posts_query = Post::where('post_type', static::$post_type)->where('author', Auth::id())->where('trash', '0');
                break;
            default:
                $posts_query = Post::where('trash', '0');
                if ($posts_allow && !empty($posts_allow)) {
                    $posts_query->whereIn('postId', $posts_allow);
                }
                break;
        }

        if ($request->has('search') && isset($request->input('search')['value']) && !empty($request->input('search')['value'])) {
            $search_str = $request->input('search')['value'];
            $posts_query->where('name', 'like', "%$search_str%")->orWhere('postId', 'like', "%$search_str%");
        }
        if (isset($filters) || $page == 'waiting_adds') {
            $posts_query->whereIn('postId', $filtered_adds);
        }
        $posts_query->orderBy('updated_at', 'desc');
        $all_posts_query = $posts_query;
        $numRows = $all_posts_query->count();

        if ($request->input("length") != -1) {
            $posts_query->offset($request->input('start'))->limit($request->input("length"));
        }
        $posts = $posts_query->get();

        $employeeData = [];
        foreach ($posts as $post) {
//            $created_at=$post->created_at;
            $created_at = Jalalian::forge(strtotime($post->created_at))->format('%d %B %Y h:i');
            $reject_route = route('admin.add.reject_adds', $post->postId);
            $confirm_route = route('admin.add.confirm_adds', $post->postId);
            $reset_confirm_route = route('admin.add.reset_confirm_adds', $post->postId);
            $edit_route = route(static::$posts_edit_route, $post->postId);
            $touch_route = route('admin.add.touch', $post->postId);
            $archive_route = route('admin.add.archive', $post->postId);
            $recursion_route = route('admin.add.recursion', $post->postId);
            $trash_route = route('admin.add.trash', $post->postId);
            $delete_route = route('admin.add.delete', $post->postId);
            $reject_state = $post->postConfirm() == 1 ? 'disabled' : '';
            $confirm_state = $post->postConfirm() == 2 ? 'disabled' : '';
            $reset_confirm_state = !in_array($post->postConfirm(), [1, 2]) ? 'disabled' : '';
            $options = <<<EDT
                <div class="dropdown">
                    <a href="#" class="btn btn-sm"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
EDT;
            if (isset($page) && !in_array($page, ['trash_adds', 'archive_adds']) && (in_array($page, ['all_adds']) || (is_array($posts_allow) && in_array($post->postId, $posts_allow)))) {
                $options .= <<<EDT
                    <a href="{$reject_route}" class="dropdown-item confirm-request reject {$reject_state}" data-adds="{$post->postId}" type="button">رد آگهی</a>
                    <a href="{$confirm_route}" class="dropdown-item confirm-request confirm {$confirm_state}" data-adds="{$post->postId}" type="button">تأیید</a>
                    <a href="{$reset_confirm_route}" class="dropdown-item confirm-request reset {$reset_confirm_state}" data-adds="{$post->postId}" type="button">بازگشت به حالت اولیه</a>
EDT;
            }
            if (isset($page) && !in_array($page, ['trash_adds'])) {
                $options .= <<<EDT
                     <a href="{$edit_route}" class="dropdown-item" type="button">ویرایش آگهی</a>
EDT;
            }
            if (isset($page) && !in_array($page, ['trash_adds', 'archive_adds'])) {
                $options .= <<<EDT
                    <a href="{$touch_route}" class="dropdown-item" type="button">به روز رسانی آگهی</a>
EDT;
            }
            if (((Auth::user()->can('local_adds_management') && Auth::id() == $post->author) || Auth::user()->can('adds_management')) && !in_array($page, ['archive_adds'])) {
                $options .= <<<EDT
                <a href="{$archive_route}" class="dropdown-item archive-adds" data-adds="{$post->postId}" type="button">بایگانی آگهی</a>
EDT;
            }
            if (((Auth::user()->can('local_adds_management') && Auth::id() == $post->author) || Auth::user()->can('adds_management')) && in_array($page, ['archive_adds', 'trash_adds'])) {
                $options .= <<<EDT
                    <a href="{$recursion_route}" class="dropdown-item recursion-adds" data-adds="{$post->postId}" type="button">بازگشت به پنل</a>
EDT;
            }
            if (((Auth::user()->can('local_adds_management') && Auth::id() == $post->author) || Auth::user()->can('adds_management')) && in_array($page, ['archive_adds'])) {
                $options .= <<<EDT
                    <a href="{$trash_route}" class="dropdown-item trash-adds" data-adds="{$post->postId}" type="button">حذف آگهی</a>
EDT;
            }
            if (isset($page) && in_array($page, ['trash_adds']) && Auth::user()->can('adds_management')) {
                $options .= <<<EDT
                    <a href="{$delete_route}" class="dropdown-item delete-adds" data-adds="{$post->postId}" type="button">حذف کامل آگهی</a>
EDT;
            }
            $author = isset($post->user) ? $post->user->name : '';
            $options .= <<<EDT
                    </div>
                </div>
EDT;
            $empRows = array();
            $empRows[] = $post->postId;
            $empRows[] = <<<EDT
                    <h6 class="view-details" data-adds="$post->postId">{$post->statusShow}{$post->name}</h6>
                    <ul class="add-extra-info">
                        <li><span class="fas fa-user-alt mr-1"></span><span>{$author}</span></li>
                        <li><span class="far fa-clock mr-1"></span><span>{$created_at}</span></li>
                    </ul>
EDT;
            $place = $post->place;
            $region = '<ul class="add-extra-info">';
            if (isset($place['address'])) {
                $region .= '<li><span class="fas fa-map-marker-alt mr-1"></span><span>' . $place['address'] . '</span></li>';
            }
            if (isset($place['phone'])) {
                $region .= '<li><span class="fas fa-headphones mr-1"></span><span>' . $place['phone'] . '</span></li>';
            }
            $region .= '</ul>';
            $empRows[] = $region;
            $empRows[] = $post->transactionField;
            $empRows[] = $post->LandTypeField;
            $empRows[] = $post->buildYear;
            $empRows[] = $options;
            $special_class = ($post->special) ? ' special' : '';
            $empRows['className'] = "{$post->confirmIconClass()}{$special_class}";
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

    public function show_dashboard(Request $request)
    {
        $all_adds = static::get_all_adds();
        if (!$all_adds) {
            $all_adds = [];
        }
        $new_adds_statistics = [
            'day' => [
                'total' => static::filter_adds([], [], [], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'confirm' => static::filter_adds([], [], ['2'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'reject' => static::filter_adds([], [], ['1'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'waiting-confirm' => static::filter_adds([], [], ['0'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'special' => static::filter_adds(['special' => 'on'], [], ['0'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
            ],
            'week' => [
                'total' => static::filter_adds([], [], [], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'confirm' => static::filter_adds([], [], ['2'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'reject' => static::filter_adds([], [], ['1'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'waiting-confirm' => static::filter_adds([], [], ['0'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'special' => static::filter_adds(['special' => 'on'], [], ['0'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
            ],
            'month' => [
                'total' => static::filter_adds([], [], [], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'confirm' => static::filter_adds([], [], ['2'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'reject' => static::filter_adds([], [], ['1'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'waiting-confirm' => static::filter_adds([], [], ['0'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'special' => static::filter_adds(['special' => 'on'], [], ['0'], ['trash' => '0'])->whereDate('created_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
            ],
        ];
        $update_adds_statistics = [
            'day' => [
                'total' => static::filter_adds([], [], [], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'confirm' => static::filter_adds([], [], ['2'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'reject' => static::filter_adds([], [], ['1'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'waiting-confirm' => static::filter_adds([], [], ['0'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'special' => static::filter_adds(['special' => 'on'], [], ['0'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subDay()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
            ],
            'week' => [
                'total' => static::filter_adds([], [], [], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'confirm' => static::filter_adds([], [], ['2'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'reject' => static::filter_adds([], [], ['1'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'waiting-confirm' => static::filter_adds([], [], ['0'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'special' => static::filter_adds(['special' => 'on'], [], ['0'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subWeek()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
            ],
            'month' => [
                'total' => static::filter_adds([], [], [], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'confirm' => static::filter_adds([], [], ['2'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'reject' => static::filter_adds([], [], ['1'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'waiting-confirm' => static::filter_adds([], [], ['0'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
                'special' => static::filter_adds(['special' => 'on'], [], ['0'], ['trash' => '0'])->whereDate('updated_at', '>=', Carbon::now()->subMonth()->toDateString())->whereIn('postId', $all_adds)->pluck('postId')->count(),
            ],
        ];

        $compact = ['new_adds_statistics', 'update_adds_statistics'];
        return Response::json(['data' => compact($compact), 'page_title' => 'داشبورد']);
    }

    public function get_statistics(Request $request)
    {
        $all_adds = static::get_all_adds();
        $region_adds = [
            'data' => [
                static::filter_adds([], [], ['2'], ['trash' => '0'])->whereIn('postId', $all_adds)->pluck('postId')->count(),
                static::filter_adds([], [], ['1'], ['trash' => '0'])->whereIn('postId', $all_adds)->pluck('postId')->count(),
                static::filter_adds([], [], ['0'], ['trash' => '0'])->whereIn('postId', $all_adds)->pluck('postId')->count(),
            ],
            'labels' => [
                'تأیید شده', 'رد شده', 'در انتظار تآیید',
            ],
            'colors' => [
                'rgba(16, 183, 89, 0.3)', 'rgba(255, 63, 63, 0.3)', 'rgba(241, 242, 247, 1)'
            ]
        ];
        $statistics = [
            'all' => Post::where('trash', 0)->whereIn('postId', $all_adds)->count(),
            'region_adds' => $region_adds,
        ];
        return response()->json($statistics);
    }

    public function get_my_statistics(Request $request)
    {
        $my_adds = [
            'data' => [
                static::filter_adds([], [], ['2'], ['trash' => '0'])->where('author', Auth::id())->pluck('postId')->count(),
                static::filter_adds([], [], ['1'], ['trash' => '0'])->where('author', Auth::id())->pluck('postId')->count(),
                static::filter_adds([], [], ['0'], ['trash' => '0'])->where('author', Auth::id())->pluck('postId')->count(),
            ],
            'labels' => [
                'تأیید شده', 'رد شده', 'در انتظار تآیید',
            ],
            'colors' => [
                'rgba(16, 183, 89, 0.3)', 'rgba(255, 63, 63, 0.3)', 'rgba(241, 242, 247, 1)'
            ]
        ];
        $statistics = [
            'all' => static::filter_adds([], [], ['0', '1', '2'], ['trash' => '0'])->where('author', Auth::id())->pluck('postId')->count(),
            'region_adds' => $my_adds,
        ];
        return response()->json($statistics);
    }

    public function get_adds_details(Request $request)
    {
        if ($request->has('adds')) {
            $adds_id = $request->input('adds');
            $metas = array_column(static::get_all_metas(), 'label', 'id');
            $adds = Post::with('postmetas')->where('post_type', AddsController::$post_type)->firstWhere('postId', $adds_id);
            $weg = $adds->postmetas->filter(function ($value, $index) {
                return (in_array($value->meta_key, ['water', 'electricity', 'gas']) && $value->meta_value == 'on');
            })->pluck('meta_key')->toArray();
            array_walk($weg, function (&$val) use ($metas) {
                if (isset($metas[$val]))
                    $val = $metas[$val];
            });

            $place = $adds->place;
            if (isset($place['address'])) {
                $region = $place['address'];
            }
            if (isset($place['phone'])) {
                $region = $place['phone'];
            }
            if ($adds) {
                $result = ['name' => $adds->name, 'info' => array(
                    array(
                        'label' => 'سال ساخت',
                        'value' => $adds->buildYear,
                    ),
                    array(
                        'label' => 'اطلاعات تماس',
                        'value' => $region,
                    ),
                    array(
                        'label' => 'انشعابات',
                        'value' => (count($weg) > 0) ? implode(' | ', $weg) : '...',
                    )
                )];
            } else {
                $result = ['status' => false, 'message' => 'عملیات موردنظر ناموفق بود.'];
            }
        } else {
            $result = ['status' => false, 'message' => 'اطلاعات موردنیاز در درخواست ارسالی موجود نیست.'];
        }
        return Response::json($result, 200);
    }


}
