<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChequeRequest extends FormRequest
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
            'serial_number' => 'nullable|max:255',
            'date' => 'date_format:Y-m-d',
            'bank' => 'nullable|max:255',
            'value' => 'numeric|min:2|max:50',
            'photo' => 'max:255',
        ];
    }
}
