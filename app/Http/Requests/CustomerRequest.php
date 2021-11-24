<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
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
            'first_name' => 'max:255|required',
            'last_name' => 'max:255|required',
            'username' => 'max:255',
            'mobile_unique' => 'unique:customers,mobile_unique,' . $this->id,
            'id_number' => 'max:255',
            'residence_change_reason' => 'max:255',
            'attendant_id' => 'nullable|exists:attendants,id',
            'description' => 'nullable|max:255',
            'website' => 'max:255',
            'career_id' => 'nullable|exists:careers,id',
            'eye_color_id'=> 'nullable|exists:eye_colors,id',
            'customer_state_id'=> 'nullable|exists:customer_states,id',
            'purchase_stage_id'=> 'nullable|exists:purchase_stages,id',
            'education_level_id'=> 'nullable|exists:education_levels,id',
            'experience_company'=> 'max:100',
            'children_count' => 'numeric|min:2|max:4',
            'fund_value'=> 'numeric|min:2|max:50',
            'phone' => 'max:11|regex:/(0)[0-9]{10}/',
            'mobile_number' => 'max:11|regex:/(09)[0-9]{9}/',
            'monthly_income' => 'numeric|min:2|max:50'
        ];
    }
}
