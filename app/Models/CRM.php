<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Classes\Region;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class CRM extends Model
{
    use HasFactory;
    use SoftDeletes;
    use RevisionableTrait;
    protected $table='crm';
    protected $primaryKey='id';

    protected $guarded=array();

    public function crmmetas()
    {
        return $this->hasMany(Crmmeta::class,'crm_id','id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'customer_id','id');
    }

    public function expert()
    {
        return $this->belongsTo(User::class,'expert_id','id');
    }

    public function terms()
    {
        return $this->belongsToMany(Term::class, 'crm_term','crm_id','term_term_id');
    }

    public function getRegionAttribute()
    {
        $regions_obj = $this->crmmetas()->firstWhere('meta_key', 'region');
        if ($regions_obj) {
            $regions = json_decode($regions_obj->meta_value, true);
            array_walk($regions, function (&$region) {
                array_walk($region, function (&$val, $index) {
                    switch ($index) {
                        case 'ostan':
                            $val = Ostan::find($val);
                            break;
                        case 'shahrestan':
                            $val = Shahrestan::find($val);
                            break;
                        case 'mantaghe':
                            $val = Mantaghe::find($val);
                            break;
                        case 'bakhsh':
                            $val = Bakhsh::find($val);
                            break;
                    }
                });
            });
            if (!empty($regions))
                return $regions;
            return null;
        }
        return null;
    }

    public function getLandTypesAttribute()
    {
        $land_type=$this->crmmetas()->firstWhere('meta_key','land_type');
        if ($land_type){
            $land_types=json_decode($land_type->meta_value,true);
            $terms=Term::whereIn('term_id',$land_types)->get();
            return $terms;
        }else{
            return null;
        }
    }

    public function getTransactionsAttribute()
    {
        $transaction=$this->crmmetas()->firstWhere('meta_key','transaction');
        if ($transaction){
            $transactions=json_decode($transaction->meta_value,true);
            $terms=Term::whereIn('term_id',$transactions)->get();
            return $terms;
        }else{
            return null;
        }
    }

    public function getOstansAttribute(){
        $ostans_obj=$this->crmmetas()->firstWhere('meta_key','ostan');
        $ostans_array=array();
        if (isset($ostans_obj)){
            $ostans=json_decode($ostans_obj->meta_value);
            foreach ($ostans as $ostan){
                $loop_ostan=Ostan::find($ostan);
                if($loop_ostan){
                    $ostans_array[]=$loop_ostan;
                }
            }
        }
        return $ostans_array;
    }
    public function getShahrestansAttribute(){
        $shahrestans_obj=$this->crmmetas()->firstWhere('meta_key','shahrestan');
        $shahrestans_array=array();
        if ($shahrestans_obj){
            $shahrestans=json_decode($shahrestans_obj->meta_value);
            foreach ($shahrestans as $shahrestan){
                $loop_shahrestan=Shahrestan::find($shahrestan);
                if($loop_shahrestan){
                    $shahrestans_array[]=$loop_shahrestan;
                }
            }
        }
        return $shahrestans_array;
    }
    public function getManateghAttribute(){
        $manategh_obj=$this->crmmetas()->firstWhere('meta_key','mantaghe');
        $manategh_array=array();
        if ($manategh_obj){
            $manategh=json_decode($manategh_obj->meta_value);
            foreach ($manategh as $mantaghe){
                $loop_mantaghe=Mantaghe::find($mantaghe);
                if($loop_mantaghe){
                    $manategh_array[]=$loop_mantaghe;
                }
            }
        }
        return $manategh_array;
    }
    public function getBakhshsAttribute(){
        $bakhsh_obj=$this->crmmetas()->firstWhere('meta_key','bakhsh');
        $bakhshs_array=array();
        if ($bakhsh_obj){
            $bakhshs=json_decode($bakhsh_obj->meta_value);
            foreach ($bakhshs as $bakhsh){
                $loop_bakhsh=Bakhsh::find($bakhsh);
                if($loop_bakhsh){
                    $bakhshs_array[]=$loop_bakhsh;
                }
            }
        }
        return $bakhshs_array;
    }

    public function getMeta($meta_key)
    {
        $meta_obj=$this->crmmetas()->firstWhere('meta_key',$meta_key);
        if($meta_obj){
            if($meta_obj->isJson){
                return json_decode($meta_obj->meta_value,true);
            }else{
                return $meta_obj->meta_value;
            }
        }else{
            return null;
        }
    }

}
