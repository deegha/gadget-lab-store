import { Router } from 'express'

const router = Router()

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes will be mounted here as each step is implemented:
// router.use('/auth', authRoutes)           // Step 3
// router.use('/categories', categoryRoutes) // Step 4
// router.use('/products', productRoutes)    // Step 4
// router.use('/cart', cartRoutes)           // Step 5
// router.use('/orders', orderRoutes)        // Step 5
// router.use('/blog', blogRoutes)           // Step 7
// router.use('/admin', adminRoutes)         // Steps 3-7

export default router
