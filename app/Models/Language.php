<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected static function booted(): void
    {
        static::addGlobalScope('sorted', function ($query) {
            $query->orderBy('sort_order');
        });
    }
}
