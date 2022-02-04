<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VisitRequest extends FormRequest
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
            'reminder_time' => 'date_format:Y-m-d H:i:s',
            'post_id' => 'exists:posts,postId',
            'user_id' => 'exists:users,id',
            'customer_id' => 'exists:customers,id',
            'deal_id' => 'exists:deals,id',
            'remind_method_id' => 'exists:remind_methods,id',
            'cost' => 'numeric|min:2|max:50',
            'duration' => 'numeric|min:2|max:50',
            'seller_report' => 'nullable|max:2000',
            'buyer_report' => 'nullable|max:2000',
            'file' => 'mimes:jpeg,bmp,png,gif,svg,pdf',
        ];
    }
}
