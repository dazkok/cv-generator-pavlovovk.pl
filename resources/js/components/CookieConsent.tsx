import { useState, useEffect } from 'react';
import { gtagSafe, loadGA4 } from '@/helpers/gtag';
import Button from '@/components/Layouts/Buttons/Button';
import { useI18n } from '@/hooks/useI18n';

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const { t } = useI18n();

    useEffect(() => {
        if (localStorage.getItem('cookieConsent') === null) {
            const timer = setTimeout(() => {
                requestAnimationFrame(() => {
                    setShowBanner(true);
                });
            }, 300);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);

        loadGA4().then(() => {
            gtagSafe(() => {
                window.gtag?.('consent', 'update', {
                    analytics_storage: 'granted',
                    ad_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                });
                window.gtag?.('config', 'G-6PQLCN9TKL', { send_page_view: true });
            });
        });
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 z-50 ...">
            <p>{t('privacy.popup-text')}</p>
            <Button onClick={acceptCookies}>{t('privacy.popup-button')}</Button>
        </div>
    );
}
