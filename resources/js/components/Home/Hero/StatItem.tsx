import React from 'react';

const StatItem: React.FC<{
    number: string | number;
    label: string;
    delay?: number;
}> = ({ number, label, delay = 0 }) => (
    <div className={`fade-up`} style={{ animationDelay: `${delay}s` }}>
        <div className="flex items-center gap-4">
            <span className="text-3xl font-medium tracking-tight">
                {number}
            </span>
            <span className="text-xs leading-tight text-neutral-500 dark:text-neutral-400">
                {label}
            </span>
        </div>
    </div>
);

export default StatItem;
