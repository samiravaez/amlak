<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Text_message extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];

    public function activity()
    {
        return $this->morphOne(Activity::class, 'actionable');
    }

    public function __set($key, $value)
    {
        if(in_array($key, ['send_time', 'reminder_time'])){
            $this->attributes[$key] = $value ? Jalalian::fromFormat('Y-m-d H:i:s', $value)->toCarbon() : null;
        } else {
            $this->setAttribute($key, $value);
        }
    }

    public function getSendTimeAttribute($value)
    {
        $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d H:i:s') : null;
    }

    public function getReminderTimeAttribute($value)
    {
        $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d H:i:s') : null;
    }
}
