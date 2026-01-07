<?php

namespace App\Http\Controllers;

use App\Services\Cv\GenerateCvPdfService;
use Symfony\Component\HttpFoundation\Response;

class CvPdfController extends Controller
{
    public function __construct(
        private readonly GenerateCvPdfService $service
    )
    {
    }

    public function show(int $id): Response
    {
        $pdf = $this->service->execute($id);

        return response($pdf, 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="cv.pdf"',
        ]);
    }
}
