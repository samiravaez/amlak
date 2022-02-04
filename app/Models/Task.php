<?php

namespace App\Models;

use App\Casts\DateConverter;
use App\Casts\MinutesConvertor;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Task extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];
    protected $attributes = [
        'trash' => '0'
    ];

    protected $casts = ['start_time' => DateConverter::class, 'end_time' => DateConverter::class,
        'reminder_time' => DateConverter::class, 'duration'=>MinutesConvertor::class];

    protected $connection = 'mongodb';

    public function activity()
    {
        return $this->morphOne(Activity::class, 'actionable');
    }




}
