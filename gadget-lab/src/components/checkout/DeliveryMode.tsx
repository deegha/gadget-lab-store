'use client';

import type { DeliveryOption } from '@/types';

interface DeliveryModeProps {
  options: DeliveryOption[];
  selected: string;
  onSelect: (id: string) => void;
}

export function DeliveryMode({ options, selected, onSelect }: DeliveryModeProps) {
  return (
    <section className="mt-10">
      <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-6">
        <span className="text-zinc-400 mr-2">02.</span>Delivery Mode
      </h2>
      <div className="space-y-3">
        {options.map((opt) => (
          <label
            key={opt.id}
            className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
              selected === opt.id ? 'border-black' : 'border-zinc-200 hover:border-zinc-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="delivery"
                value={opt.id}
                checked={selected === opt.id}
                onChange={() => onSelect(opt.id)}
                className="accent-black"
              />
              <div>
                <p className="text-xs font-semibold tracking-wide">{opt.name}</p>
                <p className="text-[10px] text-zinc-500">{opt.description}</p>
              </div>
            </div>
            <span className="text-xs font-medium">
              {opt.price === 0 ? 'Free' : `$${opt.price.toFixed(2)}`}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}
