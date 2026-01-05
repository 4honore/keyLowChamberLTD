import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    onClick,
    type = 'button',
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-md transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantStyles = {
        primary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
        secondary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-600',
    };

    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-2.5 text-base',
        large: 'px-8 py-3 text-lg',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {children}
        </button>
    );
}
