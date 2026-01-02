import ArrowRightDashed from '@/assets/icons/arrow-right-dashed.svg?react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import React from 'react';

const ServiceItem: React.FC<{
    icon: React.ReactNode;
    title: string;
    href?: string;
    delay?: number;
}> = ({ icon, title, delay = 0 }) => {
    const { ref, isVisible } = useRevealOnScroll<HTMLLIElement>();

    return (
        <li
            ref={ref}
            className={`fade-up ${isVisible ? 'is-visible' : ''}`}
            style={{ animationDelay: `${delay}s` }}
        >
            <a
                className="group inline-flex items-center text-base font-medium text-neutral-700 transition-all hover:opacity-70 dark:text-neutral-300"
            >
                {icon}
                <span className="ml-2">{title}</span>
                <ArrowRightDashed className="ml-2 h-6 w-6 opacity-60 transition-transform group-hover:translate-x-0.5" />
            </a>
        </li>
    );
};

export default ServiceItem;
