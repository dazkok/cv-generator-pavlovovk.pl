import React from 'react';

interface ContactCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
    icon,
    label,
    value,
    href,
}) => {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 px-5 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-colors group-hover:bg-brand-500/10 group-hover:text-brand-500 dark:bg-neutral-800 dark:text-neutral-400">
                {icon}
            </div>

            <div className="text-left">
                <p className="text-xs tracking-wide text-neutral-500 uppercase">
                    {label}
                </p>
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {value}
                </p>
            </div>
        </a>
    );
};

export default ContactCard;
