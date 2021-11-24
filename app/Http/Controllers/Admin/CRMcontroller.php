<?php

namespace App\Http\Controllers\Admin;

use App\Classes\OptionTree;
use App\Http\Controllers\Controller;
use App\Models\CRM;
use App\Models\Crmmeta;
use App\Models\Ostan;
use App\Models\Post;
use App\Models\Postmeta;
use App\Models\Term;
use App\Models\Term_type;
use App\Models\Termmeta;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Morilog\Jalali\Jalalian;

class CRMcontroller
{
    //
    public static $post_type = 'crm';
//    public static $list_view='admin.list.posts';
//    public static $edit_view='admin.edit.post';
//    public static $posts_list_route='admin.posts.list';
//    public static $posts_edit_route='admin.post.edit';
//    public static $posts_delete_route='admin.post.delete';
//    public static $breadcrumb_title='نوشته ها';
//    public static $add_item='افزودن درخواست';
//    public static $edit_item='وبرایش نوشته';
//    public static $items_list='لیست نوشته ها';
    public static $success_create_post = 'درخواست شما با موفقیت ثبت شد.';
    public static $success_edit_post = 'درخواست شما با موفقیت ویرایش شد.';
    public static $success_delete_post = 'درخواست شما با موفقیت حدف شد.';

    public static $pay_method = array(
        '0' => 'نقدی',
        '1' => 'معاوضه',
        '2' => 'وام',
        '3' => 'یا فروش ملک های دیگر',
    );
    public static $customer_type = array(
        '0' => 'جدی-آنی',
        '1' => 'در حال جستجو',
        '2' => 'گذری',
        '3' => 'مبتدی',
        '4' => 'مشتری حقوقی و سازمانی',
        '5' => 'مشتری سرمایه گذار',
        '6' => 'واسطه ها',
    );
    public static $talking = array(
        '0' => 'تلفنی',
        '1' => 'حضوری',
    );
    public static $purchage_stage = array(
        '0' => 'ثبت اطلاعات',
        '1' => 'نیازسنجی',
        '2' => 'ایجاد رابطه اعتمادسازی',
        '3' => 'پیشنهاددهی',
        '4' => 'سرویس دهی',
        '5' => 'در حال انتخاب نهایی',
        '6' => 'مذاکره در مورد معامله',
        '7' => 'قرار معامله',
        '8' => 'اتمام با موفقیت',
        '9' => 'عدم موفقیت',
        '10' => 'تأخیر در خرید',
    );

    public function add_customer()
    {
        return view('admin.crm.add_customer')->with(['page_title' => 'افزودن مشتری']);
    }

    public function check_customer(Request $request)
    {
        $phone = $request->input('phone');
        $user = User::whereHas('usermetas', function ($query) use ($phone) {
            return $query->where('meta_key', 'phone')->where('meta_value', $phone);
        })->first();
        if (isset($user)) {
            return redirect()->route('crm.crm_request', $user->id);
        } else {
            return redirect()->route('crm.add_new_customer', $phone);
        }
    }

    public function crm_request(Request $request, $user_id)
    {
        $termAndMetaHtml = $this->termAndMetaHtml();
        $customer = User::find($user_id);
        if ($customer) {
            $ostans = Ostan::all();
            $customer_type = static::$customer_type;
            $pay_method = static::$pay_method;
            $purchage_state = static::$purchage_stage;
            $talking = static::$talking;
            $land_types = LandTypeController::getTree();
            $transactions = TransactionController::getTree();
            $compact = ['customer', 'ostans', 'termAndMetaHtml', 'customer_type', 'pay_method', 'purchage_state', 'talking', 'land_types', 'transactions'];
            return view('admin.crm.request', compact($compact))->with(['page_title' => 'درخواست ملک']);
        } else {
            return redirect()->route('crm.add_customer');
        }
    }

    public function crm_request_create(Request $request, $user_id)
    {
        if ($request->has('main')) {
            $main = $request->input('main');
            $main['expert_id'] = Auth::id();
            $main['customer_id'] = $user_id;
            $crm = CRM::create($main);
            if ($crm) {
                $allowedTerms = array();
                if ($request->has('terms')) {
                    $terms = $request->input('terms');
                    foreach ($terms as $index => $term) {
                        $term_type = Term_type::firstWhere('term_type_name', $index);
                        if ($term_type) {
                            $allowedTerms = array_merge($allowedTerms, array_filter($term_type->terms()->pluck('term_id')->toArray(), function ($val) use ($term) {
                                return in_array($val, $term);
                            }));
                        }
                    }
                }
                $crm->terms()->sync($allowedTerms);
                $metas = array();
                if ($request->has('metas')) {
                    $metas = $request->input('metas');
                    if (isset($metas['land_type'])) {
                        array_walk($metas['land_type'], function (&$val) {
                            $val = (int)$val;
                        });
                    }
                    if (isset($metas['transaction'])) {
                        array_walk($metas['transaction'], function (&$val) {
                            $val = (int)$val;
                        });
                    }
                }
                if ($request->has('region')) {
                    $region = $request->input('region');
                    filter_user_regions($region);
                    $metas['region'] = array_values($region);
//                        foreach ($region as $value){
//                            if (isset($value['ostan'])){
//                                if($value['ostan']==0){
//                                    $metas['ostan'][]='0';
//                                }elseif (isset($value['shahrestan'])){
//                                    if($value['shahrestan']==0) {
//                                        $metas['ostan'][]=$value['ostan'];
//                                    }elseif (isset($value['mantaghe'])){
//                                        if($value['mantaghe']==0) {
//                                            $metas['shahrestan'][]=$value['shahrestan'];
//                                        }elseif (isset($value['bakhsh'])){
//                                            if($value['bakhsh']==0) {
//                                                $metas['mantaghe'][]=$value['mantaghe'];
//                                            }else{
//                                                $metas['bakhsh'][]=$value['bakhsh'];
//                                            }
//                                        }else{
//                                            $metas['mantaghe'][]=$value['mantaghe'];
//                                        }
//                                    }else{
//                                        $metas['shahrestan'][]=$value['shahrestan'];
//                                    }
//                                }else{
//                                    $metas['ostan'][]=$value['ostan'];
//                                }
//                            }
//                        }
                }
                if (isset($metas['related-to'])) {
                    foreach ($metas['related-to'] as $index => $val) {
                        if (!isset($metas[$index])) {
                            unset($metas['related-to'][$index]);
                        } else {
                            foreach ($val as $i => $j) {
                                if (!in_array($i, $metas[$index])) {
                                    unset($metas['related-to'][$index][$i]);
                                    continue;
                                }
                                $relate_fields_object = Termmeta::where('term_id', $i)->firstWhere('meta_key', 'relate_fields');
                                if ($relate_fields_object) {
                                    $f = array_column(json_decode($relate_fields_object->meta_value), 'id');
                                }
                                if (!empty($f)) {
                                    foreach ($j as $x => $y) {
                                        if (!in_array($x, $f)) {
                                            unset($metas['related-to'][$index][$i][$x]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    $other = array_values(array_merge(...array_values($metas['related-to'])));
                    if (!empty($other)) {
                        $metas = array_merge($metas, array_merge(...$other));
                    }
                    unset($metas['related-to']);
                }

                if (!empty($metas)) {
                    $sync = array();
                    foreach ($metas as $index => $postMeta) {

                        $meta = $crm->crmmetas()->firstOrNew(["meta_key" => $index]);
                        if ($postMeta != null) {
                            $meta->meta_key = $index;
                            if (is_array($postMeta)) {
                                $meta->meta_value = json_encode($postMeta);
                                $meta->isJson = true;
                            } else {
                                $meta->meta_value = $postMeta;
                                $meta->isJson = false;
                            }
                            $sync[] = $meta;
                        } else {
                            $meta->delete();
                        }
                    }
                    $crm->crmmetas()->saveMany($sync);
                    $extra_metas = $crm->crmmetas()->whereNotIn('meta_key', array_keys($metas));
                    if ($extra_metas->count() > 0) {
                        $extra_metas->delete();
                    }
                }
                return redirect()->route('admin.showSuggestedAdds', $crm->id)->with('success', 'درخواست شما با موفقیت ثبت شد');

            }
        }
    }

    public function crm_request_update(Request $request, $crm_id)
    {
        $crm = CRM::find($crm_id);
        if ($crm) {
            if (!Auth::user()->can('adds_management') && $crm->expert->id !== Auth::id())
                return abort(403);
            if ($request->has('main')) {
                $main = $request->input('main');
                $updateResult = $crm->update($main);
                if ($updateResult) {
                    $allowedTerms = array();
                    if ($request->has('terms')) {
                        $terms = $request->input('terms');
                        foreach ($terms as $index => $term) {
                            $term_type = Term_type::firstWhere('term_type_name', $index);
                            if ($term_type) {
                                $allowedTerms = array_merge($allowedTerms, array_filter($term_type->terms()->pluck('term_id')->toArray(), function ($val) use ($term) {
                                    return in_array($val, $term);
                                }));
                            }
                        }
                    }
                    $crm->terms()->sync($allowedTerms);
                    $metas = array();
                    if ($request->has('metas')) {
                        $metas = $request->input('metas');
                        if (isset($metas['land_type'])) {
                            array_walk($metas['land_type'], function (&$val) {
                                $val = (int)$val;
                            });
                        }
                        if (isset($metas['transaction'])) {
                            array_walk($metas['transaction'], function (&$val) {
                                $val = (int)$val;
                            });
                        }
                    }
                    if ($request->has('region')) {
                        $region = $request->input('region');
                        filter_user_regions($region);
                        $metas['region'] = array_values($region);
//                        foreach ($region as $value){
//                            if (isset($value['ostan'])){
//                                if($value['ostan']==0){
//                                    $metas['ostan'][]='0';
//                                }elseif (isset($value['shahrestan'])){
//                                    if($value['shahrestan']==0) {
//                                        $metas['ostan'][]=$value['ostan'];
//                                    }elseif (isset($value['mantaghe'])){
//                                        if($value['mantaghe']==0) {
//                                            $metas['shahrestan'][]=$value['shahrestan'];
//                                        }elseif (isset($value['bakhsh'])){
//                                            if($value['bakhsh']==0) {
//                                                $metas['mantaghe'][]=$value['mantaghe'];
//                                            }else{
//                                                $metas['bakhsh'][]=$value['bakhsh'];
//                                            }
//                                        }else{
//                                            $metas['mantaghe'][]=$value['mantaghe'];
//                                        }
//                                    }else{
//                                        $metas['shahrestan'][]=$value['shahrestan'];
//                                    }
//                                }else{
//                                    $metas['ostan'][]=$value['ostan'];
//                                }
//                            }
//                        }
                    }
                    if (isset($metas['related-to'])) {
                        foreach ($metas['related-to'] as $index => $val) {
                            if (!isset($metas[$index])) {
                                unset($metas['related-to'][$index]);
                            } else {
                                foreach ($val as $i => $j) {
                                    if (!in_array($i, $metas[$index])) {
                                        unset($metas['related-to'][$index][$i]);
                                        continue;
                                    }
                                    $relate_fields_object = Termmeta::where('term_id', $i)->firstWhere('meta_key', 'relate_fields');
                                    if ($relate_fields_object) {
                                        $f = array_column(json_decode($relate_fields_object->meta_value), 'id');
                                    }
                                    if (!empty($f)) {
                                        foreach ($j as $x => $y) {
                                            if (!in_array($x, $f)) {
                                                unset($metas['related-to'][$index][$i][$x]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        $other = array_values(array_merge(...array_values($metas['related-to'])));
                        if (!empty($other)) {
                            $metas = array_merge($metas, array_merge(...$other));
                        }
                        unset($metas['related-to']);
                    }

                    if (!empty($metas)) {
                        $sync = array();
                        foreach ($metas as $index => $postMeta) {

                            $meta = $crm->crmmetas()->firstOrNew(["meta_key" => $index]);
                            if ($postMeta != null) {
                                $meta->meta_key = $index;
                                if (is_array($postMeta)) {
                                    $meta->meta_value = json_encode($postMeta);
                                    $meta->isJson = true;
                                } else {
                                    $meta->meta_value = $postMeta;
                                    $meta->isJson = false;
                                }
                                $sync[] = $meta;
                            } else {
                                $meta->delete();
                            }
                        }
                        $crm->crmmetas()->saveMany($sync);
                        $extra_metas = $crm->crmmetas()->whereNotIn('meta_key', array_keys($metas));
                        if ($extra_metas->count() > 0) {
                            $extra_metas->delete();
                        }
                    }
                    return redirect()->route('admin.showSuggestedAdds', $crm_id)->with('success', 'درخواست شما با موفقیت ویرایش شد');
                }
            }
        } else {
            return redirect()->back();
        }
    }

    public function crm_request_edit(Request $request, $crm_id)
    {
        $crm = CRM::find($crm_id);
        if ($crm) {
            if (!Auth::user()->can('adds_management') && $crm->expert->id !== Auth::id())
                return abort(403);
            $termAndMetaHtml = $this->termAndMetaHtml($crm);
            $customer = User::find($crm->customer_id);
            $ostans = Ostan::all();
            $customer_type = static::$customer_type;
            $pay_method = static::$pay_method;
            $purchage_state = static::$purchage_stage;
            $talking = static::$talking;
            $land_types = LandTypeController::getTree();
            $transactions = TransactionController::getTree();
            $compact = ['customer', 'ostans', 'termAndMetaHtml', 'customer_type', 'pay_method', 'purchage_state', 'talking', 'crm', 'land_types', 'transactions'];
            return view('admin.crm.request', compact($compact))->with(['page_title' => 'ویرایش درخواست ملک']);
        }
    }

    public function add_new_customer(Request $request, $phone)
    {
        return view('admin.crm.add_new_customer', compact(['phone']))->with(['page_title' => 'افزودن مشتری جدید']);
    }

    public function save_new_customer(Request $request, $phone)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $user = User::whereHas('usermetas', function ($query) use ($phone) {
            return $query->where('meta_key', 'phone')->where('meta_value', $phone);
        })->first();

        if (isset($user)) {
            return redirect()->back();
        } else {
            $new_user = User::create(array(
                'name' => $name,
                'email' => $email,
                'password' => $password,
            ));
            if ($new_user) {
                \App\Http\Controllers\Frontend\UsersController::updateMeta($new_user, 'phone', $phone);
                return redirect()->route('crm.crm_request', $new_user->id);
            } else {
                return redirect()->back();
            }
        }

    }

    public function show_all_customers(Request $request)
    {
        $all_customers = Auth::user()->expertRegionCrm()->get();
        $customer_type = static::$customer_type;
        $pay_method = static::$pay_method;
        $purchage_stage = static::$purchage_stage;
        $talking = static::$talking;
        $page = 'all_customers';
        $compact = ['page', 'all_customers', 'customer_type', 'pay_method', 'purchage_stage', 'talking'];

        return view('admin.list.crm_customers', compact($compact))->with(['page_title' => 'همه مشتریان']);
    }

    public function show_my_customers(Request $request)
    {
        $all_customers = Auth::user()->crm_requests()->get();

        $customer_type = static::$customer_type;
        $pay_method = static::$pay_method;
        $purchage_stage = static::$purchage_stage;
        $talking = static::$talking;
        $page = 'my_customers';
        $compact = ['page', 'all_customers', 'customer_type', 'pay_method', 'purchage_stage', 'talking'];

        return view('admin.list.crm_customers', compact($compact))->with(['page_title' => 'مشتریان من']);
    }

    public function show_all_region_customers(Request $request)
    {
        $all_customers = (Auth::user()->expertRegionCrm(1)) ? Auth::user()->expertRegionCrm(1)->get() : [];
        $customer_type = static::$customer_type;
        $pay_method = static::$pay_method;
        $purchage_stage = static::$purchage_stage;
        $talking = static::$talking;
        $page = 'region_customers';
        $compact = ['page', 'all_customers', 'customer_type', 'pay_method', 'purchage_stage', 'talking'];

        return view('admin.list.crm_customers', compact($compact))->with(['page_title' => 'همه مشتریان منطقه']);
    }

    // get terms and metas should display in CRM

    public static function crmMetaFields()
    {
        $meta_value = AddsController::$meta_value;

        $crm_metas = array();
        array_walk($meta_value, function ($value) use (&$crm_metas) {
            if (!isset($value['crm'])) {
                $crm_metas[] = $value;
            } else {
                if ($value['crm'] === false) {

                } elseif (isset($value['content'])) {
                    $value['content'] = array_filter($value['content'], function ($val) {
                        return (!isset($val['crm']) || $val['crm'] !== false);
                    });
                    array_walk($value['content'], function (&$val) {
                        if (isset($val['crm'])) {
                            $val = array_merge($val, $val['crm']);
                        }
                    });
                    $crm_metas[] = array_merge($value, $value['crm']);
                }
            }
        });
        return $crm_metas;
    }

    public static function crmTermFields()
    {
        $meta_value = AddsController::$support_terms;

        $crm_terms = array();
        array_walk($meta_value, function ($value, $index) use (&$crm_terms) {
            if (!isset($value['crm'])) {
                $crm_terms[$index] = $value;
            } elseif (isset($value['crm']) && $value['crm'] !== false) {
                $crm_terms[$index] = array_merge($value, $value['crm']);
            }
        });
        return $crm_terms;
    }

    public function getTermsAndMetasHtmlArray($crm = false)
    {
        $meta_value = static::crmMetaFields();
        $meta_array = array();
        if (!empty($meta_value)) {
            foreach ($meta_value as $item) {
                $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'content' => $this->showCrmMetaBoxContent($item, $crm), 'position' => isset($item['position']) ? $item['position'] : 'normal');
            }
        }

        $terms = false;
        if ($crm)
            $terms = $crm->terms()->pluck('term_term_id')->toArray();
        $support_terms = static::crmTermFields();
        if (!empty($support_terms)) {
            foreach ($support_terms as $class => $item) {
                $meta_array[] = array('sort' => isset($item['sort']) ? $item['sort'] : 0, 'content' => $class::showInSinglePost($terms, true), 'position' => isset($item['position']) ? $item['position'] : 'normal');
            }
        }

        return $meta_array;
    }

    public function showCrmMetaBoxContent($meta_box, $crm = false)
    {
        $content = (isset($meta_box['content'])) ? $meta_box['content'] : array();
        ob_start();
        ?>
        <div class="card toggle-card bg-light">
            <div class="card-header bg-primary text-light">
                <?php if (isset($meta_box['label'])) echo $meta_box['label'] ?>
                <i class="fas fa-angle-up toggle"></i>
            </div>
            <div class="card-body">
                <?php if (!empty($content)) { ?>
                    <?php foreach ($content as $value) { ?>
                        <?php
                        $option_value = false;
                        if ($crm)
                            $option_value = $crm->getMeta($value['id']);
                        ?>
                        <?php echo OptionTree::showSetting($value, $option_value, false, true, false, true) ?>
                    <?php } ?>
                <?php } ?>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

    public function termAndMetaHtml($crm = false)
    {
        $meta_array = $this->getTermsAndMetasHtmlArray($crm);
        $datas = array_sort($meta_array, 'sort', SORT_ASC);

        $arr = array();
        foreach ($datas as $val) {
            $position = $val['position'];
            $arr[$position][] = $val['content'];
        }

        $html = '';
        ob_start();
        if (isset($datas) && is_array($datas) && !empty($datas)) {
            echo '<div class="row">';
            if (isset($arr['normal'])) {
                echo '<div class="col-md-8">';
                foreach ($arr['normal'] as $index => $val) {
                    echo $val;
                }
                echo '</div>';
            }
            if (isset($arr['side'])) {
                echo '<div class="col-md-4">';
                foreach ($arr['side'] as $index => $val) {
                    echo $val;
                }
                echo '</div>';
            }
            echo '</div>';
        }
        $html .= ob_get_clean();
        return $html;
    }

    public static function showExactAdds($crm_id, $search_level = 0)
    {
        $crm = CRM::find($crm_id);

        if ($crm) {
            if (!Auth::user()->can('adds_management') && !Auth::user()->can('local_adds_management'))
                return false;
            $all_crm_metas = $crm->crmmetas()->get()->toArray();
            $crm_metas = array_column($all_crm_metas, null, 'meta_key');
            array_walk($crm_metas, function (&$val) {
                if ($val['isJson']) {
                    $val['meta_value'] = json_decode($val['meta_value'], true);
                }
            });
            $posts_query = Post::select(['posts.postId'])
                ->where('post_type', 'add')
                ->where('trash', '0')
                ->where('status', '1')
                ->leftJoin('postmeta', 'posts.postId', '=', 'postmeta.post_id')
                ->leftJoin('post_term', 'posts.postId', '=', 'post_term.post_postId')
                ->groupBy('posts.postId');

            $posts_query->havingRaw("sum(case when meta_key = ? and meta_value= ? then 1 else 0 end)>0", ['confirm', '2']);

            $query_string = array();
            $query_parameters = array();
            if (isset($crm_metas['region']['meta_value'])) {
                $req_regions = $crm_metas['region']['meta_value'];
                foreach ($req_regions as $req_region) {
                    if (isset($req_region['bakhsh']) && $req_region['bakhsh'] > 0) {
                        //محدود به بخش
                        $query_string[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                        $query_parameters = array_merge($query_parameters, ['region', (string)$req_region['bakhsh'], '$.bakhsh']);

                    } elseif (isset($req_region['mantaghe']) && $req_region['mantaghe'] > 0) {
                        //محدود به منطقه
                        $query_string[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                        $query_parameters = array_merge($query_parameters, ['region', (string)$req_region['mantaghe'], '$.mantaghe']);
                    } elseif (isset($req_region['shahrestan']) && $req_region['shahrestan'] > 0) {
                        //محدود به شهر
                        $query_string[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                        $query_parameters = array_merge($query_parameters, ['region', (string)$req_region['shahrestan'], '$.shahrestan']);
                    } elseif (isset($req_region['ostan']) && $req_region['ostan'] > 0) {
                        //محدود به استان
                        $query_string[] = "sum(case when meta_key = ? and json_contains(meta_value,?,?) then 1 else 0 end) > 0";
                        $query_parameters = array_merge($query_parameters, ['region', (string)$req_region['ostan'], '$.ostan']);
                    }
                }
            }

            if (!empty($query_string)) {
                $posts_query->havingRaw("(" . implode(' OR ', $query_string) . ")", $query_parameters);
            }

            if (isset($crm_metas['land_type'])) {
                $land_type = (isset($crm_metas['land_type']['meta_value'])) ? $crm_metas['land_type']['meta_value'] : array();
                $out_loop_string = [];
                $params = [];
                foreach ($land_type as $value) {
                    $loop_land_type = Term::find($value);
                    if ($loop_land_type) {
                        if ($loop_land_type->termmetas()->firstWhere('meta_key', 'relate_fields')) {
                            $related_metas = json_decode($loop_land_type->termmetas()->firstWhere('meta_key', 'relate_fields')->meta_value, true);
                            $related_metas = array_filter($related_metas, function ($val) {
                                return (!isset($val['crm']) || $val['crm'] !== false);
                            });
                            array_walk($related_metas, function (&$val) {
                                if (isset($val['crm'])) {
                                    $val = array_merge($val, $val['crm']);
                                }
                                unset($val['crm']);
                                if (isset($val['type']) && in_array($val['type'], ['number', 'date']) && isset($val['search-mode']) && $val['search-mode']) {
                                    $val['search-type'] = 'from-to';
                                } else {
                                    $val['search-type'] = 'exact';
                                }
                            });

                            $str = array('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0');
                            $params[] = 'land_type';
                            $params[] = $value;

                            foreach ($related_metas as $related_meta) {
                                if ($search_level == 0 || (isset($related_meta['search-level']) && in_array($search_level, $related_meta['search-level']))) {
                                    if ($related_meta['search-type'] == 'from-to') {
                                        $range = $crm->getMeta($related_meta['id']);
                                        if (isset($range)) {
                                            if (isset($range['from']) && isset($range['to'])) {
                                                $str[] = 'sum(case when meta_key = ? and meta_value > ? and meta_value < ? then 1 else 0 end) > 0';
                                                $params[] = $related_meta['id'];
                                                $params[] = $range['from'];
                                                $params[] = $range['to'];
                                            } elseif (isset($range['from'])) {
                                                $str[] = 'sum(case when meta_key = ? and meta_value > ? then 1 else 0 end) > 0';
                                                $params[] = $related_meta['id'];
                                                $params[] = $range['from'];
                                            } elseif (isset($range['to'])) {
                                                $str[] = 'sum(case when meta_key = ? and meta_value < ? then 1 else 0 end) > 0';
                                                $params[] = $related_meta['id'];
                                                $params[] = $range['to'];
                                            }
                                        }
                                    } else {
                                        $var = $crm->getMeta($related_meta['id']);
                                        if (isset($var)) {
                                            $str[] = 'sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0';
                                            $params[] = $related_meta['id'];
                                            $params[] = $var;
                                        }
                                    }
                                }
                            }
                            if (!empty($str)) {
                                $out_loop_string[] = "(" . implode(' AND ', $str) . ")";
                            }
                        }
                    }
                }
                if (!empty($out_loop_string)) {
                    $posts_query->havingRaw("(" . implode(' OR ', $out_loop_string) . ")", $params);
                }
            }

            if (isset($crm_metas['transaction'])) {
                $transaction = (isset($crm_metas['transaction']['meta_value'])) ? $crm_metas['transaction']['meta_value'] : array();
                $out_loop_string = [];
                $params = [];
                foreach ($transaction as $value) {
                    $loop_transaction = Term::find($value);
                    if ($loop_transaction) {
                        if ($loop_transaction->termmetas()->firstWhere('meta_key', 'relate_fields')) {
                            $related_metas = json_decode($loop_transaction->termmetas()->firstWhere('meta_key', 'relate_fields')->meta_value, true);
                            $related_metas = array_filter($related_metas, function ($val) {
                                return (!isset($val['crm']) || $val['crm'] !== false);
                            });
                            array_walk($related_metas, function (&$val) {
                                if (isset($val['crm'])) {
                                    if (!is_array($val['crm'])) {
                                        $val['crm'] = json_decode($val['crm'], true);
                                    }
                                    $val = array_merge($val, $val['crm']);
                                }
                                unset($val['crm']);
                                if (isset($val['type']) && in_array($val['type'], ['number', 'date']) && isset($val['search-mode']) && $val['search-mode']) {
                                    $val['search-type'] = 'from-to';
                                } else {
                                    $val['search-type'] = 'exact';
                                }
                            });

                            $str = array('sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0');
                            $params[] = 'transaction';
                            $params[] = $value;
                            foreach ($related_metas as $related_meta) {
                                if ($search_level == 0 || (isset($related_meta['search-level']) && in_array($search_level, $related_meta['search-level']))) {
                                    if ($related_meta['search-type'] == 'from-to') {
                                        $range = $crm->getMeta($related_meta['id']);
                                        if (isset($range)) {
//                                            dump($range);
//                                            if($related_meta['type']=="date"){
//                                                array_walk($range,function (&$val){
//                                                    $val=Jalalian::fromFormat('Y/m/d', $val)->getTimestamp();;
//                                                });
//                                            }
//                                            dump($range);

                                            if (isset($range['from']) && isset($range['to'])) {
                                                $str[] = 'sum(case when meta_key = ? and meta_value > ? and meta_value < ? then 1 else 0 end) > 0';
                                                $params[] = $related_meta['id'];
                                                $params[] = $range['from'];
                                                $params[] = $range['to'];
                                            } elseif (isset($range['from'])) {
                                                $str[] = 'sum(case when meta_key = ? and meta_value > ? then 1 else 0 end) > 0';
                                                $params[] = $related_meta['id'];
                                                $params[] = $range['from'];
                                            } elseif (isset($range['to'])) {
                                                $str[] = 'sum(case when meta_key = ? and meta_value < ? then 1 else 0 end) > 0';
                                                $params[] = $related_meta['id'];
                                                $params[] = $range['to'];
                                            }
                                        }
                                    } else {
                                        $var = $crm->getMeta($related_meta['id']);
                                        if (isset($var)) {
                                            $str[] = 'sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0';
                                            $params[] = $related_meta['id'];
                                            $params[] = $var;
                                        }
                                    }
                                }
                            }
                            if (!empty($str)) {
                                $out_loop_string[] = "(" . implode(' AND ', $str) . ")";
                            }
                        }
                    }
                }
                if (!empty($out_loop_string)) {
                    $posts_query->havingRaw("(" . implode(' OR ', $out_loop_string) . ")", $params);
                }
            }

            //filter by propeties other than labd_type and transaction and regions
            $metas = self::crmMetaFields();
            $metas = array_filter($metas, function ($val) {
                return (!isset($val['crm']) || $val['crm'] !== false);
            });
            array_walk($metas, function (&$val) use ($search_level) {
                if (isset($val['crm'])) {
                    $val = array_merge($val, $val['crm']);
                }
                unset($val['crm']);
                if (isset($val['type']) && in_array($val['type'], ['number', 'date']) && isset($val['search-mode']) && $val['search-mode']) {
                    $val['search-type'] = 'from-to';
                } else {
                    $val['search-type'] = 'exact';
                }
            });
            $all_metas = array_merge(...array_column($metas, 'content'));
            $all_metas = array_filter($all_metas, function ($val) use ($search_level) {
                return !isset($val['crm']) || !isset($val['crm']['search-level']) || $search_level == 0 || in_array($search_level, $val['crm']['search-level']);
            });
            array_walk($all_metas,function (&$val){
                if(isset($val['crm'])){
                    $val=array_merge($val,$val['crm']);
                }
            });

            $str = [];
            $params = [];
            foreach ($all_metas as $related_meta) {
                if (isset($related_meta['id']) && isset($crm_metas[$related_meta['id']])) {
                    if (isset($related_meta['search-type']) && $related_meta['search-type'] == 'from-to') {
                        $range = $crm_metas[$related_meta['id']]['meta_value'];
                        if (isset($range)) {
                            if (isset($range['from']) && isset($range['to'])) {
                                $str[] = 'sum(case when meta_key = ? and meta_value > ? and meta_value < ? then 1 else 0 end) > 0';
                                $params[] = $related_meta['id'];
                                $params[] = (int)$range['from'];
                                $params[] = (int)$range['to'];
                            } elseif (isset($range['from'])) {
                                $str[] = 'sum(case when meta_key = ? and meta_value > ? then 1 else 0 end) > 0';
                                $params[] = $related_meta['id'];
                                $params[] = (int)$range['from'];
                            } elseif (isset($range['to'])) {
                                $str[] = 'sum(case when meta_key = ? and meta_value < ? then 1 else 0 end) > 0';
                                $params[] = $related_meta['id'];
                                $params[] = (int)$range['to'];
                            }
                        }
                    } elseif (isset($related_meta['search-type']) && $related_meta['search-type'] == 'in-array') {
                        $range = $crm_metas[$related_meta['id']]['meta_value'];
                        if (isset($range)) {
                            $var = $crm_metas[$related_meta['id']]['meta_value'];
                            if (count($var) > 0) {
                                $string = implode(', ', array_fill(0, count($var), '?'));
                                $str[] = "sum(case when meta_key = ? and meta_value IN ($string) then 1 else 0 end) > 0";
                                $params[] = $related_meta['id'];
                                $params = array_merge($params,$var);
                            }
                        }
                    } elseif (isset($related_meta['search-type']) && $related_meta['search-type'] == 'only-if-on') {
                        $var = $crm_metas[$related_meta['id']]['meta_value'];
                        if($var=='on'){
                            $str[] = 'sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0';
                            $params[] = $related_meta['id'];
                            $params[] = $var;
                        }
                    } else {
                        if (isset($crm_metas[$related_meta['id']]['meta_value'])) {
                            $var = $crm_metas[$related_meta['id']]['meta_value'];
                            $str[] = 'sum(case when meta_key = ? and meta_value = ? then 1 else 0 end) > 0';
                            $params[] = $related_meta['id'];
                            $params[] = $var;
                        }
                    }
                }
            }
            if (!empty($params)) {
                $posts_query->havingRaw(implode(' AND ', $str), $params);
            }

//            $addSlashes = str_replace('?', "'?'", $posts_query->toSql());
//            dd(vsprintf(str_replace('?', '%s', $addSlashes), $posts_query->getBindings()));

            $posts = Post::whereIn('postId', $posts_query->pluck('postId')->toArray())->orderBy('updated_at', 'desc');
            return $posts;
        }
    }

    public function showSuggestedAdds(Request $request, $crm_id)
    {
        $adds_query = static::showExactAdds($crm_id);
        if (isset($adds_query)) {
            $adds = $adds_query->get();
            $compact = ['adds'];
            return view('admin.crm.suggested_adds', compact([$compact]))->with(['page_title' => 'آگهی های پیشنهادی']);
        } else {
            return redirect()->back();
        }
    }

    public static function delete_customer($crm_id)
    {
        $crm = CRM::find($crm_id);
        if ($crm) {
            if (Auth::user()->hasRole('super-admin')) {
                if ($crm->crmmetas()) {
                    $crm->crmmetas()->delete();
                    $crm->terms()->sync([]);
                }
                if ($crm->delete())
                    return true;
                return false;
            }
            return false;
        }
        return false;
    }

    public function reload_customers_table(Request $request)
    {
        $page = ($request->has('page')) ? ($request->input('page')) : 'all_customers';
        switch ($page) {
            case 'all_customers':
                $post_query = Auth::user()->expertRegionCrm();
                break;
            case 'my_customers':
                $post_query = Auth::user()->crm_requests();
                break;
            case 'region_customers':
                $post_query = Auth::user()->expertRegionCrm(1);
                break;
        }

        if ($request->has('search') && isset($request->input('search')['value']) && !empty($request->input('search')['value'])) {
            $search_str = $request->input('search')['value'];
//            $post_query->where('name','like',"%$search_str%")->orWhere('postId','like',"%$search_str%");
        }
        $all_posts_query = $post_query;
        $numRows = ($all_posts_query) ? $all_posts_query->count() : 0;

        if ($post_query && $request->input("length") != -1) {
            $post_query->offset($request->input('start'))->limit($request->input("length"));
        }
        $customers = ($post_query) ? $post_query->get() : null;
        $arr = [];

        $employeeData = [];
        $user = Auth::user();
        if ($customers) {
            foreach ($customers as $customer) {
                $created_at = $customer->created_at;
                $region = '';
                if (isset($customer->region)) {
                    $region = '<ul class="region-list">';
                    foreach ($customer->region as $loop_region) {
                        $loop = array();
                        foreach ($loop_region as $index => $val) {
                            if (isset($val)) {
                                $loop[] = $val->Title;
                            }
                        }
                        if (count($loop) > 0) {
                            $region_exp = implode('- ', $loop);
                            $region .= '<li><span class="far fa-circle mr-1"></span>' . $region_exp . '</li>';
                        }
                    }
                    $region .= '</ul>';
                }
                $transaction_condition = '';
                if (isset($customer->transactions)) {
                    $transaction_condition .= '<div class="accordion accordion-secondary border-secondary custom-accordion">';
                    foreach ($customer->transactions as $transaction) {
                        $related_fields = $transaction->getRelatedFields();
                        if (isset($related_fields) && !empty($related_fields)) {
                            $show_related_fields = show_related_fields($related_fields, $customer);
                            $arr[] = $related_fields;
                            $accordion_header_class = (isset($show_related_fields) && !empty($show_related_fields)) ? '' : 'btn disabled';
                            $transaction_condition .= '<div class="accordion-row">';
                            $transaction_condition .= <<<EDT
                            <a class="accordion-header $accordion_header_class">
                                <span>{$transaction->term_name}</span>
                            </a>
EDT;
                            if (isset($show_related_fields) && !empty($show_related_fields)) {
                                $transaction_condition .= '<div class="accordion-body">';
                                $transaction_condition .= '<ul class="crm-table-fields-list">';
                                foreach ($show_related_fields as $field) {
                                    $transaction_condition .= '<li><span class="far fa-circle mr-1"></span>' . $field . '</li>';
                                }
                                $transaction_condition .= '</ul>';
                                $transaction_condition .= '</div>';
                            }
                            $transaction_condition .= '</div>';

                        }
                    }
                    $transaction_condition .= '</div>';
                }
                $land_type_condition = '';
                if (isset($customer->land_types)) {
                    $land_type_condition .= '<div class="accordion accordion-secondary border-secondary custom-accordion">';
                    foreach ($customer->land_types as $land_type) {
                        $related_fields = $land_type->getRelatedFields();
                        if (isset($related_fields) && !empty($related_fields)) {
                            $show_related_fields = show_related_fields($related_fields, $customer);
                            $accordion_header_class = (isset($show_related_fields) && !empty($show_related_fields)) ? '' : 'btn disabled';
                            $land_type_condition .= '<div class="accordion-row">';
                            $land_type_condition .= <<<EDT
                            <a class="accordion-header $accordion_header_class">
                                <span>{$land_type->term_name}</span>
                            </a>
EDT;
                            if (isset($show_related_fields) && !empty($show_related_fields)) {
                                $land_type_condition .= '<div class="accordion-body">';
                                $land_type_condition .= '<ul class="crm-table-fields-list">';
                                foreach ($show_related_fields as $field) {
                                    $land_type_condition .= '<li><span class="far fa-circle mr-1"></span>' . $field . '</li>';
                                }
                                $land_type_condition .= '</ul>';
                                $land_type_condition .= '</div>';
                            }
                            $land_type_condition .= '</div>';

                        }
                    }
                    $land_type_condition .= '</div>';
                }
                $options = <<<EDT
                <div class="dropdown">
                    <a href="#" class="btn btn-sm"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
EDT;
                if ($user->can('adds_management') || ($user->can('local_adds_management') && $user->id == $customer->expert->id)) {
                    $options .= '<a href="' . route('admin.crm_request_edit', $customer->id) . '" class="dropdown-item" type="button">ویرایش مشتری</a>';
                }
                $options .= '<a href="' . route('admin.showSuggestedAdds', $customer->id) . '" class="dropdown-item" type="button">لیست آگهی ها</a>';
                $options .= '<a href="' . route('crm_request_view', $customer->id) . '" class="dropdown-item" type="button">مشاهده</a>';
                if ($user->hasRole('super-admin')) {
                    $options .= '<a href="" class="delete-customer dropdown-item" type="button" data-customer="' . $customer->id . '">حذف مشتری</a>';
                }
                $options .= <<<EDT
                    </div>
                </div>
EDT;
                $empRows = array();
                $empRows[] = $customer->id;
                $empRows[] = <<<EDT
                <h6>{$customer->expert->name}</h6>
                <ul class="add-extra-info">
                    <li><span class="fas fa-phone mr-1"></span><a href="tel: {$customer->expert->phone}">{$customer->expert->phone}</a></li>
                    <li><span class="far fa-clock mr-1"></span>$created_at</li>
                </ul>
EDT;
                $empRows[] = $customer->user->name;
                $empRows[] = $region;
                $empRows[] = $transaction_condition;
                $empRows[] = $land_type_condition;
                $empRows[] = CRMcontroller::$customer_type[$customer->customer_type];
                $empRows[] = CRMcontroller::$purchage_stage[$customer->purchase_stage];
                $empRows[] = $options;
                $employeeData[] = $empRows;
            }
        }

        $output = array(
            "draw" => intval($request->input('draw')),
            "iTotalRecords" => 10,
            "iTotalDisplayRecords" => $numRows,
            "data" => $employeeData,
            'test' => $arr,
        );

        echo json_encode($output);
    }

    public function crm_request_view(Request $request, $crm_id)
    {
        $crm = CRM::find($crm_id);
        if ($crm) {
            if (!Auth::user()->can('adds_management') && $crm->expert->id !== Auth::id())
                return abort(403);
            $termAndMetaHtml = $this->termAndMetaHtml($crm);
            $customer = User::find($crm->customer_id);
            $ostans = Ostan::all();
            $customer_type = static::$customer_type;
            $pay_method = static::$pay_method;
            $purchage_state = static::$purchage_stage;
            $talking = static::$talking;
            $land_types = LandTypeController::getTree();
            $transactions = TransactionController::getTree();
            $compact = ['customer', 'ostans', 'termAndMetaHtml', 'customer_type', 'pay_method', 'purchage_state', 'talking', 'crm', 'land_types', 'transactions'];
            return view('admin.crm.view', compact($compact))->with(['page_title' => 'مشاهده  درخواست ملک']);
        }
    }
}
