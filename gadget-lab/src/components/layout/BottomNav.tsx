'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';

interface BottomNavProps {
  cartCount: number;
}

export function BottomNav({ cartCount }: BottomNavProps) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  const tabs = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/shop', label: 'Shop', icon: ShoppingBag },
  ];

  return (
    <>
      {searchOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setSearchOpen(false)}>
          <div
            className="absolute bottom-16 left-0 right-0 bg-white px-4 py-3 flex items-center gap-3 border-t border-zinc-200"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
          >
            <Search size={16} className="text-zinc-400 shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search cables, chargers, hubs..."
              className="flex-1 text-sm bg-transparent focus:outline-none placeholder:text-zinc-400"
            />
            <button onClick={() => setSearchOpen(false)} className="text-xs text-zinc-500 shrink-0">
              Cancel
            </button>
          </div>
        </div>
      )}

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200 md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex items-stretch h-[58px]">
          {tabs.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || (href === '/shop' && pathname.startsWith('/shop'));
            return (
              <Link
                key={href}
                href={href}
                className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors active:bg-zinc-50 ${
                  active ? 'text-black' : 'text-zinc-400'
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
                <span className="text-[9px] tracking-widest uppercase font-medium">{label}</span>
              </Link>
            );
          })}

          <button
            onClick={() => setSearchOpen(true)}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 text-zinc-400 transition-colors active:bg-zinc-50"
          >
            <Search size={22} strokeWidth={1.5} />
            <span className="text-[9px] tracking-widest uppercase font-medium">Search</span>
          </button>

          <Link
            href="/cart"
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-colors active:bg-zinc-50 ${
              pathname === '/cart' ? 'text-black' : 'text-zinc-400'
            }`}
          >
            <div className="relative">
              <ShoppingCart size={22} strokeWidth={pathname === '/cart' ? 2.5 : 1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[9px] tracking-widest uppercase font-medium">Cart</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
