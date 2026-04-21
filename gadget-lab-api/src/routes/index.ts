import { Router } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

router.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', db: 'connected', timestamp: new Date().toISOString() })
  } catch {
    res.status(503).json({ status: 'error', db: 'disconnected' })
  }
})

// Routes mounted here as each step is implemented:
// router.use('/auth', authRoutes)           // Step 3
// router.use('/categories', categoryRoutes) // Step 4
// router.use('/products', productRoutes)    // Step 4
// router.use('/cart', cartRoutes)           // Step 5
// router.use('/orders', orderRoutes)        // Step 5
// router.use('/blog', blogRoutes)           // Step 7
// router.use('/admin', adminRoutes)         // Steps 3–7

export default router
