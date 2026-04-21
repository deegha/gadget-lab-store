import Link from 'next/link';
import { Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-400 mb-2">{product.series}</p>
      <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
      <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6 border-t border-zinc-100 pt-6">
        {product.specs.map((spec) => (
          <div key={spec.label} className="flex justify-between py-1 border-b border-zinc-100">
            <span className="text-[9px] tracking-widest uppercase text-zinc-400">{spec.label}</span>
            <span className="text-[11px] font-medium text-right">{spec.value}</span>
          </div>
        ))}
      </div>

      <p className="text-[12px] text-zinc-500 leading-relaxed mb-8">{product.description}</p>

      <div className="space-y-3 mb-8">
        <Button variant="primary" className="w-full">Add to Cart</Button>
        <Button variant="outline" className="w-full">Technical Whitepaper</Button>
      </div>

      <div className="flex items-center gap-6 text-[10px] text-zinc-500 tracking-wide">
        <div className="flex items-center gap-1.5">
          <Shield size={11} />
          <span>1 Year Warranty</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck size={11} />
          <span>Express US & Intl.</span>
        </div>
        <div className="flex items-center gap-1.5">
          <RotateCcw size={11} />
          <span>60-Day Returns</span>
        </div>
      </div>
    </div>
  );
}
