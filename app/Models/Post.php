<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Classes\Region;
use Venturecraft\Revisionable\RevisionableTrait;

class Post extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table = 'posts';
    protected $primaryKey = 'postId';

    protected $appends=['mainImg'];

    protected $guarded = array();

    public function getStatusShowAttribute()
    {
        $status=$this->attributes['status'];
        switch ($status){
            case '1':
                return '<span class="fas fa-upload mr-1 text-dark"></span>';
//                return '<span class="badge badge-success d-inline-block py-2 px-1 w-100">انتشار</span>';
                break;
            default:
                return '<span class="fab fa-firstdraft mr-1 text-muted"></span>';
//                return '<span class="badge badge-danger d-inline-block py-2 px-1 w-100">پیش نویس</span>';
                break;
        }
    }

    public function getMainImgAttribute()
    {
        $profile=$this->attributes['image'];
        if ($profile){
            $file=File::find($profile);
            if($file){
                return $file->thumbnail_url;
            }else{
                return asset('assets/images/adds_default.jpg');
            }
        }else{
            return asset('assets/images/adds_default.jpg');
        }
    }

    public function terms()
    {
        return $this->belongsToMany(Term::class, 'post_term');
    }

    public function postmetas()
    {
        return $this->hasMany(Postmeta::class,'post_id','postId');
    }

    public function offers()
    {
        return $this->hasMany(Offer::class);
    }

    public function postConfirm()
    {
        $confirm=$this->hasMany(Postmeta::class,'post_id','postId')->firstWhere('meta_key','confirm');
        if ($confirm){
            return $confirm->meta_value;
        }
        return 0;
    }

    public function confirmIconClass(){
        $confirm=$this->postConfirm();
        switch ($confirm){
            case 1:
                $confirmIconClass='reject-add';//reject
                break;
            case 2:
                $confirmIconClass='confirm-add';//confirm
                break;
            default:
                $confirmIconClass='waiting-confirm';//not-review
                break;
        }
        return $confirmIconClass;
    }

    public function comments()
    {
        return $this->hasMany(Comment::class,'comment_post','postId');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'author','id');
    }

    public function getBuildYearAttribute()
    {
        $build_year_obj=$this->postmetas()->firstWhere('meta_key','build_year');
        if ($build_year_obj){
            $build_year=$build_year_obj->meta_value;
            if((int)$build_year>=1370)
                return $build_year;
            else
                return 'قبل از 1370';
        }else{
            return null;
        }
    }

    public function getRegionAttribute()
    {
        $region=$this->postmetas()->firstWhere('meta_key','region');
        if ($region){
            return new Region(json_decode($region->meta_value,true));
        }else{
            return null;
        }
    }

    public function getLandTypeAttribute()
    {
        $land_type=$this->postmetas()->firstWhere('meta_key','land_type');
        if ($land_type){
            if ($term=Term::find($land_type->meta_value)){
                return $term;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    public function getTransactionAttribute()
    {
        $transaction=$this->postmetas()->firstWhere('meta_key','transaction');
        if ($transaction){
            if ($term=Term::find($transaction->meta_value)){
                return $term;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    public function getExpertsAttribute()
    {
        $region=$this->getRegionAttribute();
        $land_type=$this->getLandTypeAttribute();
        $transaction=$this->getTransactionAttribute();
        if (isset($region) && isset($land_type) && isset($transaction)){
            return $region->getExperts($land_type->term_id,$transaction->term_id);
        }else{
            return null;
        }
    }

    public function getRejectReasonAttribute()
    {
        $reject_reason=$this->postmetas()->firstWhere('meta_key','reject_reason');
        if ($reject_reason && $this->postConfirm()==1){
            return json_decode($reject_reason->meta_value,true);
        }else{
            return null;
        }
    }

    public function getTransactionFieldAttribute()
    {
        $transaction=$this->getTransactionAttribute();
        $html='';
        $units=array(
            'price'=>'تومان'
        );
        if(isset($transaction)){
            $relate_fields_obj=$transaction->termmetas()->firstWhere('meta_key','relate_fields');
            if($relate_fields_obj){
                $relate_fields=json_decode($relate_fields_obj->meta_value,true);
                if($relate_fields){
                    $html='<ul class="transaction-fields-list">';
                    foreach ($relate_fields as $field){
                        if($this->postmetas()->firstWhere('meta_key',$field['id'])){
                            $label=$field['label'];
                            $value=$this->postmetas()->firstWhere('meta_key',$field['id'])->meta_value;
                            $html.='<li><span class="far fa-circle"></span>'.$label.": ".(($field['type']=='number')?number_format($value):$value).' '.((isset($field['unit']) && isset($units[$field['unit']]))?$units[$field['unit']]:'').'</li>';
                        }
                    }
                    $html.='</ul>';
                }
            }
        }
        return $html;
    }

    public function getLandTypeFieldAttribute()
    {
        $land_type=$this->getLandTypeAttribute();
        $html='';
        $units=array(
            'price'=>'تومان',
            'area'=>'متر مربع',
            'length'=>'متر'
        );
        if(isset($land_type)){
            $relate_fields_obj=$land_type->termmetas()->firstWhere('meta_key','relate_fields');
            if($relate_fields_obj){
                $relate_fields=json_decode($relate_fields_obj->meta_value,true);
                if($relate_fields){
                    $html='<ul class="landtype-fields-list">';
                    foreach ($relate_fields as $field){
                        $value='';
                        if($this->postmetas()->firstWhere('meta_key',$field['id'])){
                            $label=$field['label'];
                            $value=$this->postmetas()->firstWhere('meta_key',$field['id'])->meta_value;
                            if(isset($field['choices'])){
                                $choices=$field['choices'];
                                if(!is_array($choices)){
                                    $choices=json_decode($field['choices'],true);
                                }
                                if(isset($choices[$value])){
                                    $value=$choices[$value];
                                }
                            }
                            if($field['type']=='number'){
                                $value=number_format($value);
                            }
                            if($field['type']=="on-off"){
                                if($value=="on"){
                                    $value='<span class="fas fa-check"></span>';
                                }else{
                                    $value='<span class="fas fa-times"></span>';
                                }
                            }
                            $html.='<li><span class="far fa-circle"></span>'.$label.": ".$value.' '.((isset($field['unit']) && isset($units[$field['unit']]))?$units[$field['unit']]:'').'</li>';
                        }
                    }
                    $html.='</ul>';
                }
            }
        }
        return $html;
    }

    public function getAddPlaceAttribute(){
        $region_obj=$this->getRegionAttribute();
        if(isset($region_obj)){
            $region=array();
            $bakhsh=$region_obj->getBakhsh();
            $mantaghe=$region_obj->getMantaghe();
            $shahrestan=$region_obj->getShahrestan();
            $ostan=$region_obj->getOstan();
            if (isset($ostan)){
                $region['استان']=$ostan;
            }
            if (isset($shahrestan)){
                $region['شهرستان']=$shahrestan;
            }
            if (isset($mantaghe)){
                $region['منطقه']=$mantaghe;
            }
            if (isset($bakhsh)){
                $region['بخش']=$bakhsh;
            }
            if(!empty($region)){
                return implode('- ',$region);
            }else{
                return '';
            }
        }else{
            return '';
        }
    }

    public function getSpecialAttribute()
    {
        $special=$this->postmetas()->firstWhere('meta_key','special');
        if ($special){
            $special_value=$special->meta_value;
            if($special_value=='on'){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    public function getPlaceAttribute()
    {
        return $this->postmetas()->whereIn('meta_key',['phone','address'])->pluck('meta_value','meta_key')->toArray();
    }

    public function visits()
    {
        return $this->hasMany(Visit::class);
    }

    public function timetables()
    {
        return $this->hasMany(Timetable::class);
    }
}
