import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { PropsWithChildren } from 'react';
import { CookieConsent } from '@/components/CookieConsent';
import { useTrackPageViews } from '@/hooks/useTrackPageViews';

export default function AppLayout({ children }: PropsWithChildren) {
    useTrackPageViews();

    return (
        <>
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
            <CookieConsent/>
        </>
    );
}
