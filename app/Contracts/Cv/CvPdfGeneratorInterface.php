<?php

namespace App\Contracts\Cv;

interface CvPdfGeneratorInterface
{
    public function generate(string $html): string;
}
