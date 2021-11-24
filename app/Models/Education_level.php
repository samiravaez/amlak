<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Education_level extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $fillable = ['name'];

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}
