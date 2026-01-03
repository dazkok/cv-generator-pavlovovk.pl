<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'locale' => fn() => app()->getLocale(),
            'translations' => fn() => [
                'navigation' => trans('navigation'),
                'hero' => trans('hero-section'),
                'portfolio' => trans('portfolio'),
                'skills' => trans('skills'),
                'contact' => trans('contact'),
                'meta' => [
                    'title' => __('home-meta.title'),
                    'description' => __('home-meta.description'),
                    'keywords' => __('home-meta.keywords'),
                    'metaImage' => '/images/meta/portfolio-home.jpg', // OG image
                ],
            ],
        ]);
    }
}
