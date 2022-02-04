<?php

namespace App\Models;

use App\Casts\DateConverter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Morilog\Jalali\Jalalian;
use Venturecraft\Revisionable\RevisionableTrait;

class Customer extends Model
{
    use HasFactory;
    use RevisionableTrait;
    protected $guard_name = 'api';

    protected $guarded = [''];
    protected $attributes = [
        'trash' => 0
    ];

    protected $casts = ['birth_date' => DateConverter::class, 'marriage_date' => DateConverter::class,
        'spouse_birth_date' => DateConverter::class];


    public function customermetas()
    {
        return $this->hasMany(Customermeta::class);
    }

    public function customer_type()
    {
        return $this->belongsTo(Customer_type::class,'customer_type_id');
    }

    public function entities()
    {
        return $this->belongsToMany(Entity::class)->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function purchase_stage()
    {
        return $this->belongsTo(Purchase_stage::class, 'purchase_stage_id');
    }

    public function customer_state()
    {
        return $this->belongsTo(Customer_state::class, 'customer_state_id');
    }

    public function career()
    {
        return $this->belongsTo(Career::class, 'career_id');
    }

    public function eye_color()
    {
        return $this->belongsTo(Eye_color::class, 'eye_color_id');
    }

    public function eduction_level_id()
    {
        return $this->belongsTo(Education_level::class, 'education_level_id');
    }

    public function addresses()
    {
        return $this->morphMany(Address::class, 'addressable');
    }

    //many to many
    public function actions()
    {
        return $this->morphToMany(Activity::class, 'activable')->withPivot('role','trash');
    }

    public function visits()
    {
        return $this->hasMany(Visit::class);
    }

    public function deals()
    {
        return $this->belongsToMany(Deal::class)->withTimestamps();
    }

    public function offers()
    {
        return $this->hasMany(Offer::class);
    }

    public function consults()
    {
        return $this->hasMany(Consult::class);
    }

    public function children()
    {
        return $this->hasMany(Child::class);
    }

    public function attendant()
    {
        return $this->belongsTo(Attendant::class, 'attendant_id');
    }

    public static function saveFile($file)
    {
        $destinationPath = 'customers/profile';
        $report_file = date('YmdHis') . "." . $file->getClientOriginalExtension();
        $file->move($destinationPath, $report_file);
        return "$report_file";

    }




}

