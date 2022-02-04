<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class User_adds_type extends Model
{
    use HasFactory;
    use RevisionableTrait;
    protected $table='user_adds_types';
    protected $guarded=array();
    public $timestamps=false;


}
