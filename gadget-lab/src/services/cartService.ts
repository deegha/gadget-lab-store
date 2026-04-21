import { CART, DELIVERY_OPTIONS } from '@/data/dummy';
import type { Cart, DeliveryOption } from '@/types';

export const cartService = {
  async getCart(): Promise<Cart> {
    return CART;
  },

  async getDeliveryOptions(): Promise<DeliveryOption[]> {
    return DELIVERY_OPTIONS;
  },
};
