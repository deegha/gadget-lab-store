import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CartItemRow } from '@/components/cart/CartItemRow';
import { OrderSummaryPanel } from '@/components/cart/OrderSummaryPanel';
import { cartService } from '@/services/cartService';
import { productService } from '@/services/productService';

export default async function CartPage() {
  const [cart, featured] = await Promise.all([
    cartService.getCart(),
    productService.getFeatured(),
  ]);

  const upsells = featured.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <div className="mb-6">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase">Your Cart</h1>
        <p className="text-[10px] tracking-widest uppercase text-zinc-400 mt-1">
          {cart.items.length} {cart.items.length === 1 ? 'Item' : 'Items'}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="flex-1">
          {cart.items.map((item) => (
            <CartItemRow key={item.productId} item={item} />
          ))}
        </div>
        <div className="w-full md:w-80 shrink-0">
          <OrderSummaryPanel cart={cart} />
        </div>
      </div>

      {upsells.length > 0 && (
        <section className="mt-12 border-t border-zinc-100 pt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-5">You Might Also Need</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {upsells.map((product) => (
              <div key={product.id} className="border border-zinc-100 p-3 md:p-4">
                <div className="relative aspect-square bg-zinc-100 mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-0.5">{product.series}</p>
                <p className="text-xs font-medium mb-0.5 leading-snug">{product.name}</p>
                <p className="text-xs mb-3">${product.price.toFixed(2)}</p>
                <Link href={`/shop/${product.slug}`}>
                  <Button variant="primary" size="sm" className="w-full">View Item</Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
