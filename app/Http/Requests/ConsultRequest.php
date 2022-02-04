<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConsultRequest extends FormRequest
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
            'customer_id' => 'exists:customers,id',
            'initial_consult_time' => 'date_format:Y-m-d H:i:s',
            'initial_consult_description' => 'nullable|max:2000',
            'initial_consult_file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
            'trust_consult_time' => 'date_format:Y-m-d H:i:s',
            'trust_consult_description' => 'nullable|max:2000',
            'trust_consult_file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
            'offer_consult_time' => 'date_format:Y-m-d H:i:s',
            'offer_consult_description' => 'nullable|max:2000',
            'offer_consult_file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
            'service_consult_time' => 'date_format:Y-m-d H:i:s',
            'service_consult_description' => 'nullable|max:2000',
            'service_consult_file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
            'choice_consult_time' => 'date_format:Y-m-d H:i:s',
            'choice_consult_description' => 'nullable|max:2000',
            'choice_consult_file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',


        ];
    }
}
