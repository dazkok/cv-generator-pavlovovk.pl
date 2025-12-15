'use client';

import MoonIcon from '@/assets/icons/moon.svg?react';
import SunIcon from '@/assets/icons/sun.svg?react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'light';

        const savedTheme = localStorage.getItem('theme') as
            | 'light'
            | 'dark'
            | null;
        const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;

        return savedTheme ?? (systemPrefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative h-9 w-9 rounded-lg bg-neutral-100 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            <div className="absolute inset-0 flex items-center justify-center text-white hover:text-secondary">
                <div
                    className={`absolute transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                >
                    <SunIcon
                        className={'h-5 w-5 text-brand-900 hover:text-white'}
                    />
                </div>

                {/* Місяць */}
                <div
                    className={`absolute transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                >
                    <MoonIcon className={'h-5 w-5'} />
                </div>
            </div>
        </button>
    );
}
