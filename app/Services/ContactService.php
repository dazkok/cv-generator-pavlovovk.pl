<?php

namespace App\Services;

use App\Http\DTO\ContactMessageDTO;
use App\Jobs\SendContactMessageJob;
use Illuminate\Support\Facades\Log;

class ContactService
{
    public function __construct()
    {
    }

    public function handle(ContactMessageDTO $dto): void
    {
        Log::info('New contact message', [
            'email' => $dto->email,
            'ip' => $dto->ip,
        ]);

        SendContactMessageJob::dispatch($dto);
    }
}
