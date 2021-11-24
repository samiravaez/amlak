<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Menu extends Model
{
    use HasFactory;
    use RevisionableTrait;
    public $timestamps=false;
    protected $fillable=array('name','json');
}
