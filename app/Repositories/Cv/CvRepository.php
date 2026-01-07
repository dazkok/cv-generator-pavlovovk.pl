<?php

namespace App\Repositories\Cv;

use App\Contracts\Cv\CvRepositoryInterface;
use App\Models\CvVersion;

class CvRepository implements CvRepositoryInterface
{
    public function findById(int $id): CvVersion
    {
        return CvVersion::query()
            ->with([
                'profile',
                'sections',
                'workExperiences',
                'educations',
                'skills',
                'languages',
                'hobbies',
            ])
            ->findOrFail($id);
    }
}
