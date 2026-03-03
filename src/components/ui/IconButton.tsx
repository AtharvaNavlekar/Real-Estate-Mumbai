import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'motion/react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function IconButton({
    variant = 'default',
    size = 'md',
    className = '',
    children,
    ...props
}: IconButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full transition-colors';

    const variants = {
        default: 'bg-white text-slate-400 hover:text-amber-500 hover:shadow-md border border-slate-100',
        ghost: 'bg-transparent text-slate-400 hover:bg-slate-100 hover:text-slate-800',
        glass: 'bg-white/80 backdrop-blur-md text-v-black hover:bg-white hover:text-v-blue shadow-sm border border-white/20'
    };

    const sizes = {
        sm: 'w-8 h-8 [&>svg]:w-4 [&>svg]:h-4',
        md: 'w-11 h-11 [&>svg]:w-5 [&>svg]:h-5',
        lg: 'w-14 h-14 [&>svg]:w-6 [&>svg]:h-6'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...(props as any)}
        >
            {children}
        </motion.button>
    );
}
