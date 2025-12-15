const NAV_ITEMS = [
    { href: '/about', label: 'About' },
    { href: '/articles', label: 'Articles' },
    { href: '/projects', label: 'Projects' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/uses', label: 'Uses' },
] as const;

export default function Navigation() {
    return (
        <nav className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                        <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href={item.href}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
