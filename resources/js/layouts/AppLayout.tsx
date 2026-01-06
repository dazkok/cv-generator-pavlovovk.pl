import { CookieConsent } from '@/components/CookieConsent';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { router } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const scrollTo = params.get('scroll');
        if (scrollTo) {
            const el = document.getElementById(scrollTo);
            const header = document.querySelector('header');
            const headerHeight = header?.clientHeight ?? 0;

            if (el) {
                window.scrollTo({
                    top: el.offsetTop - headerHeight,
                    behavior: 'smooth',
                });
            }

            router.replace({
                url: window.location.pathname,
                preserveScroll: true,
            });
        }
    }, []);

    return (
        <>
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
            <CookieConsent />
        </>
    );
}
