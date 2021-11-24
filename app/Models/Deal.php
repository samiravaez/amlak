<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Deal extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];
    public function customers()
    {
        return $this->belongsToMany(Customer::class)->withTimestamps();
    }

    public function users()
    {
        return $this->belongsToMany(Customer::class)->withTimestamps();
    }

    public function visits()
    {
        return $this->hasMany(Visit::class);
    }

    public function getEndDateAttribute($value)
    {
        $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d') : null;
    }
}
