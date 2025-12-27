'use client';

import { router, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

const locales = [
    { value: 'uk', label: 'UA' },
    { value: 'en', label: 'EN' },
    { value: 'pl', label: 'PL' },
];

export default function LanguageDropdown() {
    const { locale } = usePage().props as unknown as { locale: string };
    const currentLocale = locale ?? 'uk';

    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const switchLocale = (newLocale: string) => {
        if (newLocale === currentLocale) return;

        const pathname = window.location.pathname;

        const newPath = pathname.match(/^\/(uk|en|pl)/)
            ? pathname.replace(/^\/(uk|en|pl)/, `/${newLocale}`)
            : `/${newLocale}${pathname}`;

        router.visit(newPath, {
            preserveScroll: true,
            preserveState: true,
        });

        setOpen(false);
    };

    return (
        <div ref={ref} className="relative">
            {/* Button */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-700 uppercase transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                aria-label="Change language"
            >
                {currentLocale}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute left-1/2 mt-2 w-16 -translate-x-1/2 scale-95 animate-in space-y-1 rounded-lg border border-neutral-200 bg-white p-1 shadow-lg fade-in zoom-in dark:border-neutral-700 dark:bg-neutral-900">
                    {locales.map((l) => (
                        <button
                            key={l.value}
                            onClick={() => switchLocale(l.value)}
                            className={`flex w-full items-center justify-center rounded-md px-2 py-1 text-xs font-semibold uppercase transition-colors ${
                                l.value === currentLocale
                                    ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-white'
                                    : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700'
                            }`}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
