<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Customer_state extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}