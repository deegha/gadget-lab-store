'use client';

import { useState } from 'react';
import { CreditCard } from 'lucide-react';
import { Input } from '@/components/ui/Input';

export function PaymentMethod() {
  const [method, setMethod] = useState<'card' | 'paypal'>('card');

  return (
    <section className="mt-10">
      <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-6">
        <span className="text-zinc-400 mr-2">03.</span>Payment Method
      </h2>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setMethod('card')}
          className={`flex items-center gap-2 px-6 py-2.5 text-xs font-medium tracking-wider border transition-colors ${
            method === 'card' ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-200'
          }`}
        >
          <CreditCard size={12} />
          Credit Card
        </button>
        <button
          onClick={() => setMethod('paypal')}
          className={`flex items-center gap-2 px-6 py-2.5 text-xs font-medium tracking-wider border transition-colors ${
            method === 'paypal' ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-200'
          }`}
        >
          <span className="text-blue-600 font-bold text-xs">P</span>
          PayPal
        </button>
      </div>

      {method === 'card' && (
        <div className="space-y-5">
          <Input id="cardNumber" label="Card Number" placeholder="0000 0000 0000 0000" />
          <div className="grid grid-cols-2 gap-6">
            <Input id="expiry" label="Expiry Date" placeholder="MM / YY" />
            <Input id="cvv" label="Security Code" placeholder="CVV" />
          </div>
        </div>
      )}
    </section>
  );
}
