import { useEffect, useState } from 'react';

import LanguageDropdown from '@/components/LanguageToggle';
import { useI18n } from '@/hooks/useI18n';
import ThemeToggle from './ThemeToggle';

import CloseIcon from '@/assets/icons/close.svg?react';
import MenuIcon from '@/assets/icons/menu-deep.svg?react';

import GithubIcon from '@/assets/icons/github.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import MailIcon from '@/assets/icons/mail.svg?react';

interface HeaderProps {
    onLogoClick?: () => void;
}

const NAV_ITEMS = ['about', 'portfolio', 'skills', 'contact'] as const;

export default function Header({ onLogoClick }: HeaderProps) {
    const { t } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogoClick = () => {
        if (onLogoClick) onLogoClick();
        else window.scrollTo({ top: 0, behavior: 'smooth' });

        setIsOpen(false);
    };

    /** ESC close */
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen]);

    return (
        <>
            {/* HEADER */}
            <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl dark:border-neutral-800/60 dark:bg-neutral-900/70">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex h-14 items-center justify-between">
                        {/* Logo */}
                        <div
                            className="flex cursor-pointer items-center gap-3"
                            onClick={handleLogoClick}
                        >
                            <div className="h-8 w-8 rounded-full bg-primary/90" />
                            <span className="text-sm font-semibold tracking-tight">
                                Pavlo Vovk
                            </span>
                        </div>

                        {/* Desktop nav */}
                        <nav className="hidden items-center gap-8 md:flex">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="text-sm font-medium text-neutral-700 transition-opacity hover:opacity-70 dark:text-neutral-300"
                                >
                                    {t(`navigation.${item}`)}
                                </a>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <LanguageDropdown />
                            <ThemeToggle />

                            <button
                                onClick={() => setIsOpen(true)}
                                className="rounded-lg p-2 transition-colors hover:bg-neutral-200/60 md:hidden dark:hover:bg-neutral-800/60"
                                aria-label="Open menu"
                            >
                                <MenuIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* OVERLAY */}
            <div
                className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* SLIDE MENU */}
            <aside
                className={`fixed top-0 right-0 z-50 flex h-full w-[72%] max-w-xs flex-col border-l border-neutral-200/60 bg-white/80 backdrop-blur-xl transition-transform duration-300 dark:border-neutral-800/60 dark:bg-neutral-900/80 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Top */}
                <div className="flex h-14 items-center justify-end px-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg p-2 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
                        aria-label="Close menu"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex flex-1 flex-col gap-1 px-4 pt-4">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl px-4 py-3 text-base font-medium text-neutral-800 transition-colors hover:bg-neutral-200/60 dark:text-neutral-200 dark:hover:bg-neutral-800/60"
                        >
                            {t(`navigation.${item}`)}
                        </a>
                    ))}
                </nav>

                {/* Footer socials */}
                <div className="border-t border-neutral-200/60 px-4 py-5 dark:border-neutral-800/60">
                    <div className="flex items-center justify-between">
                        <a
                            href="mailto:dazkok@gmail.com"
                            aria-label="Email"
                            className="rounded-lg p-2 transition hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
                        >
                            <MailIcon className="h-5 w-5" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/pavlo-vovk-37437824b/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-lg p-2 transition hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
                        >
                            <LinkedInIcon className="h-5 w-5" />
                        </a>

                        <a
                            href="https://github.com/dazkok"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="rounded-lg p-2 transition hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
                        >
                            <GithubIcon className="h-5 w-5" />
                        </a>

                        <a
                            href="https://instagram.com/x_xxost"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="rounded-lg p-2 transition hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
                        >
                            <InstagramIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}
