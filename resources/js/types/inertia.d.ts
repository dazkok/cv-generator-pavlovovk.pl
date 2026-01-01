import '@inertiajs/core';

type TranslationTree = Record<string, unknown>;

declare module '@inertiajs/core' {
    interface PageProps {
        locale: string;
        translations: TranslationTree;
    }
}
