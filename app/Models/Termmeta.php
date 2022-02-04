<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Termmeta extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='termmeta';
    protected $primaryKey='meta_id';
    protected $guarded=array();
    public $timestamps=false;

    public function term()
    {
        return $this->belongsTo(Term::class,'term_id','term_id');
    }

}
