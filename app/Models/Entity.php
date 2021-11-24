<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class Entity extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];
    public function customers()
    {
        return $this->belongsToMany(Customer::class)->withTimestamps();
    }

    public function industry()
    {
        return $this->belongsTo(Career::class, 'industry_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }
}
