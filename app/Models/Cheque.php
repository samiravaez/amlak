<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Cheque extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $attributes = [
        'trash' => '0'
    ];
    protected $guarded = [''];

    public function getDateAttribute($value)
    {
        $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d') : null;
    }

    public function setDateAttribute($value)
    {
        $this->attributes['date'] = $value ?
            Jalalian::fromFormat('Y-m-d H:i:s', $value)->toCarbon() : null;
    }


    public static function saveFile($file, $report)
    {
        $destinationPath = 'visit_reports/';
        $report_file = date('YmdHis') . "." . $file->getClientOriginalExtension();
        $file->move($destinationPath, $report_file);
        $report->file = "$report_file";
        $report->save();
    }
}

