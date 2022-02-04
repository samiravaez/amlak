<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Address extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $guarded = [''];
    protected $attributes = [
        'trash' => '0'
    ];
    public function addressable()
    {
        return $this->morphTo();
    }

    public function mantaghes()
    {
        return $this->belongsTo(Mantaghe::class, 'mantaghe_id');
    }
    public function bakhshs()
    {
        return $this->belongsTo(Bakhsh::class, 'bakhsh_id');
    }
    public function shahrestans()
    {
        return $this->belongsTo(Shahrestan::class, 'shahrestan_id');
    }
}
