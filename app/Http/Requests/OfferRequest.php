<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OfferRequest extends FormRequest
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
            'post_id' => 'exists:posts,postId',
            'user_id' => 'exists:users,id',
            'customer_id' => 'exists:customers,id',
            'topic' => 'nullable|max:255',
            'description' => 'nullable|max:2000',
            'file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
            'reject_reason' => 'nullable|max:2000',
        ];
    }
}
