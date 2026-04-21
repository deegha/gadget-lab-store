import { z } from 'zod'

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3001),

  DATABASE_URL: z.string().min(1),

  JWT_SECRET: z.string().min(1),
  JWT_REFRESH_SECRET: z.string().min(1),

  ADMIN_EMAIL: z.string().email(),
  ADMIN_PASSWORD: z.string().min(1),

  MINIO_ENDPOINT: z.string().default('localhost'),
  MINIO_PORT: z.coerce.number().default(9000),
  MINIO_ACCESS_KEY: z.string().default('minioadmin'),
  MINIO_SECRET_KEY: z.string().default('minioadmin'),
  MINIO_BUCKET: z.string().default('gadgetlab-images'),
  MINIO_USE_SSL: z
    .string()
    .transform((v) => v === 'true')
    .default('false'),

  MAILTRAP_HOST: z.string().default('sandbox.smtp.mailtrap.io'),
  MAILTRAP_PORT: z.coerce.number().default(2525),
  MAILTRAP_USER: z.string().default(''),
  MAILTRAP_PASS: z.string().default(''),

  CORS_ORIGINS: z.string().default('http://localhost:3000,http://localhost:3002'),
})

const parsed = schema.safeParse(process.env)

if (!parsed.success) {
  console.error('❌  Invalid environment variables:')
  console.error(parsed.error.flatten().fieldErrors)
  process.exit(1)
}

export const env = parsed.data
