import { usePage } from '@inertiajs/react';

type Translations = Record<string, Record<string, string>>;

export function useI18n() {
    const { translations } = usePage().props as unknown as {
        translations: Translations;
    };

    const t = (key: string): string => {
        const [group, value] = key.split('.');

        return translations?.[group]?.[value] ?? key;
    };

    return { t };
}
