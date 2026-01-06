import { useI18n } from '@/hooks/useI18n';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';

export default function Privacy() {
    const { t } = useI18n();

    return (
        <div className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="mb-8 text-3xl font-bold">{t('privacy.title')}</h1>

            <section className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">
                    {t('privacy.data_we_collect_title')}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.data_we_collect')}
                </p>
            </section>

            <section className="mb-6">
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.how_we_use')}
                </p>
            </section>

            <section className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">
                    {t('privacy.google_analytics_title')}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.google_analytics')}
                </p>
            </section>

            <section className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">
                    {t('privacy.data_retention_title')}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.data_retention')}
                </p>
            </section>

            <section className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">
                    {t('privacy.legal_basis_title')}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.legal_basis')}
                </p>
            </section>

            <section className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">
                    {t('privacy.your_rights_title')}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.your_rights')}
                </p>
            </section>

            <section className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">
                    {t('privacy.cookies_usage_title')}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.cookies_usage')}
                </p>
            </section>

            <section className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">
                    {t('privacy.contact_title')}
                </h2>
                <p className="text-neutral-800 dark:text-neutral-200">
                    {t('privacy.contact')}
                </p>
            </section>
        </div>
    );
}

Privacy.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
