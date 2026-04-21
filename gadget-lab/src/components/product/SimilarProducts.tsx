import { ProductCard } from '@/components/shop/ProductCard';
import type { Product } from '@/types';

interface SimilarProductsProps {
  products: Product[];
}

export function SimilarProducts({ products }: SimilarProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="mt-20 border-t border-zinc-100 pt-12">
      <h2 className="text-xl font-bold mb-8">You May Also Like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
