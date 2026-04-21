export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  image: string;
  description: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  series: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  categorySlug: string;
  inStock: boolean;
  quickShip: boolean;
  specs: ProductSpec[];
  detailedSpecs: ProductSpec[];
  description: string;
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  body: string;
  productId: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  variantLabel?: string;
  variantValue?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number | 'calculated';
  tax: number;
  total: number;
}

export interface DeliveryOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: ShippingAddress;
  deliveryOption: DeliveryOption;
  estimatedArrival: string;
  placedAt: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  postal: string;
  country: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  image: string;
}
