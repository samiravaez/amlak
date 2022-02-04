<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Remind_method extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $attributes = [
        'trash' => '0'
    ];
    protected $fillable = ['name'];


    public function visits()
    {
        return $this->morphedByMany(Visit::class, 'remindable')->withTimestamps();
    }

    public function activities()
    {
        return $this->morphedByMany(Activity::class, 'remindable')->withTimestamps();
    }

    public function timetables()
    {
        return $this->morphedByMany(Timetable::class, 'remindable')->withTimestamps();
    }

}
