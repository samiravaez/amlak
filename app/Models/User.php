<?php

namespace App\Models;

use App\Http\Controllers\Admin\AddsController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Morilog\Jalali\Jalalian;
use Maklad\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;
use Venturecraft\Revisionable\RevisionableTrait;

class User extends Authenticatable
{
    use HasFactory;
    use HasRoles;
    use Notifiable;
    use HasApiTokens;
    use RevisionableTrait;

    protected $primaryKey = '_id';
    public static $admin='admin';
    protected $connection = 'mongodb';
    protected $collection = 'users';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password','remember_token',
    ];

    protected $appends=['phone','profile'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */

    public function setPasswordAttribute($value)
    {
        $this->attributes['password']=bcrypt($value);
    }

    public function posts()
    {
        return $this->hasMany(Post::class,'author','_id');
    }

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

    public function crm_requests()
    {
        return $this->hasMany(CRM::class,'expert_id','_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class,'comment_user','_id');
    }

    public function usermetas()
    {
        return $this->hasMany(Usermeta::class,'user_id','_id');
    }

    public function entities()
    {
        return $this->hasMany(Entity::class);
    }

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function getPhoneAttribute()
    {
        $phone=$this->usermetas()->firstWhere('meta_key','phone');
        if ($phone){
            return $phone->meta_value;
        }else{
            return null;
        }
    }

    public function getProfileAttribute()
    {
        $profile=$this->usermetas()->firstWhere('meta_key','user_photo');
        if ($profile){
            $file=File::find($profile->meta_value);
            if($file){
                return $file->url;
            }
            return asset('assets/images/avatar.png');
        }else{
            return asset('assets/images/avatar.png');
        }
    }

    public function expertRegionCrm($state=0)
    {
        //state=0 ->همه مشتری ها
        //state=1 -> همه مشتری های منطقه من
        if($this->can('adds_management')){
            return CRM::orderBy('updated_at','desc');
        }elseif ($this->can('local_adds_management')){
            $crm_query=CRM::select(['crm.id'])
                ->leftJoin('crmmeta', 'crm.id', '=', 'crmmeta.crm_id')
                ->groupBy('crm.id');
            if($state==1) {
                $regions = $this->getRegionAttribute();
                $skills = $this->getSkillAttribute();
                $str = [];
                $params = ['region'];
                if (isset($regions)) {
                    $regions = json_decode($regions, true);
                    $all_regions = false;
                    foreach ($regions as $region) {
                        if (isset($region['mantaghe']) && $region['mantaghe'] > 0) {
                            $str[] = "JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].mantaghe'),?)";
                            $params[] = (string)$region['mantaghe'];
                        } elseif (isset($region['bakhsh']) && $region['bakhsh'] > 0) {
                            $str[] = "JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].bakhsh'),?)";
                            $params[] = (string)$region['bakhsh'];
                        } elseif (isset($region['shahrestan']) && $region['shahrestan'] > 0) {
                            $str[] = "JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].shahrestan'),?)";
                            $params[] = (string)$region['shahrestan'];
                        } elseif (isset($region['ostan'])) {
                            if ($region['ostan'] > 0) {
                                $str[] = "JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].ostan'),?)";
                                $params[] = (string)$region['ostan'];
                            } elseif ($region['ostan'] == 0) {
                                $all_regions = true;
                                break;
                            }
                        }
                    }
                    if (!empty($str)) {
                        $crm_query->havingRaw("sum(case when meta_key = ? and (" . implode(' OR ', $str) . ") then 1 else 0 end) > 0", $params);
                    } elseif ($all_regions) {
                        $crm_query->havingRaw("sum(case when meta_key = ? then 1 else 0 end) > 0", $params);
                    }
                } else {
                    return null;
                }
            }

//            $str=[];
//            $params=[];
//            $all_skills=false;
//            if (isset($skills)) {
//                $skills = json_decode($skills, true);
//                foreach ($skills as $skill) {
//                    if($skill['transaction_id']==0 && $skill['land_type_id']==0){
//                        $all_skills=true;
//                        break;
//                    }elseif ($skill['transaction_id']==0){
//                        $str[]='(sum(case when meta_key = ? and json_search(meta_value,"one",?) is not null then 1 else 0 end) > 0)';
//                        $params=array_merge($params,['land_type',(string)$skill['land_type_id']]);
//                    }elseif ($skill['land_type_id']==0){
//                        $str[]='(sum(case when meta_key = ? and json_search(meta_value,"one",?) is not null then 1 else 0 end) > 0)';
//                        $params=array_merge($params,['transaction',(string)$skill['transaction_id']]);
//                    }else{
//                        $str[]='(sum(case when meta_key = ? and json_search(meta_value,"one",?) is not null then 1 else 0 end) > 0 and sum(case when meta_key = ? and json_search(meta_value,"one",?) is not null then 1 else 0 end) > 0)';
//                        $params=array_merge($params,['land_type',(string)$skill['land_type_id'],'transaction',(string)$skill['transaction_id']]);
//                    }
//                }
//                if(!empty($str)){
//                    $crm_query->havingRaw("(".implode(' OR ',$str).")", $params);
//                }else{
//                    if(!$all_skills)
//                        return null;
//                }
//            }

            $crm=$crm_query->pluck('id')->toArray();
            return CRM::whereIn('id',$crm)->orderBy('updated_at','desc');
        }else{
            return null;
        }
    }

    public function getRegionAttribute()
    {
        $region=$this->usermetas()->firstWhere('meta_key','region');
        if($region)
            return $region->meta_value;
        return null;
    }

    public function getSkillAttribute()
    {
        $skill=$this->usermetas()->firstWhere('meta_key','skill');
        if($skill)
            return $skill->meta_value;
        return null;
    }

    public function favorites()
    {
        return $this->belongsToMany(Post::class, 'favorites','user_id','post_id','id','postId');
    }

    public function actions()
    {
        return $this->morphToMany(Activity::class, 'activable')->withPivot('role','trash');
    }

    public function visits()
    {
        return $this->hasMany(Visit::class);
    }

    public function mantaghes()
    {
        return $this->belongsToMany(Mantaghe::class,'mantaghe_user','mantaghe_id','user_id')->withTimestamps();
    }

    public function offers()
    {
        return $this->hasMany(Offer::class);
    }

    public function timetables()
    {
        return $this->hasMany(Timetable::class);
    }
}
