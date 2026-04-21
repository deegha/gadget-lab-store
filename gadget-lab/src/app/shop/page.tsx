import { CategoryFilter } from '@/components/shop/CategoryFilter';
import { MobileCategoryFilter } from '@/components/shop/MobileCategoryFilter';
import { ProductCard } from '@/components/shop/ProductCard';
import { EngineeringStandard } from '@/components/shop/EngineeringStandard';
import { productService } from '@/services/productService';

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category } = await searchParams;

  const [products, categories] = await Promise.all([
    category ? productService.getByCategory(category) : productService.getAll(),
    productService.getCategories(),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <div className="mb-2">
        <p className="text-[9px] tracking-widest uppercase text-zinc-400">Browse by</p>
        <span className="text-[9px] tracking-widest uppercase text-red-700 font-medium">All Items</span>
      </div>

      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Shop All</h1>
          <p className="text-[11px] text-zinc-500 mt-1 max-w-sm hidden md:block">
            USB cables, fast chargers, multi-port hubs and phone cases — engineered for everyday performance.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-auto">
          <span className="text-[10px] text-zinc-500">{products.length} Items</span>
        </div>
      </div>

      {/* Mobile: horizontal pill filter */}
      <div className="md:hidden mb-4">
        <MobileCategoryFilter categories={categories} />
      </div>

      <div className="flex gap-10 mt-4 md:mt-8">
        {/* Desktop: sidebar filter */}
        <div className="hidden md:block">
          <CategoryFilter categories={categories} />
        </div>

        <div className="flex-1 min-w-0">
          {products.some((p) => p.quickShip) && (
            <p className="text-[9px] tracking-widest uppercase text-red-700 font-medium mb-4">
              ✦ Quick Ship Available
            </p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <EngineeringStandard />
    </div>
  );
}
