<?php

namespace App\Contracts\Cv;

use App\Models\CvVersion;

interface CvRepositoryInterface
{
    public function findById(int $id): CvVersion;
}
