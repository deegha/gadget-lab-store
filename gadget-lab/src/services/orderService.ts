import { DUMMY_ORDER } from '@/data/dummy';
import type { Order } from '@/types';

export const orderService = {
  async getOrder(orderId: string): Promise<Order | null> {
    if (orderId === DUMMY_ORDER.id) return DUMMY_ORDER;
    return DUMMY_ORDER;
  },

  async placeOrder(): Promise<Order> {
    return DUMMY_ORDER;
  },
};
