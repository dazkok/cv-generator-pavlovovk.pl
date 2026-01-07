<?php

namespace App\Services\Cv;

use App\Contracts\Cv\CvRenderServiceInterface;
use App\Models\CvVersion;
use Illuminate\Support\Facades\View;

class CvRenderService implements CvRenderServiceInterface
{
    public function renderHtml(CvVersion $cvVersion): string
    {
        return View::make('cv.pdf', [
            'cv' => $cvVersion,
            'profile' => $cvVersion->profile,
            'sections' => $cvVersion->sections
                ->where('is_visible', true)
                ->sortBy('sort_order'),
        ])->render();
    }
}
