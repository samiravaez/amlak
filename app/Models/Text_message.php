<?php

namespace App\Models;

use App\Casts\DateConverter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Text_message extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];
    protected $attributes = [
        'trash' => '0'
    ];

    protected $casts = ['send_time' => DateConverter::class, 'reminder_time' => DateConverter::class];

    protected $connection = 'mongodb';

    public function activity()
    {
        return $this->morphOne(Activity::class, 'actionable');
    }

}
