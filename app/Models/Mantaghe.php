<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Mantaghe extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='tbl_mantaghe';
    protected $primaryKey='ID';
    public $timestamps=false;
    protected $guarded=array();

    public function shahrestan()
    {
        return $this->belongsTo(Shahrestan::class,'PK_Shahrestan','ID');
    }

    public function bakhshs()
    {
        return $this->hasMany(Bakhsh::class,'PK_Mantaghe','ID');
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}
