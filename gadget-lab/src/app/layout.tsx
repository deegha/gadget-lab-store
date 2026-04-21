import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import { cartService } from '@/services/cartService';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gadget Lab — USB Cables, Chargers & Phone Covers',
  description: 'Premium USB cables, fast chargers, USB hubs and phone covers. Shop the best accessories for your devices.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cart = await cartService.getCart();
  const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-black antialiased">
        <Navbar cartCount={cartCount} />
        <main className="flex-1 pb-[58px] md:pb-0">{children}</main>
        <Footer />
        <BottomNav cartCount={cartCount} />
      </body>
    </html>
  );
}
