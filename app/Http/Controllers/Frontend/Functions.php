<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Option;
use App\Models\Post;
use App\Models\Term;
use App\Models\Term_type;

trait Functions
{
    public function isJson($string)
    {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    public function getOption($name)
    {
        $optionItem=Option::firstWhere('name',$name);
        if ($optionItem && $optionItem->value){
            if (!$this->isJson($optionItem->value))
                return $optionItem->value;
            else{
                return json_decode($optionItem->value);
            }
        }
        return false;
    }


}
