<?php

namespace App\Http\Controllers;

use App\Http\DTO\ContactMessageDTO;
use App\Http\Requests\StoreContactRequest;
use App\Services\ContactService;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request,
                          ContactService      $contactService)
    {
        $dto = new ContactMessageDTO(
            name: $request->validated('name'),
            email: $request->validated('email'),
            message: $request->validated('message'),
            ip: $request->ip(),
            userAgent: (string)$request->userAgent(),
        );

        $contactService->handle($dto);

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully',
        ], 201);
    }
}
