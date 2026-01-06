import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { PropsWithChildren } from 'react';
import { CookieConsent } from '@/components/CookieConsent';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
            <CookieConsent/>
        </>
    );
}
