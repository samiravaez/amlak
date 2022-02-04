<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Term_type extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='term_types';
    protected $primaryKey='term_type_id';

    protected $guarded=array();
    public $timestamps=false;

    public function terms()
    {
        return $this->hasMany(Term::class,'term_type','term_type_id');
    }

}
