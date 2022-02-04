<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DealRequest extends FormRequest
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
            'topic' => 'max:255',
            'contract_number' => 'max:255',
            'start_date' => 'date_format:Y-m-d',
            'end_date' => 'date_format:Y-m-d',
            'price' => 'numeric|min:2|max:50',
            'rent' => 'numeric|min:2|max:50',
            'prepayment' => 'numeric|min:2|max:50',
            'failure_reason' => 'nullable|max:2000',
            'description' => 'nullable|max:2000',
            'file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
        ];
    }
}
