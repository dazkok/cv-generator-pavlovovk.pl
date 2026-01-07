import { router } from '@inertiajs/react';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseButtonProps {
    variant?: ButtonVariant;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
    className?: string;
}

type ButtonProps = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<AnchorHTMLAttributes<HTMLAnchorElement>> & {
        href?: string;
    };

const variantStyles: Record<ButtonVariant, string> = {
    primary: `
        bg-brand-500
        text-white
        hover:opacity-90
        hover:shadow-lg
        active:opacity-80
        disabled:opacity-50

        dark:bg-brand-400
        dark:hover:opacity-90
        dark:active:opacity-80
    `,
    secondary: `
        bg-neutral-100
        text-neutral-900
        hover:bg-neutral-200
        hover:shadow-sm
        disabled:opacity-50

        dark:bg-neutral-800
        dark:text-neutral-100
        dark:hover:bg-neutral-700
    `,
    ghost: `
        bg-transparent
        text-neutral-600
        hover:text-neutral-900
        disabled:opacity-40

        dark:text-neutral-400
        dark:hover:text-neutral-200
    `,
};

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    type = 'button',
    icon,
    iconPosition = 'left',
    isLoading = false,
    fullWidth = false,
    href,
    children,
    className = '',
    onClick,
    ...props
}) => {
    const baseClasses = `
        inline-flex items-center justify-center
        rounded-full
        px-8 py-3
        text-sm font-medium
        transition-all duration-300
        focus-visible:ring-2
        focus-visible:ring-brand-400/60
        dark:focus-visible:ring-brand-300/40
        disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
    `;

    if (href) {
        const isExternal = href.startsWith('http');
        // Перевіряємо, чи це файл для завантаження (PDF, ZIP, тощо)
        const isFileDownload =
            /\.(pdf|doc|docx|xls|xlsx|zip|rar|jpg|jpeg|png|gif|svg|mp4|mp3)$/i.test(
                href,
            );
        const hasDownloadAttr = 'download' in props;

        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            onClick?.(e as never);
            if (e.defaultPrevented) return;

            // Дозволяємо стандартну поведінку для:
            // 1. Зовнішніх посилань
            // 2. Файлів для завантаження
            // 3. Якщо є атрибут download
            if (isExternal || isFileDownload || hasDownloadAttr) {
                return; // Дозволяємо браузеру обробити стандартним чином
            }

            // Тільки для внутрішніх навігаційних посилань використовуємо Inertia
            e.preventDefault();
            router.visit(href);
        };

        return (
            <a
                href={href}
                className={baseClasses}
                onClick={handleClick}
                {...props}
            >
                {isLoading ? (
                    <span className="opacity-80">Loading…</span>
                ) : (
                    <>
                        {icon && iconPosition === 'left' && (
                            <span className="mr-2 flex items-center">
                                {icon}
                            </span>
                        )}
                        {children}
                        {icon && iconPosition === 'right' && (
                            <span className="ml-2 flex items-center">
                                {icon}
                            </span>
                        )}
                    </>
                )}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={baseClasses}
            disabled={isLoading}
            onClick={onClick}
            {...props}
        >
            {isLoading ? (
                <span className="opacity-80">Loading…</span>
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <span className="mr-2 flex items-center">{icon}</span>
                    )}
                    {children}
                    {icon && iconPosition === 'right' && (
                        <span className="ml-2 flex items-center">{icon}</span>
                    )}
                </>
            )}
        </button>
    );
};

export default Button;
