<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EntityRequest extends FormRequest
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
            'name' => 'max:255|required',
            'mobile_unique' => 'unique:customers,mobile_unique,' . $this->id,
            'id_number' => 'max:255',
            'creator_id' => 'nullable|exists:users,id',
            'industry_id' => 'nullable|exists:industries,id',
            'phone' => 'max:11|regex:/(0)[0-9]{10}/',
            'launch_date' => 'date_format:Y-m-d H:i:s',
            'staff_count' => 'integer|between:0,30',
            'economic_code' => 'nullable|max:255',
            'registration_number' => 'nullable|max:255',
            'description' => 'nullable|max:2000',
            'website' => 'nullable|max:255',
            'fund_value'=> 'numeric|min:2|max:50',
            'mobile_number' => 'max:11|regex:/(09)[0-9]{9}/',
            'monthly_income' => 'numeric|min:2|max:50',
            'fax' => 'nullable|max:255',
            'weekly_customers_count' => 'integer|min:2|max:50',
            'business_card' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
        ];
    }
}
