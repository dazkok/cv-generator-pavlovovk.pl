<?php

namespace App\Contracts\Cv;

use App\Models\CvVersion;

interface CvRenderServiceInterface
{
    public function renderHtml(CvVersion $cvVersion): string;
}
