<?php
function nicePrint($var){
    echo '<pre>';
    var_dump($var);
    echo '</pre>';
}

define('UPLOAD_ROOT','http://localhost/amlak/storage/images/');
define('ROOT','http://localhost/amlak');

function filter_by_value($array, $index, $value)
{
    $newarray = array();
    if (is_array($array) && count($array) > 0) {
        if (!is_array($value)){
            foreach (array_keys($array) as $key) {
                if(isset($array[$key][$index])){
                    $temp[$key] = $array[$key][$index];
                    if ($temp[$key] == $value) {
                        $newarray[$key] = $array[$key];
                    }
                }
            }
        }else{
            foreach (array_keys($array) as $key) {
                if(isset($array[$key][$index])){
                    $temp[$key] = $array[$key][$index];
                    if (in_array($temp[$key], $value)) {
                        $newarray[$key] = $array[$key];
                    }
                }
            }
        }

    }
    return $newarray;
}

function filter_inputs(&$array,$searchStr=''){
    $output=array();
    if (count($array)>0){
        foreach ($array as $index=>$value){
            if (has_search_str($array, $index, $searchStr)){
                $output[]=$value;
            }
        }
    }
    $array=$output;
}

function has_search_str($array,$index,$searchStr=''){
    if (preg_match("/.*$searchStr.*/",$array[$index]['term_name'])){
        return true;
    }else{
        $children=array();
        cat_children($array, $index, $children);
        foreach ($children as $child){
            if (preg_match("/.*$searchStr.*/",$array[$child]['term_name'])){
                return true;
            }
        }
        return false;
    }
    return false;
}

function cat_children($array,$index,&$children){
    $term_id=$array[$index]['term_id'];
    for ($i=$index;$i<count($array);$i++){
        if ($array[$i]['parent']==$term_id){
            $children[]=$i;
            cat_children($array,$i,$children);
        }
    }
}

//slug function
function slug($text){
    $text=str_replace(" ", "-", $text);
    return $text;
}

function getImagesList()
{
    $response=array();
    $images = glob(storage_path('images') . '/*.{jpg,jpeg,png,gif}' ,GLOB_BRACE);
    foreach ($images as $image){
        $response[]=basename($image);
    }
    return $response;
}

function str_lreplace($search, $replace, $subject)
{
    $pos = strrpos($subject, $search);

    if($pos !== false)
    {
        $subject = substr_replace($subject, $replace, $pos, strlen($search));
    }

    return $subject;
}

function convert_filesize($bytes, $decimals = 2){
    $size = array('B','kB','MB','GB','TB','PB','EB','ZB','YB');
    $factor = floor((strlen($bytes) - 1) / 3);
    return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$size[$factor];
}

function array_sort($array, $on, $order=SORT_ASC)
{
    $new_array = array();
    $sortable_array = array();

    if (count($array) > 0) {
        foreach ($array as $k => $v) {
            if (is_array($v)) {
                foreach ($v as $k2 => $v2) {
                    if ($k2 == $on) {
                        $sortable_array[$k] = $v2;
                    }
                }
            } else {
                $sortable_array[$k] = $v;
            }
        }

        switch ($order) {
            case SORT_ASC:
                asort($sortable_array);
                break;
            case SORT_DESC:
                arsort($sortable_array);
                break;
        }

        foreach ($sortable_array as $k => $v) {
            $new_array[$k] = $array[$k];
        }
    }

    return $new_array;
}

function create_random($digits){
    return rand(pow(10, $digits-1), pow(10, $digits)-1);
}

function filter_user_jobs(&$user_jobs){
    $zero_transactions=array();
    $zero_land_types=array();
    foreach ($user_jobs as  $index=>$user_job){
        if($user_job['transaction_id']==0){
            if($user_job['land_type_id']==0){
                $user_jobs=array($user_job);
                return false;
            }
            $zero_transactions[$index]=$user_job;
        }
        if($user_job['land_type_id']==0){
            $zero_land_types[$index]=$user_job;
        }
    }

    foreach ($zero_transactions as $zero_index=>$zero_transaction){
        $user_jobs=array_filter($user_jobs,function ($value,$index) use($zero_index,$zero_transaction){
            return $zero_index==$index || $zero_transaction['land_type_id']!=$value['land_type_id'];
        }, ARRAY_FILTER_USE_BOTH);
    }

    foreach ($zero_land_types as $zero_index=>$zero_land_type){
        $user_jobs=array_filter($user_jobs,function ($value,$index) use($zero_index,$zero_land_type){
            return $zero_index==$index || $zero_land_type['transaction_id']!=$value['transaction_id'];
        }, ARRAY_FILTER_USE_BOTH);
    }

}

function filter_user_regions(&$user_regions){
    $all_ostans=array();
    $all_shahrestans=array();
    $all_manategh=array();
    $all_bakhshs=array();
    foreach ($user_regions as $index=>$region){
        if(isset($region['ostan']) && $region['ostan']==0){
            $all_ostans[$index]=$region;
        }elseif (isset($region['shahrestan']) && $region['shahrestan']==0){
            $all_shahrestans[$index]=$region;
        } elseif (isset($region['mantaghe']) && $region['mantaghe']==0){
            $all_manategh[$index]=$region;
        }elseif (isset($region['bakhsh']) && $region['bakhsh']==0){
            $all_bakhshs[$index]=$region;
        }
    }

    foreach ($all_ostans as $all_index=>$all_value){
        $user_regions=array_filter($user_regions,function ($value,$index) use($all_index,$all_value){
            return $all_index==$index;
        }, ARRAY_FILTER_USE_BOTH);
    }

    foreach ($all_shahrestans as $all_index=>$all_value){
        $user_regions=array_filter($user_regions,function ($value,$index) use($all_index,$all_value){
            return $all_index==$index || (isset($value['ostan']) && $all_value['ostan']!=$value['ostan']);
        }, ARRAY_FILTER_USE_BOTH);
    }

    foreach ($all_manategh as $all_index=>$all_value){
        $user_regions=array_filter($user_regions,function ($value,$index) use($all_index,$all_value){
            return $all_index==$index || (isset($value['shahrestan']) && $all_value['shahrestan']!=$value['shahrestan']);
        }, ARRAY_FILTER_USE_BOTH);
    }

    foreach ($all_bakhshs as $all_index=>$all_value){
        $user_regions=array_filter($user_regions,function ($value,$index) use($all_index,$all_value){
            return $all_index==$index || (isset($value['mantaghe']) && $all_value['mantaghe']!=$value['mantaghe']);
        }, ARRAY_FILTER_USE_BOTH);
    }

    array_walk($user_regions,function (&$val){
        array_walk($val,function (&$inner){
            $inner=(int)$inner;
        });
    });
}

function show_related_fields($related_fields,$customer){
    $units=array(
        'length'=>'متر',
        'area'=>'متر مربع',
        'price'=>'تومان',
    );
    $results=array();
    foreach ($related_fields as $field){
        if(isset($val))
            unset($val);
        $label=$field['label'];
        $value=$customer->getMeta($field['id']);
        if(isset($field['choices']) && !is_array($field['choices'])){
            $field['choices']=json_decode($field['choices'],true);
            $options=$field['choices'];

        }

        if(is_array($value) && isset($field['type']) && $field['type']=='number'){
            if(isset($value['from']) || isset($value['to'])){
                if(isset($value['from']) && isset($value['to'])){
                    $val='از '. number_format($value['from']).' تا '. number_format($value['to']);
                }elseif(isset($value['from'])){
                    $val='بیشتر از '.number_format($value['from']);
                } elseif(isset($value['to'])){
                    $val='تا سقف'. number_format($value['to']);
                }
            }
        }elseif(is_array($value) && isset($field['type']) && $field['type']=='date'){
            if(isset($value['from']) || isset($value['to'])){
                if(isset($value['from']) && isset($value['to'])){
                    $val=$value['from'].''. $value['to'];
                }elseif(isset($value['from'])){
                    $val='از '.$value['from'];
                } elseif(isset($value['to'])){
                    $val='قبل از '. $value['to'];
                }
            }

        }elseif(isset($field['type']) && $field['type']=='select'){
            if(isset($options) && isset($value)){
                $val=$options[$value];
            }
        }else{
            if(isset($value) && !is_array($value))
                $val=$value;
        }

        $exp='---';
        if(isset($val)){
            $exp=$val.((isset($field['unit']) && isset($units[$field['unit']]))?(' '.$units[$field['unit']]):'');
        }
        $results[]=$label.': '.$exp;

    }
    return $results;
}
