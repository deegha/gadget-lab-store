import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <h2 className="text-base md:text-lg font-semibold tracking-tight">Best Sellers</h2>
        <Link href="/shop" className="text-[10px] tracking-widest uppercase text-zinc-500 hover:text-black transition-colors">
          View All
        </Link>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:hidden scrollbar-hide">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.slug}`} className="shrink-0 w-40 group active:opacity-90">
            <div className="relative aspect-square bg-zinc-100 mb-2 overflow-hidden rounded-sm">
              {product.badge && (
                <span className="absolute top-2 left-2 z-10 bg-red-700 text-white text-[8px] tracking-widest uppercase px-2 py-0.5">
                  {product.badge}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-0.5">{product.series}</p>
            <p className="text-xs font-medium leading-snug">{product.name}</p>
            <p className="text-xs font-semibold mt-0.5">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.slug}`} className="group">
            <div className="relative aspect-square bg-zinc-100 mb-3 overflow-hidden">
              {product.badge && (
                <span className="absolute top-2 left-2 z-10 bg-red-700 text-white text-[8px] tracking-widest uppercase px-2 py-0.5">
                  {product.badge}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="25vw"
              />
            </div>
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-0.5">{product.series}</p>
            <p className="text-xs font-medium">{product.name}</p>
            <p className="text-xs text-zinc-500">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
