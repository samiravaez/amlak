<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MeetingRequest extends FormRequest
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
            'start_time' => 'date_format:Y-m-d H:i:s',
            'end_time' => 'date_format:Y-m-d H:i:s',
            'reminder_time' => 'date_format:Y-m-d H:i:s',
            'progress_rate' => 'integer|between:0,100',
            'cost' => 'numeric|min:2|max:50',
            'duration' => 'numeric|min:2|max:50',
            'description' => 'nullable|max:2000',
            'file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
        ];
    }
}
