<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Attendant extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $fillable = ['name'];
    protected $attributes = [
        'trash' => '0'
    ];
    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}
