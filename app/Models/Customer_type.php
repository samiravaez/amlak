<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class Customer_type extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $attributes = [
        'trash' => '0'
    ];
    protected $fillable = ['name'];

    public static function getCustomMeta($customer_type_id)
    {
        $custom_meta = array();
        if ($customer_type_id == 1) {
            $custom_meta = array(
                array(
                    'label' => 'مشخصات کسب و کار',
                    'content' => array(
                        array(
                            'name' => 'industry',
                            'type' => 'select',
                            'label' => 'صنعت',
                            'url' => 'api/admin/crm/industries',
                        ),
                        array(
                            'name' => 'staff_count',
                            'type' => 'number',
                            'label' => 'تعداد پرسنل',
                            'description' => '',
                        ),
                        array(
                            'name' => 'national_id',
                            'type' => 'number',
                            'label' => 'شناسه ملی',
                            'description' => '',
                        ),
                        array(
                            'name' => 'economic code',
                            'type' => 'number',
                            'label' => 'کد اقتصادی',
                            'description' => '',
                        ),
                    ),
                ),
            );
        } elseif ($customer_type_id == 2) {
            $custom_meta = array(
                array(
                    'label' => 'اطلاعات شخصی',
                    'content' => array(
                        array(
                            'name' => 'national_id',
                            'type' => 'text',
                            'label' => 'کد ملی',
                            'description' => '',
                        ),
                        array(
                            'name' => 'birth_date',
                            'type' => 'date',
                            'label' => 'تاریخ تولد',
                            'description' => '',
                        ),
                        array(
                            'name' => 'marital_status',
                            'type' => 'select',
                            'label' => 'وضعیت تاهل',
                            'choices' => array(
                                '0' => 'مجرد',
                                '1' => 'متاهل',
                            ),
                            'related' => array(
                                'name' => 'marriage_date',
                                'type' => 'date',
                                'label' => 'تاریخ ازدواج',
                                'description' => '',
                            ),
                        ),
                        array(
                            'name' => 'income',
                            'type' => 'number',
                            'label' => 'درآمد ماهانه',
                            'description' => '',
                        ),
                    ),
                ),
            );
        }
        return $custom_meta;
    }

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}
