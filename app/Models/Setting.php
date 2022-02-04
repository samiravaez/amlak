<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Setting extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $fillable=['location','json'];
    protected $primaryKey='id';

    public $timestamps=false;
}
