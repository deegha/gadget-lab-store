'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { Category } from '@/types';

interface MobileCategoryFilterProps {
  categories: Category[];
}

export function MobileCategoryFilter({ categories }: MobileCategoryFilterProps) {
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

  const all = [{ id: 'all', name: 'All', slug: '' }, ...categories];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
      {all.map((cat) => {
        const active = selected === cat.slug;
        return (
          <button
            key={cat.id}
            onClick={() => select(cat.slug)}
            className={`shrink-0 text-[11px] font-medium tracking-wide px-4 py-2 rounded-full border transition-colors ${
              active
                ? 'bg-black text-white border-black'
                : 'bg-white text-zinc-600 border-zinc-200 active:bg-zinc-50'
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
