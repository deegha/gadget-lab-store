import { PRODUCTS, CATEGORIES, REVIEWS } from '@/data/dummy';
import type { Product, Category, Review } from '@/types';

export const productService = {
  async getAll(): Promise<Product[]> {
    return PRODUCTS;
  },

  async getBySlug(slug: string): Promise<Product | null> {
    return PRODUCTS.find((p) => p.slug === slug) ?? null;
  },

  async getByCategory(categorySlug: string): Promise<Product[]> {
    return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
  },

  async getFeatured(): Promise<Product[]> {
    return PRODUCTS.slice(0, 4);
  },

  async getSimilar(productId: string, categorySlug: string): Promise<Product[]> {
    return PRODUCTS.filter((p) => p.categorySlug === categorySlug && p.id !== productId).slice(0, 4);
  },

  async getCategories(): Promise<Category[]> {
    return CATEGORIES;
  },

  async getReviews(productId: string): Promise<Review[]> {
    return REVIEWS.filter((r) => r.productId === productId);
  },
};
