<?php

namespace App\Jobs;

use App\Http\DTO\ContactMessageDTO;
use Illuminate\Mail\Mailables\Address;
use App\Mail\ContactMessageMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Throwable;

class SendContactMessageJob implements ShouldQueue
{
    use Queueable;

    public int $tries = 3;

    public array $backoff = [10, 30, 60];

    public function __construct(
        public readonly ContactMessageDTO $dto
    )
    {
    }

    /**
     * @throws Throwable
     */
    public function handle(): void
    {
        DB::beginTransaction();

        try {
            $contactMessageId = DB::table('contact_messages')->insertGetId([
                'name' => $this->dto->name,
                'email' => $this->dto->email,
                'message' => $this->dto->message,
                'ip_address' => $this->dto->ip,
                'user_agent' => $this->dto->userAgent,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            Mail::to(
                new Address(
                    address: config('mail.contact_to'),
                    name: config('app.name')
                )
            )->send(
                new ContactMessageMail($this->dto)
            );

            DB::commit();

            Log::info('Contact message processed', [
                'contact_message_id' => $contactMessageId,
                'email' => $this->dto->email,
            ]);

        } catch (Throwable $e) {
            DB::rollBack();

            Log::error('Failed to process contact message', [
                'email' => $this->dto->email,
                'exception' => $e,
            ]);

            throw $e;
        }
    }

    public function failed(Throwable $exception): void
    {
        Log::critical('Contact message job permanently failed', [
            'email' => $this->dto->email,
            'exception' => $exception,
        ]);
    }
}
