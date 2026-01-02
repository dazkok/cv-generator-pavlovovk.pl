import React from 'react';

export const HeroImage: React.FC<{
    src: string;
    alt: string;
    gradientColor?: string;
}> = ({ src, alt, gradientColor = 'var(--color-brand-500)' }) => (
    <div className="relative isolate">
        {/* Glow wrapper (clipped) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
                aria-hidden
                className="absolute -inset-24 animate-[floatGlow_12s_ease-in-out_infinite] rounded-full opacity-60 blur-3xl dark:opacity-80"
                style={{
                    background: `radial-gradient(circle at 30% 25%, ${gradientColor}40, transparent 60%)`,
                }}
            />
        </div>

        {/* 3D context */}
        <div className="[perspective:1200px]">
            <div className="relative animate-[floatImage_10s_ease-in-out_infinite] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-y-2 hover:rotate-x-[6deg] hover:-rotate-y-[6deg]">
                <img
                    src={src}
                    alt={alt}
                    className="rounded-2xl object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] will-change-transform dark:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
                />
            </div>
        </div>
    </div>
);
