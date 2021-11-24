<?php

namespace App\Http\Controllers\Admin;

use App\Classes\OptionTree;
use App\Http\Controllers\Controller;
use App\Models\Option;
use App\Models\Setting;
use App\Models\Term;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Morilog\Jalali\Jalalian;

class ThemeSettingsController extends Controller
{
    //
    public static $site_options = array(
        array(
            'id' => 'siteTitle',
            'type' => 'text',
            'label' => 'عنوان سایت',
            'description' => 'کاربران سایت شما را با این عنوان می شناسند',
            'std' => 'تب طرح',
        ),
        array(
            'id' => 'siteShortDescription',
            'type' => 'textarea',
            'label' => 'معرفی کوتاه سایت',
            'description' => 'معرفی مختصری از سایت خود بنویسید',
            'std' => 'طراحی سایت خود را به ما بسپارید',
        ),
        array(
            'id' => 'about_us',
            'type' => 'textarea',
            'label' => 'درباره ما',
        ),
        array(
            'id' => 'header_image',
            'type' => 'image',
            'label' => 'تصویر هدر',
        ),
        array(
            'id' => 'siteLogo',
            'type' => 'image',
            'label' => 'انتخاب لوگو',
            'description' => 'تصویر مناسبی انتخاب کنید',
        ),
        array(
            'id' => 'side_menu_image',
            'type' => 'image',
            'label' => 'تصویر منوی کناری',
        ),
        array(
            'id' => 'mainSlider',
            'type' => 'list-item',
            'label' => 'انتخاب تصاویر اسلایدر اصلی',
            'settings' => array(
                array(
                    'id' => 'image',
                    'type' => 'image',
                    'label' => 'تصویر',
                    'description' => 'تصویر مناسبی انتخاب کنید',
                ),
                array(
                    'id' => 'link',
                    'type' => 'text',
                    'label' => 'لینک تصویر',
                    'description' => 'لینک تصویر خود را انتخاب کنید',
                ),
            )
        ),

        array(
            'id'=>'phone',
            'label'=>'شماره تماس',
            'type'=>'text',
        ),
        array(
            'id'=>'android_app_download',
            'label'=>'لینک دانلود نسخه اندرود اپلیکیشن',
            'type'=>'text',
        ),
        array(
            'id'=>'ios_app_download',
            'label'=>'لینک دانلود نسخه ios اپلیکیشن',
            'type'=>'text',
        ),
        array(
            'id'=>'direct_app_download',
            'label'=>'لینک دانلود مستقیم',
            'type'=>'text',
        ),
        array(
            'id'=>'copy_right',
            'label'=>'متن کپی رایت',
            'type'=>'text',
        ),
        array(
            'id'=>'facebook_account',
            'label'=>'اکانت فیسبوک',
            'type'=>'text',
        ),
        array(
            'id'=>'twitter_account',
            'label'=>'اکانت توییتر',
            'type'=>'text',
        ),
        array(
            'id'=>'youtube_account',
            'label'=>'اکانت یوتیوب',
            'type'=>'text',
        ),
        array(
            'id'=>'instagram_account',
            'label'=>'اکانت اینستاگرام',
            'type'=>'text',
        ),
        array(
            'id'=>'telegram_account',
            'label'=>'اکانت تلگرام',
            'type'=>'text',
        ),
        array(
            'id' => 'frequently_asked_questions',
            'type' => 'textarea',
            'label' => 'سوالات متداول',
        ),
        array(
            'id' => 'terms_of_use',
            'type' => 'textarea',
            'label' => 'شرایط استفاده',
        ),
        array(
            'id' => 'contact_us',
            'type' => 'textarea',
            'label' => 'تماس با ما',
        ),
    );

    public function index()
    {
        $options = self::$site_options;
        $settings='';
        if (isset($options) && !empty($options)) {
            foreach ($options as $option) {
                if (isset($option['id']) && isset($option['type'])) {
                    $option_value = OptionTree::getOption($option['id']);
                    $option_id = $option['id'];
                    $optionInfo = array_filter($options, function ($val) use ($option_id) {
                        return isset($val['id']) && $val['id'] == $option_id;
                    });
                    $optionInfo = array_values($optionInfo)[0];
                    $settings.=OptionTree::showSetting($optionInfo, $option_value);
                }
            }
        }
        return view('admin.list.settings',compact('settings'))->with('page_title','تنظمات قالب');

//        $option=array(
//            'type'=>'text',
//            'label'=>'عنوان',
//            'description'=>'توضیحات بیشتری بنویسید.',
//            'std'=>'مقدار پیش فرض',
//            );
//        Setting::updateOrCreate(array('location'=>'text-option'),array('json'=>json_encode($option)));
//
//        $option=array(
//            'type'=>'textarea',
//            'label'=>'عنوان',
//            'description'=>'توضیحات بیشتری بنویسید.',
//            'std'=>'مقدار پیش فرض',
//            );
//        Setting::updateOrCreate(array('location'=>'textarea-option'),array('json'=>json_encode($option)));
//
//        $option=array(
//            'type'=>'on-off',
//            'label'=>'عنوان دکمه',
//            'description'=>'توضیحات بیشتری بنویسید.',
//            'std'=>'off',
//            );
//        Setting::updateOrCreate(array('location'=>'switch-option'),array('json'=>json_encode($option)));
//
//        $option=array(
//            'type'=>'select',
//            'label'=>'انتخاب کنید',
//            'description'=>'توضیحات بیشتری بنویسید.',
//            'std'=>'b',
//            'choices'=>array(
//                'a'=>'a',
//                'b'=>'b',
//            ),
//            );
//        Setting::updateOrCreate(array('location'=>'select-option'),array('json'=>json_encode($option)));
//
//        $option=array(
//            'type'=>'image',
//            'label'=>'بنر پیش فرض',
//            'description'=>'تصویر مناسبی انتخاب کنید',
//            );
//        Setting::updateOrCreate(array('location'=>'defaultBanner'),array('json'=>json_encode($option)));
//
//        $option=array(
//            'type'=>'gallery',
//            'label'=>'انتخاب کنید',
//            'description'=>'تصویر مناسبی انتخاب کنید',
//            );
//        Setting::updateOrCreate(array('location'=>'gallery-option'),array('json'=>json_encode($option)));
//
//        $option=array(
//            'type'=>'list-item',
//            'label'=>'ایجاد لیست آیتم',
//            'settings'=>array(
//                array(
//                    'id'=>'title',
//                    'type'=>'text',
//                    'label'=>'عنوان',
//                    'description'=>'توضیحات بیشتری بنویسید.',
//                    ),
//                array(
//                    'id'=>'image',
//                    'type' => 'image',
//                    'label' => 'تصویر',
//                    'description' => 'تصویر مناسبی انتخاب کنید',
//                ),
//                array(
//                    'id'=>'switch',
//                    'type'=>'on-off',
//                    'label'=>'عنوان دکمه',
//                    'description'=>'توضیحات بیشتری بنویسید.',
//                    'std'=>'on',
//                    )
//            )
//            );
//        Setting::updateOrCreate(array('location'=>'list-item-option'),array('json'=>json_encode($option)));
//
//        $settings=$this->showSettings();
//        return view('admin.list.settings',compact('settings'))->with('page_title','تنظمات قالب');
    }

    public function store(Request $request){
        if ($request->has('options')){
            $options=$request->input('options');
            $new_options=$options;
            foreach ($options as $index=>$option){
                if (is_array($option)){
                    $new_options[$index]=json_encode(array_values($option));
                }
                Option::updateOrCreate(
                    ['name'=>$index],
                    ['name'=>$index,'value'=>$new_options[$index]]
                );
            }
        }
        return redirect()->route('admin.theme.settings');
    }




}
