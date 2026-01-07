<?php

namespace App\Services\Cv;

use App\Contracts\Cv\CvPdfGeneratorInterface;
use App\Contracts\Cv\CvRenderServiceInterface;
use App\Contracts\Cv\CvRepositoryInterface;

class GenerateCvPdfService
{
    public function __construct(
        private readonly CvRepositoryInterface    $repository,
        private readonly CvRenderServiceInterface $renderer,
        private readonly CvPdfGeneratorInterface  $pdfGenerator,
    )
    {
    }

    public function execute(int $cvVersionId): string
    {
        $cvVersion = $this->repository->findById($cvVersionId);

//        dd($cvVersion->toArray());

        $html = $this->renderer->renderHtml($cvVersion);

        return $this->pdfGenerator->generate($html);
    }
}
