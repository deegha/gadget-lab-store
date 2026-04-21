import { HeroSection } from '@/components/home/HeroSection';
import { CatalogSection } from '@/components/home/CatalogSection';
import { PromoBanner } from '@/components/home/PromoBanner';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { PartnerLogos } from '@/components/home/PartnerLogos';
import { productService } from '@/services/productService';

export default async function HomePage() {
  const [categories, featured] = await Promise.all([
    productService.getCategories(),
    productService.getFeatured(),
  ]);

  return (
    <>
      <HeroSection />
      <CatalogSection categories={categories} />
      <PromoBanner />
      <FeaturedProducts products={featured} />
      <PartnerLogos />
    </>
  );
}
