<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Usermeta extends Model
{
    use HasFactory;
    use RevisionableTrait;
    protected $table='usermeta';
    protected $primaryKey='meta_id';
    protected $fillable=['user_id','meta_key','meta_value'];
    public $timestamps=false;

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
}
