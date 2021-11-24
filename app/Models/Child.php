<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Child extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
