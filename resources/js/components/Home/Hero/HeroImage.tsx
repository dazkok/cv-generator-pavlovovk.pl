import React from 'react';

export const HeroImage: React.FC<{
    src: string;
    alt: string;
    gradientColor?: string;
}> = ({ src, alt, gradientColor = 'var(--color-brand-500)' }) => (
    <div className="relative [perspective:1200px]">
        {/* Gradient Light */}
        <div
            aria-hidden
            className="pointer-events-none absolute -inset-24 rounded-full blur-3xl"
            style={{
                background: `radial-gradient(circle at 30% 25%, ${gradientColor}35, transparent 55%)`,
            }}
        />
        {/* Depth Layer */}
        <div className="transition-transform duration-500 ease-out hover:translate-y-4 hover:scale-[1.03]">
            <img
                src={src}
                alt={alt}
                className="rounded-2xl object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]"
            />
        </div>
    </div>
);


