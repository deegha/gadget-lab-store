import { Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import type { Review } from '@/types';

interface FieldReportsProps {
  reviews: Review[];
}

export function FieldReports({ reviews }: FieldReportsProps) {
  return (
    <section className="mt-20 border-t border-zinc-100 pt-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold">Field Reports</h2>
          <p className="text-[10px] text-zinc-500 mt-1">Verified performance feedback from our community.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className="fill-black text-black" />
            ))}
            <span className="text-sm font-bold ml-1">4.9</span>
          </div>
          <Button variant="primary" size="sm">Submit Review</Button>
        </div>
      </div>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border border-zinc-100 p-5">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={10} className="fill-black text-black" />
                ))}
              </div>
              <p className="text-[11px] text-zinc-600 leading-relaxed mb-4">{review.body}</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center">
                  <span className="text-[9px] font-bold">{review.author[0]}</span>
                </div>
                <span className="text-[9px] tracking-widest uppercase text-zinc-400">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[11px] text-zinc-400">No reviews yet. Be the first to share your experience.</p>
      )}
    </section>
  );
}
