<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Offer extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function user()
    {
        return $this->belongsTo(Customer::class, 'user_id');
    }

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    public static function saveFile($file, $report)
    {
        $destinationPath = 'offers/';
        $report_file = date('YmdHis') . "." . $file->getClientOriginalExtension();
        $file->move($destinationPath, $report_file);
        $report->file = "$report_file";
        $report->save();
    }

    public function getCreatedAtAttribute($value)
    {
      $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d H:i:s') : null;
    }
}
