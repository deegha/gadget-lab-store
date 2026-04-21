import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-10 md:pt-12 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
      <div>
        <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-400 mb-3">
          Free shipping on orders over $50
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-4">
          Charge Fast.
          <br />
          <span className="text-red-700">Stay Connected.</span>
        </h1>
        <p className="text-[13px] text-zinc-500 leading-relaxed max-w-xs mb-6">
          USB cables, GaN chargers, multi-port hubs and tough phone cases —
          built for real life.
        </p>
        <div className="flex gap-3">
          <Link href="/shop">
            <Button variant="primary" size="sm">
              Shop Now
            </Button>
          </Link>
          <Link href="/shop?category=usb-c-cables">
            <Button variant="secondary" size="sm">
              View Cables
            </Button>
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex gap-4 mt-6">
          {["Free Returns", "2-Year Warranty", "Fast Shipping"].map((badge) => (
            <div key={badge} className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              <span className="text-[10px] text-zinc-500">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-56 md:h-80 rounded-sm overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1591238372340-7f17c0f0d2f6?w=800"
          alt="USB accessories"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5">
          <p className="text-[9px] tracking-widest uppercase font-bold">
            Nexus 9-in-1 Hub
          </p>
          <p className="text-[11px] font-semibold">$123.00</p>
        </div>
      </div>
    </section>
  );
}
