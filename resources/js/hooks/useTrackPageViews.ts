import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { gtagSafe } from '@/helpers/gtag';

export function useTrackPageViews() {
    const page = usePage();

    useEffect(() => {
        if (localStorage.getItem('cookieConsent') !== 'accepted') return;

        gtagSafe(() => {
            window.gtag?.('config', 'G-6PQLCN9TKL', {
                page_path: page.url,
            });
        });
    }, [page.url]);
}
