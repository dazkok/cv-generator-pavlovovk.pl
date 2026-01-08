<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'educations';

    protected static function booted(): void
    {
        static::addGlobalScope('sorted', function ($query) {
            $query->orderBy('sort_order');
        });
    }
}
