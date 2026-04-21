import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Cart } from '@/types';

interface OrderSummaryPanelProps {
  cart: Cart;
}

export function OrderSummaryPanel({ cart }: OrderSummaryPanelProps) {
  return (
    <div className="bg-zinc-50 p-6 h-fit">
      <p className="text-[9px] tracking-widest uppercase text-zinc-500 mb-5">Order Summary</p>

      <div className="space-y-3 mb-5">
        <div className="flex justify-between text-xs">
          <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Subtotal</span>
          <span>${cart.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Estimated Shipping</span>
          <span className="text-[10px] text-zinc-400">
            {cart.shipping === 'calculated' ? 'Calculated at checkout' : `$${cart.shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Tax (Estimated)</span>
          <span>${cart.tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t border-zinc-200 pt-4 mb-6">
        <div className="flex justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider">Total</span>
          <span className="text-xl font-bold">${cart.total.toFixed(2)}</span>
        </div>
      </div>

      <Link href="/checkout">
        <Button variant="primary" className="w-full">Proceed to Checkout →</Button>
      </Link>

      <div className="flex items-start gap-2 mt-5 p-3 bg-white border border-zinc-100">
        <ShieldCheck size={14} className="text-zinc-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-[9px] font-semibold tracking-widest uppercase text-zinc-600">Encrypted Checkout</p>
          <p className="text-[9px] text-zinc-400 leading-relaxed mt-0.5">
            Your transaction is secured with 256-bit SSL encryption and technical safeguards.
          </p>
        </div>
      </div>
    </div>
  );
}
