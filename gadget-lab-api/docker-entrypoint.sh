#!/bin/sh
set -e

echo "▶ Syncing database schema (prisma db push)..."
npx prisma db push --skip-generate

echo "▶ Seeding database..."
npx tsx src/prisma/seed.ts

echo "▶ Starting API with hot reload..."
exec npx tsx watch src/index.ts
