import Button from '@/components/Layouts/Buttons/Button';
import { useI18n } from '@/hooks/useI18n';
import { useEffect, useState } from 'react';

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useI18n();

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            const timer = setTimeout(() => {
                setShowBanner(true);
                requestAnimationFrame(() => setIsVisible(true));
            }, 300);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        if (window.gtag) {
            window.gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
            });
        }
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 200);
    };

    if (!showBanner) return null;

    return (
        <div
            className="fixed right-6 bottom-6 left-6 z-50 transition-opacity duration-300 md:left-auto md:w-80"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div className="flex flex-col items-stretch gap-3 rounded-xl border border-neutral-200/30 bg-white/40 p-4 shadow-sm backdrop-blur-lg dark:border-neutral-800/30 dark:bg-neutral-900/40 dark:shadow-black/10">
                <p className="text-sm leading-relaxed text-neutral-900 dark:text-neutral-100">
                    {t('privacy.popup-text')}{' '}
                    <a
                        href="/privacy"
                        className="font-medium text-primary hover:underline"
                    >
                        {t('privacy.popup-href')}
                    </a>
                </p>
                <Button
                    onClick={acceptCookies}
                    variant="primary"
                    className="w-full rounded-lg bg-primary/90 px-4 py-2 text-sm font-medium text-white hover:bg-primary/80"
                >
                    {t('privacy.popup-button')}
                </Button>
            </div>
        </div>
    );
}
