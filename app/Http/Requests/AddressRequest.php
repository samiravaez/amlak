<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
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
            'address' => 'nullable|max:255',
            'shahrestan_id' => 'exists:tbl_shahrestan,ID',
            'mantaghe_id' => 'exists:tbl_mantaghe,ID',
            'bakhsh_id' => 'exists:tbl_bakhsh,ID',
        ];
    }
}
