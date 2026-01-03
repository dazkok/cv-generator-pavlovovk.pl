<?php

namespace App\Http\DTO;

readonly class ContactMessageDTO
{
    public function __construct(
        public string $name,
        public string $email,
        public string $message,
        public string $ip,
        public string $userAgent,
    ) {}
}
