import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import DownloadIcon from '@/assets/icons/download.svg?react';
import PhpIcon from '@/assets/icons/php.svg?react';
import ReactIcon from '@/assets/icons/react.svg?react';
import WorldIcon from '@/assets/icons/world-www.svg?react';
import { HeroImage } from '@/components/Home/Hero/HeroImage';
import StatItem from '@/components/Home/Hero/StatItem';
import Button from '@/components/Layouts/Buttons/Button';
import ServiceItem from '@/components/Layouts/Buttons/ServiceItem';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import { useI18n } from '@/hooks/useI18n';
import React, { useState } from 'react';

const HeroSection: React.FC = () => {
    const { t } = useI18n();
    const [activeImage, setActiveImage] = useState<string>(
        '/assets/images/pavlo.jpg',
    );

    const services = [
        {
            key: 'full-stack',
            icon: WorldIcon,
            image: '/assets/images/website.jpg',
        },
        {
            key: 'backend',
            icon: PhpIcon,
            image: '/assets/images/backend-image.jpg',
        },
        {
            key: 'frontend',
            icon: ReactIcon,
            image: '/assets/images/frontend-image.jpg',
        },
    ];

    const handleServiceClick = (serviceKey: string, image: string) => {
        setActiveImage(image);
    };

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
                            dangerouslySetInnerHTML={{
                                __html: t('hero.title'),
                            }}
                        />
                    </Heading>
                    <Heading level="subtitle" className="mt-4">
                        {t('hero.text')}
                    </Heading>

                    <div className="my-8 flex flex-col gap-4 sm:flex-row">
                        <Button
                            download
                            href="/assets/pdf/CV_Pavlo_Vovk.pdf"
                            icon={<DownloadIcon />}
                        >
                            {t('hero.cv')}
                        </Button>

                        <Button
                            variant="ghost"
                            target={'_blank'}
                            href="/assets/pdf/Letter_of_Recomendation_Pavlo_Vovk.pdf"
                        >
                            {t('hero.recommendation')}
                        </Button>
                    </div>

                    {/* Services */}
                    <ul className="space-y-3">
                        {services.map((service, i) => {
                            const IconComponent = service.icon;

                            return (
                                <div
                                    key={service.key}
                                    onClick={() =>
                                        handleServiceClick(
                                            service.key,
                                            service.image,
                                        )
                                    }
                                    className="cursor-pointer"
                                >
                                    <ServiceItem
                                        icon={
                                            <IconComponent
                                                className={`me-2 h-6 w-6 opacity-60`}
                                            />
                                        }
                                        title={t(
                                            `hero.services.${service.key}.title`,
                                        )}
                                        delay={0.05 + i * 0.1}
                                    />
                                </div>
                            );
                        })}
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
                    src={activeImage}
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
