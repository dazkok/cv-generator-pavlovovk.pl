import React from 'react';

type InputProps = {
    id: string;
    name: string;
    type?: 'text' | 'email' | 'textarea';
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
};

const Input: React.FC<InputProps> = ({
    id,
    name,
    type = 'text',
    label,
    value,
    onChange,
    error,
    placeholder = '',
    required = false,
    className = '',
}) => {
    const baseClasses = 'w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-brand-500 focus:ring focus:ring-brand-200/50 focus:outline-none';
    const errorClasses = 'border-red-500';
    const textareaClasses = 'min-h-[120px] resize-y';

    return (
        <div className={`text-start ${className}`}>
            {label && (
                <label
                    htmlFor={id}
                    className="sr-only text-sm font-medium text-neutral-700 dark:text-neutral-200"
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`${baseClasses} ${error ? errorClasses : ''} ${textareaClasses}`}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`${baseClasses} ${error ? errorClasses : ''}`}
                />
            )}
            {error && (
                <div className="text-xs text-red-500 mt-2">{error}</div>
            )}
        </div>
    );
};

export default Input;
