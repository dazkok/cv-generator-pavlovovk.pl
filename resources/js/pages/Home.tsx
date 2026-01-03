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
            </Head>

            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </>
    );
}

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
