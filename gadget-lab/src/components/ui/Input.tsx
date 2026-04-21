import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = '', id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-[9px] tracking-widest uppercase text-zinc-500">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full border-b border-zinc-300 bg-transparent py-3 md:py-2 text-sm text-black placeholder:text-zinc-400 focus:border-black focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
