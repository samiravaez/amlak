<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CallRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
//            'start_time' => 'date_format:Y-m-d H:i:s',
//            'progress_rate' => 'integer|between:0,100',
//            'reminder_time' => 'date_format:Y-m-d H:i:s',
//            'description' => 'nullable|max:2000',
//            'cost' => 'numeric|min:2|max:50',
//            'duration' => 'numeric|min:2|max:50',
        ];
    }
}
