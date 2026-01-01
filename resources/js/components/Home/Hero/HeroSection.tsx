import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import WorldIcon from '@/assets/icons/world-www.svg?react';
import { HeroImage } from '@/components/Home/Hero/HeroImage';
import StatItem from '@/components/Home/Hero/StatItem';
import ServiceItem from '@/components/Layouts/Buttons/ServiceItem';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import { useI18n } from '@/hooks/useI18n';
import React from 'react';

const HeroSection: React.FC = () => {
    const { t } = useI18n();

    const services = ['full-stack', 'backend', 'frontend'];

    return (
        <Section className="flex min-h-[calc(100svh-3.5rem)] w-full items-center">
            <div className="grid items-center gap-y-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-x-24">
                {/* Left content */}
                <div className="space-y-6">
                    <span className="block text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {t('hero.subtitle')}
                    </span>

                    <Heading level="h1">
                        <span
                            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
                        />
                    </Heading>
                    <Heading level="subtitle" className="mt-4">
                        {t('hero.text')}
                    </Heading>

                    {/* Services */}
                    <ul className="space-y-3">
                        {services.map((key, i) => (
                            <ServiceItem
                                key={key}
                                icon={<WorldIcon className="me-2 h-6 w-6 opacity-60" />}
                                title={t(`hero.services.${key}.title`)}
                                // text={t(`hero.services.${key}.text`)}
                                delay={0.05 + i * 0.1}
                            />
                        ))}
                    </ul>

                    {/* Stats */}
                    <div className="flex gap-12 pt-6">
                        <StatItem
                            number={t('hero.highlights.experience.number')}
                            label={t('hero.highlights.experience.text')}
                            delay={0.2}
                        />
                        <StatItem
                            number={t('hero.highlights.users.number')}
                            label={t('hero.highlights.users.text')}
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* Right image */}
                <HeroImage
                    src="/assets/images/pavlo-yumi.jpg"
                    alt="Hero"
                    gradientColor="var(--color-brand-500)"
                />
            </div>

            {/* Scroll down */}
            <div className="mt-5 opacity-40 transition hover:opacity-70 lg:mt-10">
                <a href="#portfolio">
                    <ArrowDown className={'h-6 w-6'} />
                </a>
            </div>
        </Section>
    );
};

export default HeroSection;
