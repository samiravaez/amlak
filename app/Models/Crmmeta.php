<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class Crmmeta extends Model
{
    use HasFactory;
    use SoftDeletes;
    use RevisionableTrait;

    protected $table='crmmeta';
    protected $primaryKey='id';
    protected $guarded=array();
    public $timestamps=false;
    protected $touches = ['crm'];

    public function crm()
    {
        return $this->belongsTo(CRM::class,'crm_id','id');
    }
}
