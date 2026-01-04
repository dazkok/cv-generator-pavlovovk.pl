<?php

namespace Tests\Feature;

use Tests\TestCase;

class HomePageTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware(\App\Http\Middleware\BasicAuth::class);
    }

    /**
     * Checks that the main page is accessible and contains the name in the header.
     */
    public function test_home_page_returns_ok_and_contains_header()
    {
        $response = $this->get('/en');
        $response->assertStatus(200);

        // Check if the page contains the expected title in the Inertia props
        $page = $this->inertiaPage($response);
        $this->assertEquals('Home', $page['component']);
        $this->assertStringContainsString('Pavlo Vovk', json_encode($page['props']));
    }

    /**
     * Helper method to extract Inertia page data from the response.
     */
    protected function inertiaPage($response)
    {
        $content = $response->getContent();
        preg_match('/<div id="app" data-page="([^"]+)"/', $content, $matches);
        $this->assertCount(2, $matches, 'Inertia page data not found in response');

        return json_decode(html_entity_decode($matches[1]), true);
    }
}
