<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Metabox extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='metaboxes';
    protected $fillable=['location','json'];
    public $timestamps=false;
}
