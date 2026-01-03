import React from 'react';

import ContactSection from '@/components/Home/Contact/ContactSection';
import HeroSection from '@/components/Home/Hero/HeroSection';
import ProjectsSection from '@/components/Home/Projects/ProjectsSection';
import SkillsSection from '@/components/Home/Skills/SkillsSection';
import AppLayout from '@/layouts/AppLayout';

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </>
    );
}

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
