import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // ── Admin user ───────────────────────────────────────────────────────────

  const adminEmail = process.env.ADMIN_EMAIL ?? 'deegha@codewavelabs.io'
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'Steamboat'

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } })
  if (!existing) {
    const passwordHash = await bcrypt.hash(adminPassword, 12)
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        role: 'ADMIN',
        name: 'Deegha',
      },
    })
    console.log(`  ✓ Admin user created (${adminEmail})`)
  } else {
    console.log(`  – Admin user already exists, skipping`)
  }

  // ── Categories ───────────────────────────────────────────────────────────

  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'usb-c-cables' },
      update: {},
      create: {
        name: 'USB-C Cables',
        slug: 'usb-c-cables',
        description: '100W+ power delivery with braided reinforcement.',
        imageUrl:
          'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'wall-chargers' },
      update: {},
      create: {
        name: 'Chargers',
        slug: 'wall-chargers',
        description: 'GaN fast chargers — charge 3× faster.',
        imageUrl:
          'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'usb-hubs' },
      update: {},
      create: {
        name: 'USB Hubs',
        slug: 'usb-hubs',
        description: 'Expand your ports — up to 9-in-1 docks.',
        imageUrl:
          'https://images.unsplash.com/photo-1591238372340-7f17c0f0d2f6?w=400&q=80',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'phone-cases' },
      update: {},
      create: {
        name: 'Phone Cases',
        slug: 'phone-cases',
        description: 'Military-grade drop protection for your phone.',
        imageUrl:
          'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80',
      },
    }),
  ])

  const catMap = Object.fromEntries(categories.map((c) => [c.slug, c.id]))
  console.log(`  ✓ ${categories.length} categories upserted`)

  // ── Products ─────────────────────────────────────────────────────────────

  const products = [
    {
      slug: 'titan-series-usb-c-cable',
      name: 'Titan USB-C Cable 2m',
      series: 'PRECISION SERIES',
      description:
        'Braided Kevlar fiber core with precision-machined aluminium connectors. Handles 100W power delivery and charges your MacBook Pro or Android phone at full speed. Rated for 30,000+ bends.',
      price: 29,
      stock: 50,
      sku: 'GL-TX-206',
      categorySlug: 'usb-c-cables',
      images: [
        'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=600&q=80',
      ],
      specs: [
        { label: 'LENGTH', value: '2.0 Meters' },
        { label: 'POWER', value: '100W PD' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-TX-206' },
        { label: 'Interface', value: 'USB-C to USB-C' },
        { label: 'Power Delivery', value: '100W' },
        { label: 'Data Speed', value: '480 Mbps' },
        { label: 'Certification', value: 'USB-IF, CE, FCC, RoHS' },
        { label: 'Bend Test', value: '30,000+ bends' },
      ],
      badges: ['30% OFF'],
      isFeatured: true,
    },
    {
      slug: 'gan-core-140w-charger',
      name: 'GaN Core 140W Charger',
      series: 'CORE SERIES',
      description:
        'Third-generation Gallium Nitride technology in a body 45% smaller than silicon chargers. Charge your MacBook, iPhone, and AirPods simultaneously at full speed.',
      price: 59,
      stock: 50,
      sku: 'GL-GC-140',
      categorySlug: 'wall-chargers',
      images: ['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'],
      specs: [
        { label: 'OUTPUT', value: '140W Peak' },
        { label: 'PORTS', value: '3× USB-C + 1× USB-A' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-GC-140' },
        { label: 'Technology', value: 'GaN V.3' },
        { label: 'Max Output', value: '140W' },
        { label: 'Ports', value: '3× USB-C PD + 1× USB-A' },
        { label: 'Efficiency', value: '98%' },
        { label: 'Compatibility', value: 'iPhone, Android, MacBook, iPad' },
      ],
      badges: [],
      isFeatured: true,
    },
    {
      slug: 'nexus-9-in-1-hub',
      name: 'Nexus 9-in-1 USB Hub',
      series: 'NEXUS SERIES',
      description:
        'Turn one USB-C port into nine. Works with MacBook, iPad Pro, Chromebook and any USB-C laptop. 4K HDMI output, SD card reader, and 100W power pass-through included.',
      price: 89,
      stock: 30,
      sku: 'GL-NX-9',
      categorySlug: 'usb-hubs',
      images: ['https://images.unsplash.com/photo-1591238372340-7f17c0f0d2f6?w=600&q=80'],
      specs: [
        { label: 'PORTS', value: '9-in-1' },
        { label: 'INTERFACE', value: 'USB-C / Thunderbolt' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-NX-9' },
        { label: 'Interface', value: 'USB-C / Thunderbolt 4' },
        { label: 'Ports', value: '2× USB-C, 3× USB-A, HDMI, SD, MicroSD, 3.5mm' },
        { label: 'Data Speed', value: 'Up to 10 Gbps' },
        { label: 'Power Pass-Through', value: '100W' },
      ],
      badges: [],
      isFeatured: true,
    },
    {
      slug: 'shield-pro-iphone-case',
      name: 'Shield Pro iPhone Case',
      series: 'SHIELD SERIES',
      description:
        'Military-grade drop protection without the bulk. Dual-layer TPU and polycarbonate construction absorbs impact from 6ft drops. MagSafe compatible, precise cutouts for all buttons and ports.',
      price: 25,
      stock: 80,
      sku: 'GL-SP-IP15',
      categorySlug: 'phone-cases',
      images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80'],
      specs: [
        { label: 'PROTECTION', value: 'MIL-STD-810G' },
        { label: 'MATERIAL', value: 'TPU + Polycarbonate' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-SP-IP15' },
        { label: 'Standard', value: 'MIL-STD-810G Drop Tested' },
        { label: 'Drop Height', value: '6ft / 1.8m' },
        { label: 'Material', value: 'Dual-layer TPU + Polycarbonate' },
        { label: 'MagSafe', value: 'Compatible' },
        { label: 'Compatibility', value: 'iPhone 15 / 15 Pro / 15 Pro Max' },
      ],
      badges: ['BEST SELLER'],
      isFeatured: true,
    },
    {
      slug: 'swift-usb-c-cable-1m',
      name: 'Swift USB-C Cable 1m',
      series: 'SWIFT SERIES',
      description:
        'The everyday USB-C cable. Slim, flexible, and rated for 60W fast charging. Perfect for your desk, bag, or bedside. Compatible with all USB-C phones, tablets and laptops.',
      price: 18,
      stock: 100,
      sku: 'GL-SW-106',
      categorySlug: 'usb-c-cables',
      images: ['https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=600&q=80'],
      specs: [
        { label: 'LENGTH', value: '1.0 Meter' },
        { label: 'POWER', value: '60W PD' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-SW-106' },
        { label: 'Interface', value: 'USB-C to USB-C' },
        { label: 'Power Delivery', value: '60W' },
        { label: 'Data Speed', value: '480 Mbps' },
        { label: 'Bend Test', value: '20,000+ bends' },
      ],
      badges: [],
      isFeatured: false,
    },
    {
      slug: 'armor-android-case',
      name: 'Armor Android Case',
      series: 'ARMOR SERIES',
      description:
        'Engineered for Samsung Galaxy S24 series. Raised camera bezels protect your lenses, precise port cutouts ensure full functionality, and the slim profile fits in any pocket.',
      price: 22,
      stock: 60,
      sku: 'GL-AR-SS24',
      categorySlug: 'phone-cases',
      images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80'],
      specs: [
        { label: 'PROTECTION', value: 'MIL-STD-810G' },
        { label: 'COMPATIBILITY', value: 'Samsung S24 Series' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-AR-SS24' },
        { label: 'Standard', value: 'MIL-STD-810G' },
        { label: 'Material', value: 'TPU + Raised Bezels' },
        { label: 'Compatibility', value: 'Samsung Galaxy S24 / S24+ / S24 Ultra' },
      ],
      badges: ['NEW'],
      isFeatured: false,
    },
    {
      slug: 'pocket-20w-charger',
      name: 'Pocket 20W Charger',
      series: 'POCKET SERIES',
      description:
        'The smallest 20W charger we make. GaN technology in a plug-and-charge design — no cable needed. Fast charges any iPhone from 0 to 50% in just 30 minutes.',
      price: 24,
      stock: 75,
      sku: 'GL-PK-20',
      categorySlug: 'wall-chargers',
      images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80'],
      specs: [
        { label: 'OUTPUT', value: '20W USB-C PD' },
        { label: 'SIZE', value: 'Ultra Compact' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-PK-20' },
        { label: 'Technology', value: 'GaN' },
        { label: 'Output', value: '20W USB-C PD' },
        { label: 'Compatibility', value: 'iPhone, Android, AirPods, iPad' },
      ],
      badges: ['NEW'],
      isFeatured: false,
    },
    {
      slug: 'matrix-7-port-hub',
      name: 'Matrix 7-Port USB Hub',
      series: 'MATRIX SERIES',
      description:
        'A clean 7-in-1 hub for everyday use. Slim aluminium shell, plug-and-play on Mac and Windows. HDMI for external monitors, SD card for photographers, and 85W power pass-through.',
      price: 65,
      stock: 40,
      sku: 'GL-MX-7',
      categorySlug: 'usb-hubs',
      images: ['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80'],
      specs: [
        { label: 'PORTS', value: '7-in-1' },
        { label: 'INTERFACE', value: 'USB-C' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-MX-7' },
        { label: 'Ports', value: '2× USB-C, 3× USB-A, HDMI, SD Card' },
        { label: 'Data Speed', value: 'Up to 5 Gbps' },
        { label: 'Power Pass-Through', value: '85W' },
      ],
      badges: [],
      isFeatured: false,
    },
    {
      slug: 'clear-shield-case',
      name: 'Clear Shield Case',
      series: 'CLEAR SERIES',
      description:
        'Show off your phone colour while staying protected. Anti-yellowing TPU stays crystal clear for years. Ultra-slim at 1.2mm — you barely know it is there.',
      price: 15,
      stock: 120,
      sku: 'GL-CS-15',
      categorySlug: 'phone-cases',
      images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80'],
      specs: [
        { label: 'MATERIAL', value: 'Anti-Yellow TPU' },
        { label: 'STYLE', value: 'Crystal Clear' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-CS-15' },
        { label: 'Material', value: 'Anti-yellowing TPU' },
        { label: 'Thickness', value: '1.2mm ultra-slim' },
        { label: 'Compatibility', value: 'iPhone 15 / 14 / 13' },
      ],
      badges: [],
      isFeatured: false,
    },
    {
      slug: 'turbo-usb-a-to-c-cable',
      name: 'Turbo USB-A to C Cable',
      series: 'TURBO SERIES',
      description:
        'The most compatible charging cable. USB-A to USB-C works with every charger you already own. Braided nylon, 1.5m length, charges all Android and USB-C devices.',
      price: 14,
      stock: 90,
      sku: 'GL-TB-AC15',
      categorySlug: 'usb-c-cables',
      images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'],
      specs: [
        { label: 'LENGTH', value: '1.5 Meters' },
        { label: 'INTERFACE', value: 'USB-A to USB-C' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-TB-AC15' },
        { label: 'Interface', value: 'USB-A to USB-C' },
        { label: 'Charging', value: 'Up to 18W' },
        { label: 'Data Speed', value: '480 Mbps' },
      ],
      badges: [],
      isFeatured: false,
    },
    {
      slug: 'slim-65w-gan-charger',
      name: 'Slim 65W GaN Charger',
      series: 'SLIM SERIES',
      description:
        'Dual USB-C GaN charger that charges your laptop and phone at the same time. Foldable plug, travel-ready, and 40% smaller than a standard laptop charger.',
      price: 39,
      stock: 45,
      sku: 'GL-SL-65',
      categorySlug: 'wall-chargers',
      images: ['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80'],
      specs: [
        { label: 'OUTPUT', value: '65W GaN' },
        { label: 'PORTS', value: '2× USB-C' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-SL-65' },
        { label: 'Technology', value: 'GaN V.2' },
        { label: 'Output', value: '65W total (45W + 20W)' },
        { label: 'Ports', value: '2× USB-C PD' },
      ],
      badges: [],
      isFeatured: false,
    },
    {
      slug: 'rugged-wallet-case',
      name: 'Rugged Wallet Case',
      series: 'WALLET SERIES',
      description:
        'Phone case and wallet in one. Three card slots hold your ID, credit cards, and cash. Premium vegan leather exterior, drop-protective TPU interior.',
      price: 32,
      stock: 35,
      sku: 'GL-WC-IP15',
      categorySlug: 'phone-cases',
      images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80'],
      specs: [
        { label: 'STORAGE', value: '3× Card Slots' },
        { label: 'MATERIAL', value: 'Vegan Leather' },
      ],
      detailedSpecs: [
        { label: 'Model', value: 'GL-WC-IP15' },
        { label: 'Card Slots', value: '3 slots (holds up to 5 cards)' },
        { label: 'Material', value: 'Premium vegan leather + TPU' },
        { label: 'Compatibility', value: 'iPhone 15 / 15 Pro' },
      ],
      badges: ['NEW'],
      isFeatured: false,
    },
  ]

  let created = 0
  let skipped = 0

  for (const p of products) {
    const { categorySlug, ...data } = p
    const result = await prisma.product.upsert({
      where: { slug: data.slug },
      update: {},
      create: {
        ...data,
        categoryId: catMap[categorySlug],
      },
    })
    result ? created++ : skipped++
  }

  console.log(`  ✓ ${products.length} products upserted`)

  console.log('\n✅ Seed complete.')
}

main()
  .catch((e) => {
    console.error('Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
