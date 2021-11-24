<?php

namespace App\Http\Controllers\Admin;

use App\Classes\OptionTree;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Term;
use App\Models\Term_type;
use Illuminate\Http\Request;

class TransactionController extends CategoriesController
{
    //
    public static $term_type='transaction';
    public static $has_tree=false;
    public static $show_inputs_mode=true;
    public static $list_view='admin.list.category';
    public static $posts_list_route='admin.transactions.list';
    public static $posts_edit_route='admin.transaction.edit';
    public static $posts_delete_route='admin.transaction.delete';
    public static $breadcrumb_title='نوع معامله';
    public static $add_item='افزودن نوع معامله';
    public static $edit_item='وبرایش نوع معامله';
    public static $items_list='لیست انواع معاملات';

    public static $view_labels=array(
        'label'=>'انواع معامله',
    );

    public static $extra_meta=array(
        array(
            'id'=>'relate_fields',
            'label'=>'ویژگی های وابسته',
            'type'=>'list-item',
            'settings'=>array(
                array(
                    'id'=>'id',
                    'label'=>'شناسه',
                    'type'=>'text',
                ),
                array(
                    'id'=>'label',
                    'label'=>'عنوان',
                    'type'=>'text',
                ),
                array(
                    'id'=>'type',
                    'label'=>'نوع فیلد',
                    'type'=>'text',
                ),
                array(
                    'id'=>'choices',
                    'label'=>'json حالت های ممکن',
                    'description'=>'فقط برای نوع select',
                    'type'=>'text',
                ),
                array(
                    'id'=>'price',
                    'label'=>'در بخش قیمت آگهی نشان داده شود',
                    'type'=>'on-off',
                    'std'=>'off'
                ),
                array(
                    'id'=>'search-filter',
                    'label'=>'فیلتر جستجو',
                    'type'=>'on-off',
                    'std'=>'off'
                ),
                array(
                    'id'=>'unit',
                    'label'=>'انتخاب کمیت',
                    'type'=>'select',
                    'choices'=>array(
                        'none'=>'هیچ کدام',
                        'price'=>'قیمت',
                        'area'=>'مساحت',
                        'length'=>'طول',
                    ),
                ),
                array(
                    'id'=>'crm',
                    'label'=>'اطلاعات crm',
                    'description'=>'داده به شکل json وارد شود',
                    'type'=>'json',
                ),
            ),
        ),
        array(
            'id'=>'land_type',
            'label'=>'انواع ملک',
            'type'=>'term-select',
            'show_related'=>false,
            'multiple'=>true,
            'term_type'=>LandTypeController::class,
        ),
        array(
            'id' => 'icon',
            'label'=>'انتخاب آیکون',
            'description' => 'آیکون این نوع معامله را انتخاب کنید',
            'type' => 'image',
        ),
//        array(
//            'id'=>'price_fields',
//            'label'=>'فیلدهای قیمت',
//            'description'=>'فیلدهای قیمت را با علامت | جدا کنید',
//            'type'=>'text',
//        ),
    );

    public static $success_create_post='نوع معامله جدید با موفقیت ثبت شد.';
    public static $success_edit_post='نوع معامله شما با موفقیت ویرایش شد.';
    public static $success_delete_post='نوع معامله شما با موفقیت حذف شد.';

    public function land_types_list(Request $request)
    {
        if($request->has('transaction')){
            $post=false;
            if($request->has('post')){
                $post_id=$request->input('post');
                $post=Post::find($post_id);
            }
            $transaction_id=$request->input('transaction');
            $transaction=Term::where('term_type',TransactionController::getTermTypeId())->firstWhere('term_id',$transaction_id);
            if($transaction){
                $landTypesList=$transaction->getLandTypesList();
                $relate_fields_array=$transaction->getRelatedFields();
                $html='<div class="related-metas">';
                if (!empty($relate_fields_array)){
                    foreach ($relate_fields_array as $field){
                        $field_value=($post)?$post->postmetas()->firstWhere('meta_key', $field['id']):false;

                        if (isset($field['type']) && $field['type']=='select'){
                            if (isset($field['choices'])){
                                $field['choices']=json_decode($field['choices'],JSON_UNESCAPED_UNICODE);
                            }else{
                                $field['choices']=array();
                            }
                        }

                        $field['related-to']="[".TransactionController::$term_type."][".$transaction_id."]";

                        $html.=OptionTree::showSetting($field,$field_value?$field_value->meta_value:false,false,true,$post);
                    }
                }
                $html.='</div>';

                if(isset($landTypesList) && count($landTypesList)>0){
                    $option=array(
                        'id'=>'land_type',
                        'type'=>'term-select',
                        'label'=>'نوع ملک',
                        'term_type'=>LandTypeController::class,
                        'filter_by_array'=>$landTypesList,
                        'std'=>$landTypesList[0],
                        'class'=>'relate-terms',
                        'wrapper_class'=>'land_type_props',
                    );
                    $html.=OptionTree::showSetting($option,false,false,true,$post);
                }

                return response()->json([
                    'html'=>$html,
                ]);
            }
        }
    }

}
