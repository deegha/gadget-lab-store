export function PartnerLogos() {
  const features = [
    { label: '100W PD', sub: 'USB-C Cables' },
    { label: 'GaN V.3', sub: 'Fast Chargers' },
    { label: '9-in-1', sub: 'USB Hubs' },
    { label: 'MIL-810G', sub: 'Phone Cases' },
  ];

  return (
    <section className="border-t border-zinc-100 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-400 text-center mb-6">Why Gadget Lab</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.label} className="text-center border border-zinc-100 py-6 px-4">
              <p className="text-lg font-bold tracking-tight">{f.label}</p>
              <p className="text-[10px] text-zinc-500 tracking-widest uppercase mt-1">{f.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
