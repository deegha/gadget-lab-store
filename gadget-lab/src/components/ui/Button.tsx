import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: never;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium tracking-widest uppercase transition-colors cursor-pointer';

  const variants = {
    primary: 'bg-black text-white hover:bg-zinc-800',
    secondary: 'bg-white text-black border border-black hover:bg-zinc-100',
    outline: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
  };

  const sizes = {
    sm: 'text-[10px] px-4 py-2',
    md: 'text-xs px-6 py-3',
    lg: 'text-xs px-8 py-4',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
