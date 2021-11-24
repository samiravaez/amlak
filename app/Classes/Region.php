<?php
namespace App\Classes;

use App\Models\Bakhsh;
use App\Models\Mantaghe;
use App\Models\Ostan;
use App\Models\Shahrestan;
use App\Models\User;
use App\Models\User_adds_region;

class Region{
    private $region;
    private $ostan;
    private $shahrestan;
    private $mantaghe;
    private $bakhsh;

    /**
     * Region constructor.
     * @param $region
     */
    public function __construct(array $region)
    {
        $this->region = $region;
        $this->ostan = isset($region['ostan'])?$region['ostan']:null;
        $this->shahrestan = isset($region['shahrestan'])?$region['shahrestan']:null;
        $this->mantaghe = isset($region['mantaghe'])?$region['mantaghe']:null;
        $this->bakhsh = isset($region['bakhsh'])?$region['bakhsh']:null;
    }

    public function getExperts($land_type=null,$transaction=null)
    {
        $users=User::select(['users.id'])
            ->leftJoin('usermeta', 'users.id', '=', 'usermeta.user_id')
            ->groupBy('users.id');
        if (isset($land_type) && isset($transaction)){
//            $users->havingRaw("sum(case when meta_key = ? and JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].land_type_id'),?) and JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].transaction_id'),?) then 1 else 0 end) > 0", ['skill',(string)$land_type,(string)$transaction]);
            $users->havingRaw("sum(case when meta_key = ? and (meta_value like ? or meta_value like ? or meta_value like ? or meta_value like ?)  then 1 else 0 end) > 0", ['skill','%"transaction_id":'.(int)$transaction.',"land_type_id":'.(int)$land_type.'}%','%"transaction_id":0,"land_type_id":'.(int)$land_type.'}%','%"transaction_id":'.(int)$transaction.',"land_type_id":0}%','%"transaction_id":0,"land_type_id":0}%']);
        }

        $params=["region"];
        $str=[];
        $str[]="meta_value like ?";
        $params=array_merge($params,['%"ostan":0}%']);
        if(isset($this->ostan)){
            $str[]="meta_value like ? or meta_value like ?";
            $params=array_merge($params,['%"ostan":'.(int)$this->ostan.'}%','%"ostan":'.(int)$this->ostan.',"shahrestan":0}%']);
//            $str[]="JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].ostan'),?)";
//            $params[]=(string)$this->ostan;
        }
        if(isset($this->shahrestan)){
            $str[]="meta_value like ? or meta_value like ?";
            $params=array_merge($params,['%"shahrestan":'.(int)$this->shahrestan.'}%','%"shahrestan":'.(int)$this->shahrestan.',"mantaghe":0}%']);
//            $str[]="JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].shahrestan'),?)";
//            $params[]=(string)$this->shahrestan;
        }
        if(isset($this->mantaghe)){
            $str[]="meta_value like ? or meta_value like ?";
            $params=array_merge($params,['%"mantaghe":'.(int)$this->mantaghe.'}%','%"mantaghe":'.(int)$this->mantaghe.',"bakhsh":0}%']);
//            $str[]="JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].mantaghe'),?)";
//            $params[]=(string)$this->mantaghe;
        }
        if(isset($this->bakhsh)){
            $str[]="meta_value like ?";
            $params=array_merge($params,['%"bakhsh":'.(int)$this->bakhsh.'}%']);
//            $str[]="JSON_CONTAINS(JSON_EXTRACT(meta_value,'$[*].bakhsh'),?)";
//            $params[]=(string)$this->bakhsh;
        }
        if(!empty($str))
            $users->havingRaw("sum(case when meta_key = ? and (".implode(' OR ',$str).") then 1 else 0 end) > 0", $params);

//        dd(vsprintf(str_replace('?', '%s', $users->toSql()), collect($users->getBindings())->map(function ($binding) {
//            return is_numeric($binding) ? $binding : "'{$binding}'";
//        })->toArray()));
//        dd($users->get());
        $userIds=$users->pluck('id')->toArray();
        return User::role('adds-expert')->whereIn('id',$userIds)->select(['id','name','email'])->get();

    }

    /**
     * @return mixed|null
     */
    public function getOstan()
    {
        if(isset($this->ostan)){
            $ostan=Ostan::find($this->ostan);
            if ($ostan){
                return $ostan->Title;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    /**
     * @return mixed|null
     */
    public function getShahrestan()
    {
        if(isset($this->shahrestan)){
            $shahrestan=Shahrestan::find($this->shahrestan);
            if ($shahrestan){
                return $shahrestan->Title;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    /**
     * @return mixed
     */
    public function getMantaghe()
    {
        if(isset($this->mantaghe)){
            $mantaghe=Mantaghe::find($this->mantaghe);
            if ($mantaghe){
                return $mantaghe->Title;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    /**
     * @return mixed|null
     */
    public function getBakhsh()
    {
        if(isset($this->bakhsh)){
            $bakhsh=Bakhsh::find($this->bakhsh);
            if ($bakhsh){
                return $bakhsh->Title;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    /**
     * @return array
     */
    public function getRegion(): array
    {
        return $this->region;
    }

}
