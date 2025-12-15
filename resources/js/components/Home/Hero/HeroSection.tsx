import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import WorldIcon from '@/assets/icons/world-www.svg?react';
import { HeroImage } from '@/components/Home/Hero/HeroImage';
import StatItem from '@/components/Home/Hero/StatItem';
import ServiceItem from '@/components/Layouts/Buttons/ServiceItem';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import React from 'react';

const HeroSection: React.FC = () => {
    const services = [
        {
            title: 'Web Development',
            icon: <WorldIcon className="me-2 h-6 w-6 opacity-60" />,
        },
        {
            title: 'Digital Marketing',
            icon: <WorldIcon className="me-2 h-6 w-6 opacity-60" />,
        },
        {
            title: 'Graphic Design',
            icon: <WorldIcon className="me-2 h-6 w-6 opacity-60" />,
        },
    ];

    return (
        <Section className="flex min-h-[calc(100svh-3.5rem)] w-full items-center">
            <div className="grid items-center gap-y-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-x-24">
                {/* Left content */}
                <div className="space-y-6">
                    <span className="block text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        Pavlo Vovk
                    </span>

                    <Heading level="h1">
                        Software developer <br /> based in Cracow
                    </Heading>
                    <Heading level="subtitle" className="mt-4">
                        Crafting modern web experiences with React, Tailwind,
                        and passion.
                    </Heading>

                    {/* Services */}
                    <ul className="space-y-3">
                        {services.map((service, i) => (
                            <ServiceItem
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                delay={0.05 + i * 0.1}
                            />
                        ))}
                    </ul>

                    {/* Stats */}
                    <div className="flex gap-12 pt-6">
                        <StatItem
                            number="5+"
                            label="Years of Experience"
                            delay={0.2}
                        />
                        <StatItem
                            number="3K+"
                            label="Happy Customers"
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
            <div className="opacity-40 transition hover:opacity-70">
                <a href="#portfolio">
                    <ArrowDown className={'h-6 w-6'} />
                </a>
            </div>
        </Section>
    );
};

export default HeroSection;
