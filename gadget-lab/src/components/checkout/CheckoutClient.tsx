'use client';

import { useState } from 'react';
import { ShippingForm } from '@/components/checkout/ShippingForm';
import { DeliveryMode } from '@/components/checkout/DeliveryMode';
import { PaymentMethod } from '@/components/checkout/PaymentMethod';
import { OrderManifest } from '@/components/checkout/OrderManifest';
import type { Cart, DeliveryOption } from '@/types';

interface CheckoutClientProps {
  cart: Cart;
  deliveryOptions: DeliveryOption[];
}

export function CheckoutClient({ cart, deliveryOptions }: CheckoutClientProps) {
  const [deliveryId, setDeliveryId] = useState(deliveryOptions[0]?.id ?? 'standard');
  const selected = deliveryOptions.find((o) => o.id === deliveryId);
  const deliveryPrice = selected?.price ?? 0;

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="flex-1">
        <ShippingForm />
        <DeliveryMode options={deliveryOptions} selected={deliveryId} onSelect={setDeliveryId} />
        <PaymentMethod />
      </div>
      <div className="w-full md:w-80 shrink-0">
        <OrderManifest cart={cart} deliveryPrice={deliveryPrice} />
      </div>
    </div>
  );
}
