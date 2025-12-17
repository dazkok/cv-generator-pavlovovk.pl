import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import React from 'react';

type ProjectRowProps = {
    index: string;
    title: string;
    description: string;
    role: string;
    meta?: string;
    delay?: number; // додаємо delay для анімації
};

const ProjectRow: React.FC<ProjectRowProps> = ({
    index,
    title,
    description,
    role,
    meta,
    delay = 0,
}) => {
    const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={`group fade-up grid gap-6 py-12 md:grid-cols-12 ${
                isVisible ? 'is-visible' : ''
            }`}
            style={{ animationDelay: `${delay}s` }}
        >
            {/* Marker */}
            <div className="flex items-start pt-1 md:col-span-1">
                <span className="text-sm font-medium text-brand-600">
                    {index}
                </span>
            </div>

            {/* Title */}
            <div className="md:col-span-4">
                <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                {meta && (
                    <p className="mt-1 text-xs text-neutral-500">{meta}</p>
                )}
            </div>

            {/* Description */}
            <div className="text-neutral-600 md:col-span-4 dark:text-neutral-400">
                {description}
            </div>

            {/* Role */}
            <div className="text-sm text-neutral-500 md:col-span-3">{role}</div>

            {/* Divider */}
            <div className="col-span-full h-px bg-border opacity-40 transition group-hover:opacity-100" />
        </div>
    );
};

export default ProjectRow;
