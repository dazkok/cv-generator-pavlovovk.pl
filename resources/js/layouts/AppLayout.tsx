import Footer from '@/components/Footer';
import Header from '@/components/Header/index';
import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
        </>
    );
}
