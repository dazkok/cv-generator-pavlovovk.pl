import { usePage } from '@inertiajs/react';

export function useI18n() {
    const { translations, locale } = usePage().props as { translations: Record<string, unknown>; locale: string };

    const t = (key: string): string => {
        const value = key
            .split('.')
            .reduce<unknown>(
                (acc, part) =>
                    acc && typeof acc === 'object'
                        ? (acc as Record<string, unknown>)[part]
                        : undefined,
                translations,
            );

        return typeof value === 'string' ? value : key;
    };

    return { t, locale };
}
