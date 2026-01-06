import { useI18n } from '@/hooks/useI18n';

export default function Footer() {
    const { locale } = useI18n();

    return (
        <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto flex max-w-6xl justify-between px-6 py-6 text-sm text-zinc-500">
                <span>© {new Date().getFullYear()} Pavlo Vovk</span>

                <span className="flex gap-4">
                    <a
                        href={`/${locale}/privacy`}
                        className="underline transition hover:text-zinc-700 dark:hover:text-zinc-300"
                    >
                        Privacy Policy
                    </a>

                    <span>Laravel · React · Inertia</span>
                </span>
            </div>
        </footer>
    );
}
