<?php

namespace App\Providers;

use App\Contracts\Cv\CvPdfGeneratorInterface;
use App\Contracts\Cv\CvRenderServiceInterface;
use App\Contracts\Cv\CvRepositoryInterface;
use App\Repositories\Cv\CvRepository;
use App\Services\Cv\CvRenderService;
use App\Services\Cv\DomPdfGenerator;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            CvRepositoryInterface::class,
            CvRepository::class
        );

        $this->app->bind(
            CvRenderServiceInterface::class,
            CvRenderService::class
        );

        $this->app->bind(
            CvPdfGeneratorInterface::class,
            DomPdfGenerator::class
        );
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
                'experience' => trans('experience'),
                'portfolio' => trans('portfolio'),
                'skills' => trans('skills'),
                'contact' => trans('contact'),
                'privacy' => trans('privacy'),
                'meta' => [
                    'title' => __('home-meta.title'),
                    'description' => __('home-meta.description'),
                    'keywords' => __('home-meta.keywords'),
                    'metaImage' => '/assets/images/meta/portfolio-home.jpg', // OG image
                ],
            ],
        ]);
    }
}
