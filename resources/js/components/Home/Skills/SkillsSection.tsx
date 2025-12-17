import LaravelIcon from '@/assets/icons/laravel.svg?react';
import PhpIcon from '@/assets/icons/php.svg?react';
import ReactIcon from '@/assets/icons/react.svg?react';
import TypeScriptIcon from '@/assets/icons/typescript.svg?react';
import CapabilityCard from '@/components/Home/Skills/CapabilityCard';
import TechCard from '@/components/Home/Skills/TechCard';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import React from 'react';

const coreStack = [
    {
        name: 'PHP',
        description: 'Backend logic, integrations, and business rules',
        icon: <PhpIcon className={'h-6 w-6'} />,
    },
    {
        name: 'Laravel',
        description: 'Backend frameworks for scalable products',
        icon: <LaravelIcon className={'h-6 w-6'} />,
    },
    {
        name: 'TypeScript',
        description: 'Typed JavaScript for reliable frontend architecture',
        icon: <TypeScriptIcon className={'h-6 w-6'} />,
    },
    {
        name: 'React',
        description: 'Component-based UI for complex applications',
        icon: <ReactIcon className={'h-6 w-6'} />,
    },
];

const capabilities = [
    {
        title: 'Backend & System Design',
        description:
            'Designing and maintaining backend systems, APIs, and integrations that scale with real products.',
    },
    {
        title: 'Full-stack Delivery',
        description:
            'Owning features end-to-end — from backend logic to frontend implementation.',
    },
    {
        title: 'UI Engineering',
        description:
            'Translating product requirements into clean, usable interfaces with attention to detail.',
    },
    {
        title: 'Performance & Reliability',
        description:
            'Optimizing performance, stability, and long-term maintainability across the stack.',
    },
];

const SkillsSection: React.FC = () => {
    return (
        <Section id="skills">
            <Heading level="h2">Skills</Heading>
            <Heading level="subtitle">
                Full-stack development with a strong backend foundation.
            </Heading>

            {/* Core stack with visual anchor */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {coreStack.map((tech, i) => (
                    <TechCard key={tech.name} tech={tech} index={i} />
                ))}
            </div>

            {/* Capabilities */}
            <div className="mt-24 grid gap-16 md:grid-cols-2">
                {capabilities.map((item, i) => (
                    <CapabilityCard key={item.title} item={item} index={i} />
                ))}
            </div>
        </Section>
    );
};

export default SkillsSection;
