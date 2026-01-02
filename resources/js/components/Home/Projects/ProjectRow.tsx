import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import React from 'react';

type ProjectRowProps = {
    index: string;
    title: string;
    description: string;
    details?: string;
    role: string;
    meta?: string;
    delay?: number;
};

const ProjectRow: React.FC<ProjectRowProps> = ({
    index,
    title,
    description,
    details,
    role,
    meta,
    delay = 0,
}) => {
    const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={`group fade-up grid gap-6 py-12 transition-colors duration-300 hover:bg-neutral-50/60 md:grid-cols-12 dark:hover:bg-neutral-900/40 ${isVisible ? 'is-visible' : ''} `}
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

            {/* Description + hover details */}
            <div className="relative md:col-span-4">
                {/* Main description */}
                <p className="text-neutral-600 transition-opacity duration-300 group-hover:opacity-60 dark:text-neutral-400">
                    {description}
                </p>

                {/* Hover details */}
                {details && (
                    <p className="pointer-events-none mt-2 max-h-0 translate-y-2 overflow-hidden text-sm leading-relaxed text-neutral-500 opacity-0 transition-all duration-300 delay-75 ease-out group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                        {details}
                    </p>
                )}
            </div>

            {/* Role */}
            <div className="text-sm text-neutral-500 md:col-span-3">{role}</div>

            {/* Divider */}
            <div className="col-span-full h-px bg-border opacity-40 transition group-hover:opacity-100" />
        </div>
    );
};

export default ProjectRow;
