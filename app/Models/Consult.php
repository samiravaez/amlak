<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Consult extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $attributes = [
        'trash' => '0'
    ];
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function __set($key, $value)
    {
        if(in_array($key, ['initial_consult_time', 'trust_consult_time','offer_consult_time'
        ,'service_consult_time','choice_consult_time'])){
            $this->attributes[$key] = $value ? Jalalian::fromFormat('Y-m-d H:i:s', $value)->toCarbon() : null;
        } else {
            $this->setAttribute($key, $value);
        }
    }

    public function getInitialConsultTimeAttribute()
    {
        return $this->initial_consult_time ?
            Jalalian::fromCarbon($this->initial_consult_time)->format('Y/m/d H:i:s') : null;
    }

    public function getTrustConsultTimeAttribute()
    {
        return $this->trust_consult_time ?
            Jalalian::fromCarbon($this->trust_consult_time)->format('Y/m/d H:i:s') : null;
    }

    public function getOfferConsultTimeAttribute()
    {
        return $this->offer_consult_time ?
            Jalalian::fromCarbon($this->offer_consult_time)->format('Y/m/d H:i:s') : null;
    }

    public function getServiceConsultTimeAttribute()
    {
        return $this->service_consult_time ?
            Jalalian::fromCarbon($this->service_consult_time)->format('Y/m/d H:i:s') : null;
    }

    public function getChoiceConsultTimeAttribute()
    {
        return $this->choice_consult_time ?
            Jalalian::fromCarbon($this->choice_consult_time)->format('Y/m/d H:i:s') : null;
    }
}
