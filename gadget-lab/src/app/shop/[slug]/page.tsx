import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { SpecsSection } from '@/components/product/SpecsSection';
import { FieldReports } from '@/components/product/FieldReports';
import { SimilarProducts } from '@/components/product/SimilarProducts';
import { productService } from '@/services/productService';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await productService.getBySlug(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-sm text-zinc-500">Product not found.</p>
        <Link href="/shop" className="text-xs underline mt-4 block">Back to Shop</Link>
      </div>
    );
  }

  const [reviews, similar] = await Promise.all([
    productService.getReviews(product.id),
    productService.getSimilar(product.id, product.categorySlug),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
      <nav className="flex items-center gap-1.5 text-[10px] text-zinc-400 mb-6 md:mb-8">
        <Link href="/" className="hover:text-black">Home</Link>
        <ChevronRight size={10} />
        <Link href="/shop" className="hover:text-black">Shop</Link>
        <ChevronRight size={10} />
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      <SpecsSection product={product} />
      <FieldReports reviews={reviews} />
      <SimilarProducts products={similar} />
    </div>
  );
}
