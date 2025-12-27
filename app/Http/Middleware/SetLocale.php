<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    protected array $availableLocales = ['uk', 'en', 'pl'];

    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $routeLocale = $request->route('locale');

        if ($routeLocale && in_array($routeLocale, $this->availableLocales)) {
            app()->setLocale($routeLocale);
            Cookie::queue('locale', $routeLocale, 60 * 24 * 30);
            return $next($request);
        }

        if ($cookieLocale = $request->cookie('locale')) {
            if (in_array($cookieLocale, $this->availableLocales)) {
                return redirect("/{$cookieLocale}{$request->getRequestUri()}");
            }
        }

        $localeFromIp = $this->detectLocaleFromIp($request);

        return redirect("/{$localeFromIp}{$request->getRequestUri()}");
    }

    protected function detectLocaleFromIp(Request $request): ?string
    {
        if ($country = $request->header('CF-IPCountry')) {
            return match ($country) {
                'UA' => 'uk',
                'PL' => 'pl',
                default => 'en',
            };
        }

        if (app()->isLocal()) {
            return config('app.fallback_locale');
        }

        try {
            return match (geoip($request->ip())->iso_code) {
                'UA' => 'uk',
                'PL' => 'pl',
                default => 'en',
            };
        } catch (\Throwable) {
            return config('app.fallback_locale');
        }
    }
}
