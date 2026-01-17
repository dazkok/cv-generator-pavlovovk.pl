import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import { useI18n } from '@/hooks/useI18n';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import React, { useState } from 'react';

interface ExperienceItem {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string;
    details: string[];
}

const ExperienceSection: React.FC = () => {
    const { t } = useI18n();
    const [activeId, setActiveId] = useState<string>('experience_1');

    const { ref: headerRef, isVisible: headerVisible } =
        useRevealOnScroll<HTMLDivElement>();
    const { ref: contentRef, isVisible: contentVisible } =
        useRevealOnScroll<HTMLDivElement>();

    const experiences: ExperienceItem[] = [
        {
            id: 'experience_1',
            company: t('experience.items.0.company'),
            position: t('experience.items.0.position'),
            period: t('experience.items.0.period'),
            description: t('experience.items.0.description'),
            details: (() => {
                const detailsArray = [];
                let index = 0;
                while (true) {
                    const key = `experience.items.0.details.${index}`;
                    const value = t(key);
                    if (value === key) break;
                    detailsArray.push(value);
                    index++;
                }
                return detailsArray;
            })(),
        },
        {
            id: 'experience_2',
            company: t('experience.items.1.company'),
            position: t('experience.items.1.position'),
            period: t('experience.items.1.period'),
            description: t('experience.items.1.description'),
            details: (() => {
                const detailsArray = [];
                let index = 0;
                while (true) {
                    const key = `experience.items.1.details.${index}`;
                    const value = t(key);
                    if (value === key) break;
                    detailsArray.push(value);
                    index++;
                }
                return detailsArray;
            })(),
        },
        {
            id: 'experience_3',
            company: t('experience.items.2.company'),
            position: t('experience.items.2.position'),
            period: t('experience.items.2.period'),
            description: t('experience.items.2.description'),
            details: (() => {
                const detailsArray = [];
                let index = 0;
                while (true) {
                    const key = `experience.items.2.details.${index}`;
                    const value = t(key);
                    if (value === key) break;
                    detailsArray.push(value);
                    index++;
                }
                return detailsArray;
            })(),
        },
    ];

    const activeExperience = experiences.find((exp) => exp.id === activeId);

    const handleSelect = (id: string) => {
        setActiveId(id);
    };

    return (
        <Section id="experience">
            <div
                ref={headerRef}
                className={`fade-up transition-opacity duration-700 ${
                    headerVisible ? 'is-visible' : ''
                }`}
            >
                <Heading level="h2">{t('experience.title')}</Heading>
                <Heading level="subtitle">{t('experience.text')}</Heading>
            </div>

            <div
                ref={contentRef}
                className={`fade-up mt-8 transition-opacity duration-700 lg:mt-12 ${
                    contentVisible ? 'is-visible' : ''
                }`}
            >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    {/* Левая колонка: вертикальный список (на md занимает 1/4) */}
                    <nav
                        aria-label="Experience list"
                        className="col-span-1 sticky top-24 -mx-2 max-h-[calc(100vh-6rem)] overflow-auto pr-2"
                    >
                        <ul className="space-y-3">
                            {experiences.map((exp) => {
                                const active = exp.id === activeId;
                                return (
                                    <li key={exp.id} className="relative">
                                        <button
                                            onClick={() => handleSelect(exp.id)}
                                            aria-pressed={active}
                                            className={`w-full text-left rounded-lg px-4 py-3 transition-all duration-200 flex flex-col gap-1 overflow-hidden
                                                ${active
                                                    ? 'bg-white shadow-sm border-l-4 border-primary/90 text-neutral-900 dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-50'
                                                    : 'bg-transparent text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-900/40'}
                                            `}
                                        >
                                            <div className="text-sm font-semibold">
                                                {exp.company}
                                            </div>
                                            <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                                {exp.position}
                                            </div>
                                            <div className="text-xs text-neutral-400 dark:text-neutral-500">
                                                {exp.period}
                                            </div>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Правая колонка: контент (на md занимает 3/4) */}
                    <div className="col-span-1 md:col-span-3">
                        {activeExperience && (
                            <div
                                className="animate-in fade-in slide-in-from-right-2 duration-300 rounded-2xl border bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:bg-neutral-900/40 dark:border-neutral-800/60"
                                role="region"
                                aria-labelledby={`${activeExperience.id}-title`}
                            >
                                <div className="mb-6 flex flex-col justify-between sm:flex-row sm:items-start">
                                    <div>
                                        <h3
                                            id={`${activeExperience.id}-title`}
                                            className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50"
                                        >
                                            {activeExperience.position}
                                        </h3>
                                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                                            {activeExperience.company}
                                        </p>
                                    </div>
                                    <span className="mt-4 inline-block text-sm font-medium text-neutral-500 sm:mt-0 dark:text-neutral-400">
                                        {activeExperience.period}
                                    </span>
                                </div>

                                <p className="mb-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                                    {activeExperience.description}
                                </p>

                                <ul className="space-y-3">
                                    {activeExperience.details.map((detail, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                                        >
                                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary/70" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ExperienceSection;
