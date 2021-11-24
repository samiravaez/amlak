<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class User_adds_region extends Model
{
    use HasFactory;
    use RevisionableTrait;
    protected $table='user_adds_regions';
    protected $guarded=array();
    public $timestamps=false;

    const region_code=array(
        1=>'App\Models\Ostan',
        2=>'App\Models\Shahrestan',
        3=>'App\Models\Mantaghe',
        4=>'App\Models\Bakhsh',
    );

    public function getRegionAttribute(){
        $region_type=$this->attributes['region_type'];
        if (isset(static::region_code[$region_type])){
            $model=static::region_code[$region_type];
            $region=$model::find($this->attributes['region_id']);
            if ($region){
                return $region;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

}
