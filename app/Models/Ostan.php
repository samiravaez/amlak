<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Ostan extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='tbl_ostan';
    protected $primaryKey='ID';
    public $timestamps=false;
    protected $guarded=array();


    public function shahrestans()
    {
        return $this->hasMany(Shahrestan::class,'PK_Ostan','ID');
    }
}
