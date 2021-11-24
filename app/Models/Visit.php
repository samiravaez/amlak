<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Visit extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class, 'deal_id');
    }

    public function remind_methods()
    {
        return $this->morphToMany(Remind_method::class, 'remindable')->withTimestamps()->withPivot('trash');
    }

    public static function saveFile($file, $report)
    {
        $destinationPath = 'visits/';
        $report_file = date('YmdHis') . "." . $file->getClientOriginalExtension();
        $file->move($destinationPath, $report_file);
        $report->file = "$report_file";
        $report->save();
    }


}
