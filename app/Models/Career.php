<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Career extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $attributes = [
        'trash' => '0'
    ];
    protected $fillable = ['name'];
    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}
