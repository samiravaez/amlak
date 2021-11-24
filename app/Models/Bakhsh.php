<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Bakhsh extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='tbl_bakhsh';
    protected $primaryKey='ID';
    public $timestamps=false;
    protected $guarded=array();

    public function mantaghe()
    {
        return $this->belongsTo(Mantaghe::class,'PK_Mantaghe','ID');
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}
