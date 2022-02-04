<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class Activity_type extends Model
{
    use HasFactory;
    use SoftDeletes;
    use RevisionableTrait;

    protected $fillable = ['name'];
    protected $attributes = [
        'trash' => '0'
    ];
    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    public static function getCustomMeta($activity_type_id)
    {
        $custom_meta = array();
        if ($activity_type_id == 1) {
            $custom_meta = array(
                array(
                    'label' => 'مشخصات وظیفه',
                    'content' => array(
                        array(
                            'name' => 'start_date',
                            'type' => 'timestamp',
                            'label' => 'زمان انجام',
                            'description' => '',
                        ),
                        array(
                            'name' => 'end_date',
                            'type' => 'timestamp',
                            'label' => 'زمان پایان',
                            'description' => '',
                        ),
                        array(
                            'name' => 'progress_rate',
                            'type' => 'number',
                            'label' => 'درصد پیشرفت',
                            'description' => '',
                        ),
                        array(
                            'name' => 'reminder',
                            'type' => 'on-off',
                            'label' => 'افزودن یادآوری',
                            'related' => array(
                                array(
                                    'name' => 'reminder_date',
                                    'type' => 'timestamp',
                                    'label' => 'تاریخ',
                                    'description' => '',
                                ),
                                array(
                                    'name' => 'reminder_method',
                                    'type' => 'checkbox',
                                    'label' => 'روش',
                                    'multiple'=> true,
                                    'choices' => array(
                                        '0' => 'یادآوری ها',
                                        '1' => 'ایمیل',
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),

                array(
                    'label' => 'اطلاعات بیشتر',
                    'content' => array(
                        array(
                            'name' => 'status',
                            'type' => 'select',
                            'label' => 'وضعیت وظیفه',
                            'choices' => array(
                                '0' => 'باز',
                                '1' => 'در حال انجام',
                                '2' => 'انجام شده',
                                '3' => 'لغو',
                            ),
                        ),
                        array(
                            'name' => 'priority',
                            'type' => 'select',
                            'label' => 'اولویت',
                            'choices' => array(
                                '0' => 'پایین',
                                '1' => 'متوسط',
                                '2' => 'بالا',
                                '3' => 'بسیار بالا',
                            ),
                        ),
                        array(
                            'name' => 'type',
                            'type' => 'select',
                            'label' => 'نوع وظیفه',
                            'choices' => array(
                                '0' => 'اداری',
                                '1' => 'ملاقات',
                                '2' => 'سایر',
                            ),
                        ),
                        array(
                            'name' => 'cost',
                            'type' => 'number',
                            'label' => 'هزینه(تومان)',
                            'description' => '',
                        ),
                        array(
                            'name' => 'weight',
                            'type' => 'number',
                            'label' => 'وزن فعالیت',
                            'description' => '',
                        ),
                        array(
                            'label' => 'مدت زمان',
                            'content' => array(
                                array(
                                    'name' => 'day',
                                    'type' => 'number',
                                    'label' => '(روز)',
                                ),
                                array(
                                    'name' => 'hour',
                                    'type' => 'number',
                                    'label' => '(ساعت)',
                                ),
                                array(
                                    'name' => 'minute',
                                    'type' => 'number',
                                    'label' => '(دقیقه)',
                                ),
                            ),
                        ),
                    ),
                ),
            );
        } elseif ($activity_type_id == 2) {
            $custom_meta = array(
                array(
                    'label' => 'مشخصات تماس',
                    'content' => array(
                        array(
                            'name' => 'start_date',
                            'type' => 'timestamp',
                            'label' => 'زمان انجام',
                            'description' => '',
                        ),
                        array(
                            'name' => 'reminder',
                            'type' => 'on-off',
                            'label' => 'افزودن یادآوری',
                            'related' => array(
                                array(
                                    'name' => 'reminder_date',
                                    'type' => 'timestamp',
                                    'label' => 'تاریخ',
                                    'description' => '',
                                ),
                                array(
                                    'name' => 'reminder_method',
                                    'type' => 'checkbox',
                                    'label' => 'روش',
                                    'multiple'=> true,
                                    'choices' => array(
                                        '0' => 'یادآوری ها',
                                        '1' => 'ایمیل',
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),

                array(
                    'label' => 'اطلاعات بیشتر',
                    'content' => array(
                        array(
                            'name' => 'contact_side',
                            'type' => 'select',
                            'label' => 'جهت تماس',
                            'choices' => array(
                                '0' => 'ورودی',
                                '1' => 'خروجی',
                            ),
                        ),
                        array(
                            'name' => 'call_duration',
                            'type' => 'number',
                            'label' => 'مدت تماس',
                            'description' => '',
                        ),
                        array(
                            'name' => 'status',
                            'type' => 'select',
                            'label' => 'وضعیت فعالیت',
                            'choices' => array(
                                '0' => 'باز',
                                '1' => 'در حال انجام',
                                '2' => 'انجام شده',
                                '3' => 'لغو',
                            ),
                        ),
                        array(
                            'name' => 'status',
                            'type' => 'select',
                            'label' => 'وضعیت تماس',
                            'choices' => array(
                                '0' => 'موفق',
                                '1' => 'ناموفق',
                            ),
                        ),
                        array(
                            'name' => 'priority',
                            'type' => 'select',
                            'label' => 'اولویت',
                            'choices' => array(
                                '0' => 'پایین',
                                '1' => 'متوسط',
                                '2' => 'بالا',
                                '3' => 'بسیار بالا',
                            ),
                        ),

                    ),
                ),
            );
        }elseif ($activity_type_id == 3) {
            $custom_meta = array(
                array(
                    'label' => 'مشخصات جلسه',
                    'content' => array(
                        array(
                            'name' => 'meeting_place',
                            'type' => 'text',
                            'label' => 'محل جلسه',
                            'description' => '',
                        ),
                        array(
                            'name' => 'participants',
                            'type' => 'search-select',
                            'label' => 'شرکت کنندگان',
                            'multiple'=>true,
                            'url' => 'api/admin/crm/activity/participants',
                        ),
                        array(
                            'name' => 'start_date',
                            'type' => 'timestamp',
                            'label' => 'زمان شروع',
                            'description' => '',
                        ),
                        array(
                            'name' => 'end_date',
                            'type' => 'timestamp',
                            'label' => 'زمان پایان',
                            'description' => '',
                        ),
                        array(
                            'name' => 'progress_rate',
                            'type' => 'number',
                            'label' => 'درصد پیشرفت',
                            'description' => '',
                        ),
                        array(
                            'name' => 'reminder',
                            'type' => 'on-off',
                            'label' => 'افزودن یادآوری',
                            'related' => array(
                                array(
                                    'name' => 'reminder_date',
                                    'type' => 'timestamp',
                                    'label' => 'تاریخ',
                                    'description' => '',
                                ),
                                array(
                                    'name' => 'reminder_method',
                                    'type' => 'checkbox',
                                    'label' => 'روش',
                                    'multiple'=> true,
                                    'choices' => array(
                                        '0' => 'یادآوری ها',
                                        '1' => 'ایمیل',
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),

                array(
                    'label' => 'اطلاعات بیشتر',
                    'content' => array(
                        array(
                            'name' => 'status',
                            'type' => 'select',
                            'label' => 'وضعیت جلسه',
                            'choices' => array(
                                '0' => 'باز',
                                '1' => 'در حال انجام',
                                '2' => 'انجام شده',
                                '3' => 'لغو',
                            ),
                        ),
                        array(
                            'name' => 'priority',
                            'type' => 'select',
                            'label' => 'اولویت',
                            'choices' => array(
                                '0' => 'پایین',
                                '1' => 'متوسط',
                                '2' => 'بالا',
                                '3' => 'بسیار بالا',
                            ),
                        ),


                        array(
                            'name' => 'add_calendar',
                            'label' => 'افزودن در تقویم',
                            'type' => 'checkbox'
                        ),
                    ),
                ),
            );
        }elseif ($activity_type_id == 4) {
            $custom_meta = array(
                array(
                    'label' => 'مشخصات ایمیل',
                    'content' => array(
                        array(
                            'name' => 'from',
                            'type' => 'search-select',
                            'multiple' => true,
                            'label' => 'From',
                            'description' => '',
                        ),
                        array(
                            'name' => 'to',
                            'type' => 'search-select',
                            'multiple' => true,
                            'label' => 'To',
                            'description' => '',
                        ),
                        array(
                            'name' => 'cc',
                            'type' => 'search-select',
                            'multiple' => true,
                            'label' => 'CC',
                            'description' => '',
                        ),
                        array(
                            'name' => 'bcc',
                            'type' => 'search-select',
                            'multiple' => true,
                            'label' => 'BCC',
                            'description' => '',
                        ),

                    ),
                ),

            );
        }
        return $custom_meta;
    }
}
