import type { Product } from '@/types';

interface SpecsSectionProps {
  product: Product;
}

const ENGINEERING_FEATURES = [
  {
    title: 'Thermal Management',
    description:
      'Integrated P-Marker chips balance voltage and heat dissipation during 240W peak loads, ensuring device battery longevity.',
  },
  {
    title: 'Structural Integrity',
    description:
      'Tested for 30,000+ bends at critical stress points. The reinforced neck design eliminates common point-of-failure issues.',
  },
  {
    title: 'High-Speed Sync',
    description:
      'USB 3.2 Gen 2×2 compatibility supports data transfer speeds up to 20Gbps for instantaneous file handling.',
  },
];

export function SpecsSection({ product }: SpecsSectionProps) {
  return (
    <section className="mt-20 border-t border-zinc-100 pt-12">
      <h2 className="text-xl font-bold mb-8">The Engineering Standard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {ENGINEERING_FEATURES.map((feat) => (
            <div key={feat.title}>
              <p className="text-sm font-semibold mb-2">{feat.title}</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-50 p-6">
          <p className="text-[9px] tracking-widest uppercase text-zinc-400 mb-5">Detailed Specs</p>
          <div className="space-y-3">
            {product.detailedSpecs.map((spec) => (
              <div key={spec.label} className="flex justify-between border-b border-zinc-200 pb-3">
                <span className="text-[10px] text-zinc-500">{spec.label}</span>
                <span className="text-[11px] font-medium text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
