<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CvVersion extends Model
{
    protected $table = 'cv_versions';

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }

    public function sections(): HasMany
    {
        return $this->hasMany(CvSection::class)
            ->orderBy('sort_order');
    }

    public function workExperiences(): HasMany
    {
        return $this->hasMany(WorkExperience::class)
            ->orderBy('sort_order');
    }

    public function educations(): HasMany
    {
        return $this->hasMany(Education::class)
            ->orderBy('sort_order');
    }

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class)
            ->orderBy('sort_order');
    }

    public function languages(): HasMany
    {
        return $this->hasMany(Language::class)
            ->orderBy('sort_order');
    }

    public function hobbies(): HasMany
    {
        return $this->hasMany(Hobby::class)
            ->orderBy('sort_order');
    }
}
