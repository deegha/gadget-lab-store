'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Search } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
}

export function Navbar({ cartCount }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 flex items-center gap-4 md:gap-6">
        <Link href="/" className="shrink-0">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Gadget Lab</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-wider transition-colors ${
                pathname === link.href
                  ? 'text-black font-medium'
                  : 'text-zinc-500 hover:text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <div className="hidden md:flex items-center gap-2 border border-zinc-200 px-3 py-1.5 rounded-sm">
            <Search size={12} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Search cables, chargers, hubs..."
              className="text-[11px] w-44 bg-transparent focus:outline-none placeholder:text-zinc-400"
            />
          </div>

          <Link href="/cart" className="relative p-2 md:hidden">
            <ShoppingCart size={20} className="text-black" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative p-1 hidden md:block">
            <ShoppingCart size={16} className="text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
