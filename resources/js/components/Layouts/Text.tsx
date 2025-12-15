import React from 'react';

const Text: React.FC<{ className?: string; children: React.ReactNode }> = ({
    children,
    className,
}) => (
    <p
        className={`max-w-prose text-base leading-relaxed text-neutral-700 dark:text-neutral-300 ${className}`}
    >
        {children}
    </p>
);

export default Text;
