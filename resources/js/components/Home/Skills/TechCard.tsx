import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import React from 'react';

export interface Tech {
    name: string;
    description: string;
    icon: React.ReactElement;
}

const TechCard: React.FC<{ tech: Tech; index: number }> = ({ tech, index }) => {
    const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={`group fade-up relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] ${
                isVisible ? 'is-visible' : ''
            } `}
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-brand-500/10 opacity-0 blur-3xl transition group-hover:opacity-100"
            />

            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-brand-600 dark:text-brand-400">
                {tech.icon}
            </div>

            <h3 className="text-lg font-medium tracking-tight">{tech.name}</h3>

            <p className="mt-2 max-w-[28ch] text-sm text-neutral-600 dark:text-neutral-400">
                {tech.description}
            </p>
        </div>
    );
};

export default TechCard;
