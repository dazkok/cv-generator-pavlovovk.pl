<?php

namespace App\Services\Cv;

use App\Contracts\Cv\CvRenderServiceInterface;
use App\Models\CvVersion;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\App;
use Carbon\Carbon;

class CvRenderService implements CvRenderServiceInterface
{
    public function renderHtml(CvVersion $cvVersion): string
    {
        App::setLocale($cvVersion->locale);
        Carbon::setLocale($cvVersion->locale);

        $localeMap = [
            'pl' => ['pl_PL.UTF-8', 'pl_PL', 'pl'],
            'en' => ['en_US.UTF-8', 'en_US', 'C'],
        ];

        $locales = $localeMap[$cvVersion->locale] ?? $localeMap['en'];
        foreach ($locales as $loc) {
            @setlocale(LC_TIME, $loc);
            @setlocale(LC_ALL, $loc);
        }

        return View::make('cv.pdf', [
            'cv' => $cvVersion,
            'profile' => $cvVersion->profile,
            'sections' => $cvVersion->sections
                ->where('is_visible', true)
                ->sortBy('sort_order'),
        ])->render();
    }
}
