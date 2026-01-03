import LaravelIcon from '@/assets/icons/laravel.svg?react';
import PhpIcon from '@/assets/icons/php.svg?react';
import ReactIcon from '@/assets/icons/react.svg?react';
import TypeScriptIcon from '@/assets/icons/typescript.svg?react';
import CapabilityCard from '@/components/Home/Skills/CapabilityCard';
import TechCard from '@/components/Home/Skills/TechCard';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import React from 'react';
import { useI18n } from '@/hooks/useI18n';

const coreStack = [
    {
        key: 'php',
        icon: PhpIcon,
    },
    {
        key: 'laravel',
        icon: LaravelIcon,
    },
    {
        key: 'typescript',
        icon: TypeScriptIcon,
    },
    {
        key: 'react',
        icon: ReactIcon,
    },
];

const capabilities = [
    {
        key: 'backend-design',
    },
    {
        key: 'fullstack-delivery',
    },
    {
        key: 'ui-engineering',
    },
    {
        key: 'performance-reliability',
    },
];

const SkillsSection: React.FC = () => {
    const { t } = useI18n();

    return (
        <Section id="skills">
            <Heading level="h2">{t('skills.title')}</Heading>
            <Heading level="subtitle">
                {t('skills.subtitle')}
            </Heading>

            {/* Core Stack */}
            <div className="mt-8 lg:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {coreStack.map((tech, i) => {
                    const IconComponent = tech.icon;
                    return (
                        <TechCard
                            key={tech.key}
                            tech={{
                                name: t(`skills.coreStack.${tech.key}.name`),
                                description: t(`skills.coreStack.${tech.key}.description`),
                                icon: <IconComponent className={'h-6 w-6'} />,
                            }}
                            index={i}
                        />
                    );
                })}
            </div>

            {/* Capabilities */}
            <div className="mt-12 lg:mt-24 grid gap-8 lg:gap-16 md:grid-cols-2 text-center md:text-start">
                {capabilities.map((item, i) => (
                    <CapabilityCard
                        key={item.key}
                        item={{
                            title: t(`skills.capabilities.${item.key}.title`),
                            description: t(`skills.capabilities.${item.key}.description`),
                        }}
                        index={i}
                    />
                ))}
            </div>
        </Section>
    );
};

export default SkillsSection;
