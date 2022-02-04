<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Shahrestan extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='tbl_shahrestan';
    protected $primaryKey='ID';
    public $timestamps=false;
    protected $guarded=array();

    public function ostan()
    {
        return $this->belongsTo(Ostan::class,'PK_Ostan','ID');
    }

    public function manategh()
    {
        return $this->hasMany(Mantaghe::class,'PK_Shahrestan','ID');
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}
