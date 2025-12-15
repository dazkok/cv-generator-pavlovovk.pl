import React from 'react';

const Section: React.FC<{
    id?: string;
    className?: string;
    children: React.ReactNode;
}> = ({ id, className, children }) => (
    <section
        id={id}
        className={`flex min-h-[calc(100svh-3.5rem)] w-full items-center ${className}`}
    >
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            {children}
        </div>
    </section>
);

export default Section;
