import { CheckoutClient } from '@/components/checkout/CheckoutClient';
import { cartService } from '@/services/cartService';

export default async function CheckoutPage() {
  const [cart, deliveryOptions] = await Promise.all([
    cartService.getCart(),
    cartService.getDeliveryOptions(),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      <div className="mb-6 md:mb-10">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase">Checkout</h1>
        <p className="text-[10px] tracking-widest uppercase text-zinc-400 mt-1">
          Secure & Encrypted
        </p>
      </div>

      <CheckoutClient cart={cart} deliveryOptions={deliveryOptions} />
    </div>
  );
}
