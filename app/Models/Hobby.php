<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hobby extends Model
{
    protected $table = 'hobbies';

    protected static function booted(): void
    {
        static::addGlobalScope('sorted', function ($query) {
            $query->orderBy('sort_order');
        });
    }
}
