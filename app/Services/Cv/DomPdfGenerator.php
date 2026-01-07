<?php

namespace App\Services\Cv;

use App\Contracts\Cv\CvPdfGeneratorInterface;
use Barryvdh\DomPDF\Facade\Pdf;

class DomPdfGenerator implements CvPdfGeneratorInterface
{
    public function generate(string $html): string
    {
        return Pdf::loadHTML($html)
            ->setPaper('a4')
            ->output();
    }
}
