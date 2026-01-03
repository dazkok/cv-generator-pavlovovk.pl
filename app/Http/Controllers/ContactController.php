<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:2'],
            'email' => ['required', 'email'],
            'message' => ['required', 'string', 'min:10'],
        ]);

        // mail / queue / db — пізніше

        return back()->with('success', true);
    }
}
