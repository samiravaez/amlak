<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Timetable extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $attributes = [
        'trash' => '0'
    ];
    protected $guarded = [''];
    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function remind_methods()
    {
        return $this->morphToMany(Remind_method::class, 'remindable')->withTimestamps()->withPivot('trash');
    }

    public function __set($key, $value)
    {
        if(in_array($key, ['start_time', 'end_time'])){
            $this->attributes[$key] = $value ? Jalalian::fromFormat('Y-m-d H:i:s', $value)->toCarbon() : null;
        } else {
            $this->setAttribute($key, $value);
        }
    }

    public function getStartTimeAttribute($value)
    {
        $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d H:i:s') : null;
    }

    public function getEndTimeAttribute($value)
    {
        $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d H:i:s') : null;
    }
}
