<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Remind_method extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $fillable = ['name'];


    public function visits()
    {
        return $this->morphedByMany(Visit::class, 'remindable')->withTimestamps();
    }

    public function activities()
    {
        return $this->morphedByMany(Activity::class, 'remindable')->withTimestamps();
    }


}
