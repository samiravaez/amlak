<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nette\SmartObject;
use Venturecraft\Revisionable\RevisionableTrait;

class Comment extends Model
{
    use HasFactory;
    use SoftDeletes;
    use RevisionableTrait;

    protected $attributes = [
        'trash' => '0'
    ];
    protected $table = 'comments';
    protected $primaryKey = 'comment_id';

    const UPDATED_AT = null;

    protected $guarded = array();

    public function post()
    {
        return $this->belongsTo(Post::class,'comment_post','postId');
    }

    public function user() {
        return $this->belongsTo(User::class,'comment_user','id');
    }

    public function getStatusShowAttribute()
    {
        $comment_status=$this->attributes['comment_status'];
        switch ($comment_status){
            case '1':
                return '<span class="badge badge-success d-inline-block py-2 px-1 w-100">انتشار</span>';
                break;
            default:
                return '<span class="badge badge-danger d-inline-block py-2 px-1 w-100">پیش نویس</span>';
                break;
        }
    }

}
