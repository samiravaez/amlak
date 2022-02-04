<?php

namespace App\Casts;

use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use MongoDB\BSON\UTCDateTime;
use Morilog\Jalali\Jalalian;

class DateConverter implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param string $key
     * @param mixed $value
     * @param array $attributes
     * @return mixed
     */
    public function get($model, string $key, $value, array $attributes)
    {
        if($value){
        $value = $value->toDateTime();
        $value = new Carbon($value);
        return $value ?
            Jalalian::fromCarbon($value)->format('Y/m/d H:i:s') : null;
            }
        return $value;
        }

    /**
     * Prepare the given value for storage.
     *
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param string $key
     * @param mixed $value
     * @param array $attributes
     * @return mixed
     */
    public function set($model, string $key, $value, array $attributes)
    {
        return ($value ? new UTCDateTime(Jalalian::fromFormat('Y/m/d H:i:s', $value)->toCarbon()) : null);
    }
}
