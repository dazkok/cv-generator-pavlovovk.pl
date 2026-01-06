import { gtagSafe } from '@/helpers/gtag';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export function useTrackPageViews() {
    const page = usePage();

    useEffect(() => {
        if (localStorage.getItem('cookieConsent') === 'accepted') {
            gtagSafe(() => {
                window.gtag?.('config', 'G-6PQLCN9TKL', {
                    page_path: page.url,
                });
            });
        }
    }, [page.url]);
}
