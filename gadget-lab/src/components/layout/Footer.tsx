import Link from 'next/link';

export function Footer() {
  return (
    <footer className="hidden md:block bg-white border-t border-zinc-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Gadget Lab</p>
            <p className="text-[11px] text-zinc-500 leading-relaxed max-w-[180px]">
              Premium USB cables, fast chargers, USB hubs and phone covers. Built to last.
            </p>
          </div>

          <div>
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-4">Catalog</p>
            <ul className="space-y-2">
              {['USB-C Cables', 'Wall Chargers', 'USB Hubs', 'Phone Cases'].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-[11px] text-zinc-500 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-4">Journal</p>
            <ul className="space-y-2">
              {['Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-[11px] text-zinc-500 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-4">Legal</p>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-[11px] text-zinc-500 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-4">Support</p>
            <ul className="space-y-2">
              {['Technical Support', 'Shipping & Returns', 'Warranty'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-[11px] text-zinc-500 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-zinc-400 tracking-wide">
            © 2024 Gadget Lab. Engineered Precision.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Technical Support', 'Shipping & Returns'].map((item) => (
              <Link key={item} href="/" className="text-[10px] text-zinc-400 hover:text-black transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
