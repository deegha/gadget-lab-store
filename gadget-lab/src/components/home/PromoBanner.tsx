import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function PromoBanner() {
  return (
    <section className="relative bg-black text-white overflow-hidden my-8 md:my-12">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&q=80"
          alt="USB-C Cables"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-400 mb-3">PRECISION SERIES</p>
        <h2 className="text-3xl md:text-6xl font-bold leading-none tracking-tight mb-4">
          100W IN
          <br />
          YOUR POCKET.
        </h2>
        <p className="text-[12px] text-zinc-300 leading-relaxed max-w-sm mb-6">
          Titan Series USB-C cable. Kevlar-reinforced, aluminium connectors, rated for 30,000+ bends and 100W power delivery.
        </p>
        <div className="flex gap-3">
          <Link href="/shop/titan-series-usb-c-cable">
            <Button variant="secondary" size="sm">Shop Cables</Button>
          </Link>
          <Link href="/shop?category=wall-chargers">
            <Button variant="primary" size="sm">View Chargers</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
