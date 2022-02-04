<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Payment extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];
}
