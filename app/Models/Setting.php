<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Setting extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $fillable=['location','json'];
    protected $primaryKey='id';

    public $timestamps=false;
}
