// ── Enums ─────────────────────────────────────────────────────────────────────

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'REFUNDED'

export type UserRole = 'CUSTOMER' | 'ADMIN'

export type CouponType = 'PERCENT' | 'FIXED'

// ── Catalog ───────────────────────────────────────────────────────────────────

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  imageUrl: string | null
  parentId: string | null
  productCount?: number
}

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductVariant {
  id: string
  name: string
  options: Record<string, string>
  price: number
  stock: number
  sku: string
}

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  compareAtPrice: number | null
  stock: number
  sku: string
  categoryId: string
  category?: Category
  images: string[]
  specs: ProductSpec[]
  badges: string[]
  isFeatured: boolean
  isActive: boolean
  variants?: ProductVariant[]
  averageRating?: number
  reviewCount?: number
}

// ── Reviews ───────────────────────────────────────────────────────────────────

export interface Review {
  id: string
  productId: string
  orderId: string
  reviewerEmail: string
  rating: number
  title: string
  body: string
  isVerifiedPurchase: boolean
  createdAt: string
}

// ── Cart ──────────────────────────────────────────────────────────────────────

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  variantId?: string
  variantLabel?: string
}

export interface Cart {
  id: string
  items: CartItem[]
  couponCode: string | null
  subtotal: number
  discount: number
  shipping: number | 'calculated'
  tax: number
  total: number
}

// ── Orders ────────────────────────────────────────────────────────────────────

export interface ShippingAddress {
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  postal: string
  country: string
}

export interface OrderItem {
  productId: string
  name: string
  image: string
  price: number
  quantity: number
  variantLabel?: string
}

export interface OrderStatusEntry {
  id: string
  status: OrderStatus
  note: string | null
  createdAt: string
}

export interface Order {
  id: string
  customerEmail: string
  customerName: string
  status: OrderStatus
  items: OrderItem[]
  shippingAddress: ShippingAddress
  subtotal: number
  discount: number
  shippingCost: number
  tax: number
  total: number
  couponCode: string | null
  trackingNumber: string | null
  notes: string | null
  statusHistory?: OrderStatusEntry[]
  createdAt: string
  updatedAt: string
}

// ── Coupons ───────────────────────────────────────────────────────────────────

export interface Coupon {
  id: string
  code: string
  type: CouponType
  value: number
  minOrderAmount: number | null
  maxUses: number | null
  usedCount: number
  applicableProductIds: string[]
  applicableCategoryIds: string[]
  expiresAt: string | null
  isActive: boolean
}

// ── Users ─────────────────────────────────────────────────────────────────────

export interface User {
  id: string
  email: string
  name: string
  phone: string | null
  role: UserRole
  isActive: boolean
  createdAt: string
}

// ── Blog ──────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string | null
  isPublished: boolean
  publishedAt: string | null
}

export interface BlogPostDetail extends BlogPost {
  html: string
}

// ── Auth ──────────────────────────────────────────────────────────────────────

export interface AuthTokens {
  accessToken: string
}

export interface AuthUser {
  id: string
  email: string
  name: string
  role: UserRole
}

// ── API responses ─────────────────────────────────────────────────────────────

export interface ApiError {
  error: string
  code?: string
  details?: unknown
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
