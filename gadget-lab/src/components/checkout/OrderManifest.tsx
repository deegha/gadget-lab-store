import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { Cart } from '@/types';

interface OrderManifestProps {
  cart: Cart;
  deliveryPrice: number;
}

export function OrderManifest({ cart, deliveryPrice }: OrderManifestProps) {
  return (
    <div className="bg-zinc-50 p-6 h-fit">
      <p className="text-[9px] tracking-widest uppercase text-zinc-500 mb-5">Manifest</p>

      <div className="space-y-4 mb-6">
        {cart.items.map((item) => (
          <div key={item.productId} className="flex gap-3">
            <div className="relative w-12 h-12 bg-zinc-200 shrink-0">
              <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-zinc-500">{item.product.name}</p>
              <p className="text-[9px] text-zinc-400">{item.variantValue}</p>
              <p className="text-[10px] text-zinc-400">Qty: 0{item.quantity}</p>
            </div>
            <p className="text-xs font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-200 pt-4 space-y-2 mb-6">
        <div className="flex justify-between text-[10px]">
          <span className="text-zinc-500">Subtotal</span>
          <span>${cart.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-zinc-500">Shipping</span>
          <span>{deliveryPrice === 0 ? '$0.00' : `$${deliveryPrice.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-zinc-500">Taxes</span>
          <span>${cart.tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t border-zinc-200 pt-4 mb-6">
        <div className="flex justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider">Total</span>
          <span className="text-xl font-bold">${(cart.total + deliveryPrice).toFixed(2)}</span>
        </div>
      </div>

      <Button variant="primary" className="w-full">Place Order →</Button>

      <p className="text-[9px] text-zinc-400 text-center mt-4 leading-relaxed">
        By clicking place order, you agree to our terms of service and precision protocols.
      </p>
    </div>
  );
}
