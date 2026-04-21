import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types';

interface CatalogSectionProps {
  categories: Category[];
}

export function CatalogSection({ categories }: CatalogSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 border-t border-zinc-100">
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <h2 className="text-base md:text-lg font-semibold tracking-tight">Shop by Category</h2>
        <Link href="/shop" className="text-[10px] tracking-widest uppercase text-zinc-500 hover:text-black transition-colors">
          View All
        </Link>
      </div>

      {/* Mobile: 2×2 grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/shop?category=${cat.slug}`}
            className="relative overflow-hidden rounded-sm border border-zinc-100 aspect-square active:opacity-90 transition-opacity"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white text-[11px] font-bold tracking-wide leading-tight">{cat.name}</p>
              <p className="text-white/70 text-[9px] mt-0.5">{cat.count} items</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop: original layout */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {categories[0] && (
          <Link
            href={`/shop?category=${categories[0].slug}`}
            className="col-span-1 row-span-2 border border-zinc-100 p-5 flex flex-col justify-between min-h-[280px] hover:border-zinc-300 transition-colors group"
          >
            <div>
              <p className="text-sm font-medium">{categories[0].name}</p>
              <p className="text-[10px] text-zinc-500 mt-1">{categories[0].description}</p>
            </div>
            <div className="relative h-44 -mx-2 -mb-2">
              <Image
                src={categories[0].image}
                alt={categories[0].name}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 gap-4 col-span-2">
          {categories.slice(1).map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="border border-zinc-100 p-4 flex items-center justify-between hover:border-zinc-300 transition-colors group"
            >
              <div>
                <p className="text-sm font-medium">{cat.name}</p>
                <p className="text-[10px] text-zinc-500">{cat.description}</p>
              </div>
              <div className="relative w-20 h-16 shrink-0">
                <Image src={cat.image} alt={cat.name} fill className="object-cover" sizes="80px" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
