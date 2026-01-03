import LanguageDropdown from '@/components/LanguageToggle';
import { useI18n } from '@/hooks/useI18n';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    onLogoClick?: () => void;
}

export default function Header({ onLogoClick }: HeaderProps) {
    const { t } = useI18n();

    const handleLogoClick = () => {
        if (onLogoClick) {
            onLogoClick();
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/60 dark:bg-neutral-900/70 supports-[backdrop-filter]:dark:bg-neutral-900/60">
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

                    {/* Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {['about', 'portfolio', 'skills', 'contact'].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-sm font-medium text-neutral-700 transition-opacity hover:opacity-70 dark:text-neutral-300"
                                >
                                    {t(`navigation.${item}`)}
                                </a>
                            ),
                        )}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <LanguageDropdown />
                        <ThemeToggle />

                        {/* Mobile menu */}
                        <button
                            className="rounded-lg p-2 transition-colors hover:bg-neutral-200/60 md:hidden dark:hover:bg-neutral-800/60"
                            aria-label="Open menu"
                        >
                            <div className="space-y-1">
                                <span className="block h-0.5 w-5 bg-neutral-900 dark:bg-neutral-100" />
                                <span className="block h-0.5 w-5 bg-neutral-900 dark:bg-neutral-100" />
                                <span className="block h-0.5 w-3 bg-neutral-900 dark:bg-neutral-100" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
