export default function Footer() {
    return (
        <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
            <div className="mx-auto flex max-w-6xl justify-between px-6 py-6 text-sm text-zinc-500">
                <span>© {new Date().getFullYear()} Pavlovok</span>

                <span>Laravel · React · Inertia</span>
            </div>
        </footer>
    );
}
