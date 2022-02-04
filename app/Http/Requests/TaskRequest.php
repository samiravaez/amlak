<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
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
//            'start_time' => 'nullable|date_format:Y-m-d H:i:s',
//            'end_time' => 'nullable',
//            'reminder_time' => 'nullable',
//            'description' => 'nullable|max:2000',
//            'progress_rate' => 'nullable|integer|between:0,100',
//            'cost' => 'nullable|numeric|min:2|max:50',
//            'duration' => 'nullable|numeric|min:2|max:50',
        ];
    }
}
