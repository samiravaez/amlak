<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class RelationTranslator implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return mixed
     */
    public function get($model, string $key, $value, array $attributes)
    {
        switch($value) {
            case('Task'):
                $value = 'وظیفه';
                break;
            case('Meeting'):
                $value = 'جلسه';
                break;
            case('Call'):
                $value = 'تماس';
                break;
            case('Text_message'):
                $value = 'پیامک';
                break;
            case('Email'):
                $value = 'ایمیل';
                break;
        }
        return $value;
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return mixed
     */
    public function set($model, string $key, $value, array $attributes)
    {
        return $value;
    }
}
