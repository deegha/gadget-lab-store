'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
        <Image src={images[active]} alt={name} fill className="object-cover" priority />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-20 h-16 bg-zinc-100 overflow-hidden border-2 transition-colors ${
                active === i ? 'border-black' : 'border-transparent'
              }`}
            >
              <Image src={img} alt={`${name} view ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
