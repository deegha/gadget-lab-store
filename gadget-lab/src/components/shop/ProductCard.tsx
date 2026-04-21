import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block active:opacity-90 transition-opacity">
      <div className="relative aspect-square bg-zinc-100 overflow-hidden mb-2 md:mb-3 rounded-sm">
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 bg-red-700 text-white text-[8px] tracking-widest uppercase px-2 py-0.5">
            {product.badge}
          </span>
        )}
        {product.quickShip && (
          <span className="absolute top-2 right-2 z-10 bg-black text-white text-[8px] tracking-widest uppercase px-2 py-0.5">
            Quick Ship
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <p className="text-[10px] md:text-xs font-medium leading-snug">{product.name}</p>
      <div className="flex items-center gap-2 mt-0.5">
        <p className="text-xs font-semibold">${product.price.toFixed(2)}</p>
        <p className="text-[9px] md:text-[10px] text-zinc-400 truncate">{product.specs[0]?.value}</p>
      </div>
    </Link>
  );
}
