<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Postmeta extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='postmeta';
    protected $primaryKey='meta_id';
    protected $fillable=['post_id','meta_value','meta_key'];
    public $timestamps=false;
    protected $touches = ['post'];

    public function post()
    {
        return $this->belongsTo(Post::class,'post_id','postId');
    }

}
