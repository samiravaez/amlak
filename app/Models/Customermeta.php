<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class Customermeta extends Model
{
    use HasFactory;
    use SoftDeletes;
    use RevisionableTrait;

    protected $fillable = ['name','value','customer_id'];
    public function customer()
    {
       return $this->belongsTo(Customer::class,'customer_id');
    }

}
