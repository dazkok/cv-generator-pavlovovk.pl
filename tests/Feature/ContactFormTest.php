<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Bus;
use App\Jobs\SendContactMessageJob;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware(\App\Http\Middleware\BasicAuth::class);
        $this->withoutMiddleware(VerifyCsrfToken::class);
    }

    /**
     * Tests form validation: name, email, message are required.
     */
    public function test_contact_form_validation_requires_fields()
    {
        $response = $this->post('/contact', []);
        $response->assertStatus(302);
        $response->assertSessionHasErrors(['name', 'email', 'message']);
    }

    /**
     * Tests successful form submission: json response and job dispatch.
     */
    public function test_contact_form_sends_email_and_dispatches_job()
    {
        Bus::fake();

        $payload = [
            'name' => 'Test User',
            'email' => 'dazkok@gmail.com',
            'message' => 'Hello world',
        ];

        $response = $this->withHeaders([
            'Referer' => url('/contact'),
        ])->post('/contact', $payload);

        $response->assertStatus(201);
        $response->assertJson([
            'success' => true,
        ]);

        Bus::assertDispatched(SendContactMessageJob::class, function ($job) use ($payload) {
            return isset($job->dto) && $job->dto->email === $payload['email'];
        });
    }
}
