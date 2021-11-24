<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Activity extends Model
{
    use HasFactory;
    use RevisionableTrait;


    protected $guarded = [''];

    public function user()
    {
        return $this->belongsTo(Customer::class,'creator_id');
    }

    public function actionable()
    {
        return $this->morphTo();
    }

    public function users()
    {
        return $this->morphedByMany(User::class, 'activable');
    }

    public function customers()
    {
        return $this->morphedByMany(Customer::class, 'activable');
    }

    public function remind_methods()
    {
        return $this->morphToMany(Remind_method::class, 'remindable')->withTimestamps()->withPivot('trash');
    }
}
