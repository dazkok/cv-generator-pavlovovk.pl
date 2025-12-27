<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group([
    'prefix' => '{locale?}',
    'where' => ['locale' => 'uk|en|pl'],
    'middleware' => 'set-locale'
], function () {
    Route::get('/', function () {
        return Inertia::render('Home');
    });

    Route::get('/test', function () {
        function getColorName(string $name): string
        {
            $color = dechex(crc32($name));
            return '#' . substr($color, 0, 6);
        }

        return getColorName('Pavlo Vovk');
    });
});
