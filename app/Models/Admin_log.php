<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Admin_log extends Model
{
    use HasFactory;
    use RevisionableTrait;



    protected $fillable = ['admin_id','type','model_name','record_id','old_value',
        'new_value','message','user_agent', 'ip','details'] ;

    public static function createAdminLog($admin_id,$type,$model_name,$record_id,$old_value,$new_value,$message,$details=null){

        $user = User::findOrFail($admin_id);
        Admin_log::create([
            'admin_id' => $user->id,
            'type' => $type,
            'model_name' => 'App\\Models\\'.$model_name,
            'record_id' => $record_id,
            'old_value'=> $old_value,
            'new_value'=> $new_value,
            'message' => $message ,
            'user_agent' => request()->userAgent(),
            'ip' => request()->ip() ,
            'details' => $details
        ]);
    }
}
