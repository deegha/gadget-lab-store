import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { orderService } from '@/services/orderService';

const ORDER_ID = 'GL-88204';

export default async function OrderConfirmationPage() {
  const order = await orderService.getOrder(ORDER_ID);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-sm text-zinc-500">Order not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
      <div className="text-center mb-10 md:mb-16">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="w-24 h-24 bg-zinc-100 flex items-center justify-center">
            <Check size={32} className="text-black" />
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-700" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none mb-4">
          Thank You for Your Order
        </h1>
        <p className="text-[12px] text-zinc-500 leading-relaxed max-w-sm mx-auto">
          Your order has been placed successfully.{' '}
          <span className="text-black font-semibold">Order #{order.id}.</span> Tracking details
          will be sent via email.
        </p>
        <p className="text-[11px] text-zinc-400 mt-3">
          Contact us on WhatsApp with your order number for any queries.
        </p>
        <Link href="/shop" className="mt-8 inline-block">
          <Button variant="outline" size="md">Continue Shopping</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-5">Manifest</p>
          <div className="space-y-6">
            {order.items.map((item) => (
              <div key={item.productId} className="flex gap-4 border-b border-zinc-100 pb-6">
                <div className="relative w-16 h-16 bg-zinc-100 shrink-0">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="64px" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold">{item.product.name}</p>
                  <div className="grid grid-cols-2 gap-x-4 mt-2">
                    {item.product.specs.slice(0, 2).map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[9px] tracking-widest uppercase text-zinc-400">{spec.label}</p>
                        <p className="text-[10px]">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-semibold">${item.product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-50 p-6 h-fit">
          <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-5">Logistics</p>

          <div className="mb-5">
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-2">Delivery Address</p>
            <p className="text-xs leading-relaxed">
              {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              <br />
              {order.shippingAddress.street}
              <br />
              {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
              {order.shippingAddress.postal}
              <br />
              {order.shippingAddress.country}
            </p>
          </div>

          <div className="mb-6">
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-2">Estimated Arrival</p>
            <p className="text-xl font-bold">{order.estimatedArrival}</p>
          </div>

          <div className="border-t border-zinc-200 pt-4 space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-zinc-500">Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-zinc-500">Shipping</span>
              <span>{order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}</span>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-4 mt-4">
            <div className="flex justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider">Total</span>
              <span className="text-lg font-bold">${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
