<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmailRequest extends FormRequest
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
            'send_time' => 'date_format:Y-m-d H:i:s',
            'reminder_time' => 'date_format:Y-m-d H:i:s',
            'body' => 'nullable|max:2000',
            'file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
        ];
    }
}
