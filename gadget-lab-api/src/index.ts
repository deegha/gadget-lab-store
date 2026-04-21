import app from './app'
import { env } from './config/env'
import { logger } from './utils/logger'

app.listen(env.PORT, () => {
  logger.info(`API running on port ${env.PORT}`)
  logger.info(`Health check → http://localhost:${env.PORT}/api/health`)
})
