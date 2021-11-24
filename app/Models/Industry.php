<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Industry extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $fillable = ['name'];

    public function entities()
    {
        return $this->hasMany(Entity::class);
    }
}
