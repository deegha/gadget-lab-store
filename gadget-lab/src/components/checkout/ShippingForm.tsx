import { Input } from '@/components/ui/Input';

export function ShippingForm() {
  return (
    <section>
      <h2 className="text-[11px] font-semibold tracking-widest uppercase mb-6">
        <span className="text-zinc-400 mr-2">01.</span>Shipping Destination
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        <Input id="firstName" label="First Name" placeholder="Alexander" />
        <Input id="lastName" label="Last Name" placeholder="Vance" />
        <div className="col-span-2">
          <Input id="street" label="Street Address" placeholder="1280 Precision Avenue, Suite 4B" />
        </div>
        <Input id="city" label="City" placeholder="San Francisco" />
        <Input id="state" label="State" placeholder="CA" />
        <Input id="postal" label="Postal" placeholder="94105" />
      </div>
    </section>
  );
}
