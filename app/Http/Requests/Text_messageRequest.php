<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Text_messageRequest extends FormRequest
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
//            'send_time' => 'date_format:Y-m-d H:i:s',
//            'reminder_time' => 'date_format:Y-m-d H:i:s',
            'body' => 'nullable|max:2000',
        ];
    }
}
