<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    protected static function booted(): void
    {
        static::addGlobalScope('sorted', function ($query) {
            $query->orderBy('sort_order');
        });
    }
}
