<?php

namespace App\Models;

use App\Http\Controllers\Admin\LandTypeController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Term extends Model
{
    use HasFactory;
    use RevisionableTrait;

    protected $table='terms';
    protected $primaryKey='term_id';
    protected $touches = ['posts'];
    protected $appends=['related','land_types','icon'];

    protected $guarded=array();
    public $timestamps=false;


    public function term_type()
    {
        return $this->belongsTo(Term_type::class,'term_type','term_type_id');
    }

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

    public function crms()
    {
        return $this->belongsToMany(CRM::class);
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent', 'term_id')->orderBy('term_order','ASC');
    }
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent')->orderBy('term_order','ASC');
    }

    public function children_rec()
    {
        return $this->children()->with('children_rec');
    }
    public function parent_rec()
    {
        return $this->parent()->with('parent_rec');
    }

    public function scopeTree($query)
    {
        return $query->orderBy('term_order','ASC')->where('parent',0)->with('children_rec');
    }

    public function scopeFindTerm($query,$str){
        return $query->where('parent',0)->with('children_rec');
    }

    public function termmetas()
    {
        return $this->hasMany(Termmeta::class,'term_id','term_id');
    }

    public function getRelatedFields()
    {
        $relate_fields=$this->termmetas()->firstWhere('meta_key','relate_fields');
        if($relate_fields){
            $output=json_decode($relate_fields->meta_value,true);
            if(isset($output['crm'])){
                $output['crm']=json_decode($output['crm']);
            }
            return $output;
        }
        return null;
    }

    public function getLandTypesList()
    {
        $land_type_list=$this->termmetas()->firstWhere('meta_key','land_type');
        if($land_type_list){
            return json_decode($land_type_list->meta_value);
        }
        return null;
    }

    public function getRelatedAttribute()
    {
        $relate_fields=$this->termmetas()->firstWhere('meta_key','relate_fields');
        if($relate_fields){
            $related=json_decode($relate_fields->meta_value,true);
            if(isset($related['crm'])){
                $related['crm']=json_decode($related['crm']);
            }
            if(isset($related)){
                array_walk($related,function (&$val){
                    if(isset($val['choices']) && !is_array($val['choices'])){
                        $val['choices']=json_decode($val['choices'],true);
                    }
                });
                $related=array_column($related,null,'id');
            }
            return $related;
        }
        return null;
    }

    public function getLandTypesAttribute()
    {
        $land_type_list=$this->termmetas()->firstWhere('meta_key','land_type');
        if($land_type_list){
            $land_type_list=json_decode($land_type_list->meta_value);
            return Term::where('term_type',LandTypeController::getTermTypeId())->whereIn('term_id',$land_type_list)->select(['term_id','term_name'])->get();
        }
        return null;
    }

    public function getIconAttribute()
    {
        $profile=$this->termmetas()->firstWhere('meta_key','icon');
        if ($profile){
            $file=File::find($profile->meta_value);
            if($file){
                return $file->thumbnail_url;
            }
            return null;
        }
        return null;
    }

}
