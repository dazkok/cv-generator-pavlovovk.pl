import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import React from 'react';

interface Capability {
    title: string;
    description: string;
}

const CapabilityCard: React.FC<{ item: Capability; index: number }> = ({
    item,
    index,
}) => {
    const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={`fade-up space-y-3 ${isVisible ? 'is-visible' : ''}`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
        >
            <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
            <p className="max-w-prose text-neutral-600 dark:text-neutral-400">
                {item.description}
            </p>
        </div>
    );
};

export default CapabilityCard;
