'use client';

import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import type { CartItem } from '@/types';

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  return (
    <div className="flex gap-3 md:gap-5 py-5 border-b border-zinc-100">
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-zinc-100 shrink-0">
        <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-0.5">{item.product.series}</p>
            <p className="text-sm font-semibold uppercase tracking-wide">{item.product.name}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
            <p className="text-[10px] text-green-700 font-medium tracking-wider uppercase mt-0.5">In Stock</p>
          </div>
        </div>

        {item.variantLabel && (
          <div className="flex gap-6 mt-2">
            <div>
              <span className="text-[9px] tracking-widest uppercase text-zinc-400">{item.variantLabel} </span>
              <span className="text-[11px]">{item.variantValue}</span>
            </div>
            {item.product.specs[1] && (
              <div>
                <span className="text-[9px] tracking-widest uppercase text-zinc-400">{item.product.specs[1].label} </span>
                <span className="text-[11px]">{item.product.specs[1].value}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border border-zinc-200">
            <button className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-black text-sm">
              −
            </button>
            <span className="w-8 text-center text-xs">{item.quantity}</span>
            <button className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:text-black text-sm">
              +
            </button>
          </div>
          <button className="flex items-center gap-1 text-[10px] tracking-widest uppercase text-zinc-400 hover:text-black transition-colors">
            <Trash2 size={10} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
