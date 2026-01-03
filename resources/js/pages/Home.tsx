import React from 'react';

import ContactSection from '@/components/Home/Contact/ContactSection';
import HeroSection from '@/components/Home/Hero/HeroSection';
import ProjectsSection from '@/components/Home/Projects/ProjectsSection';
import SkillsSection from '@/components/Home/Skills/SkillsSection';
import AppLayout from '@/layouts/AppLayout';
import { Head, usePage } from '@inertiajs/react';
import { useI18n } from '@/hooks/useI18n';

export default function Home() {
    const { locale } = usePage().props as unknown as { locale: string };
    const { t } = useI18n();

    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
                <meta name="keywords" content={t('meta.keywords')} />
                <meta name="robots" content={process.env.NODE_ENV === 'production' ? 'all' : 'noindex'} />
                <meta name="author" content="Pavlo Vovk" />
                <link rel="canonical" href={url} />

                {/* Open Graph */}
                <meta property="og:locale" content={locale === 'uk' ? 'uk_UA' : locale + '_' + locale.toUpperCase()} />
                <meta property="og:title" content={t('meta.title')} />
                <meta property="og:description" content={t('meta.description')} />
                <meta property="og:image" content={t('meta.metaImage')} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Pavlo Vovk" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('meta.title')} />
                <meta name="twitter:description" content={t('meta.description')} />
                <meta name="twitter:image" content={t('meta.metaImage')} />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
            </Head>

            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </>
    );
}

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
