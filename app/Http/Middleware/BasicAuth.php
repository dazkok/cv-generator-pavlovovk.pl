<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BasicAuth
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!empty(env('SITE_USER')) && (
                $request->getUser() !== env('SITE_USER') ||
                $request->getPassword() !== env('SITE_PASSWORD')
            )) {
            return response('Unauthorized', 401, [
                'WWW-Authenticate' => 'Basic'
            ]);
        }

        return $next($request);
    }
}
