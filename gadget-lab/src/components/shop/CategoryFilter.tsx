'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import type { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
}

const COMPATIBILITY = ['USB-C', 'THUNDERBOLT', 'MAGSAFE', 'USB-A'];

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get('category') ?? '';

  function select(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set('category', slug);
    } else {
      params.delete('category');
    }
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <aside className="w-44 shrink-0">
      <div className="mb-8">
        <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-3">Category</p>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => select('')}
              className={`w-full flex items-center justify-between text-xs py-1 transition-colors ${
                selected === '' ? 'text-black font-medium' : 'text-zinc-500 hover:text-black'
              }`}
            >
              All Accessories
              <span className="text-zinc-400 text-[10px]">
                {categories.reduce((s, c) => s + c.count, 0)}
              </span>
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => select(cat.slug)}
                className={`w-full flex items-center justify-between text-xs py-1 transition-colors ${
                  selected === cat.slug ? 'text-black font-medium' : 'text-zinc-500 hover:text-black'
                }`}
              >
                {cat.name}
                <ChevronRight size={10} className="text-zinc-300" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-3">Compatibility</p>
        <div className="flex flex-wrap gap-2">
          {COMPATIBILITY.map((item) => (
            <button
              key={item}
              className="text-[9px] tracking-wider border border-zinc-200 px-2 py-1 hover:border-black transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
