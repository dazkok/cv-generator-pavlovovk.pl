import React, { JSX } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'subtitle';

interface HeadingProps {
    level?: HeadingLevel;
    children: React.ReactNode;
    className?: string;
}

/**
 * Universal Heading component.
 * level: 'h1' | 'h2' | 'h3' | 'subtitle'
 * Styles inspired by Apple typography
 */
const Heading: React.FC<HeadingProps> = ({
    level = 'h1',
    children,
    className,
}) => {
    let Tag: keyof JSX.IntrinsicElements = 'h1';
    let sizeClass = '';

    switch (level) {
        case 'h1':
            Tag = 'h1';
            sizeClass =
                'text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight';
            break;
        case 'h2':
            Tag = 'h2';
            sizeClass =
                'text-4xl lg:text-5xl font-semibold leading-[1.2] tracking-tight';
            break;
        case 'h3':
            Tag = 'h3';
            sizeClass =
                'text-3xl lg:text-4xl font-semibold leading-[1.25] tracking-tight';
            break;
        case 'subtitle':
            Tag = 'p';
            sizeClass =
                'text-lg lg:text-xl font-medium leading-relaxed text-neutral-600 dark:text-neutral-400';
            break;
        default:
            Tag = 'h1';
            sizeClass =
                'text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight';
    }

    return <Tag className={`${sizeClass} ${className}`}>{children}</Tag>;
};

export default Heading;
