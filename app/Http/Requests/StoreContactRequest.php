<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:2', 'max:255'],
            'email' => ['required', 'email:rfc,dns', 'max:255'],
            'message' => ['required', 'string', 'min:10', 'max:5000'],

            // honeypot
            'website' => ['nullable', 'string', 'size:0'],
            'nickname' => ['nullable', 'string', 'size:0'],
            'fax_number' => ['nullable', 'string', 'size:0'],
            'agreements' => ['nullable', 'string', 'size:0'],
            'text_message' => ['nullable', 'string', 'size:0'],
        ];
    }

    public function messages(): array
    {
        return [
            'message.min' => __('contact.form.fields.message.error'),
        ];
    }

    protected function failedValidation(Validator $validator): void
    {
        if ($this->honeypotTriggered()) {
            response()->json(['success' => true], 200)->send();
            exit;
        }

        parent::failedValidation($validator);
    }

    private function honeypotTriggered(): bool
    {
        return filled($this->input('website'))
            || filled($this->input('nickname'))
            || filled($this->input('fax_number'))
            || filled($this->input('agreements'))
            || filled($this->input('text_message'));
    }
}
