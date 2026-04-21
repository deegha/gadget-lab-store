FROM node:22-alpine AS base
WORKDIR /app

# ── Install all workspace dependencies ────────────────────────────────────────
FROM base AS deps
COPY package.json package-lock.json* ./
COPY packages/types/package.json ./packages/types/
COPY gadget-lab-api/package.json ./gadget-lab-api/
COPY gadget-lab/package.json ./gadget-lab/
COPY gadget-lab-admin/package.json ./gadget-lab-admin/
RUN npm install

# ── Development: source is mounted via docker-compose volume ──────────────────
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY packages ./packages
COPY gadget-lab-api ./gadget-lab-api
WORKDIR /app/gadget-lab-api
EXPOSE 3001
CMD ["npx", "tsx", "watch", "src/index.ts"]

# ── Build ─────────────────────────────────────────────────────────────────────
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY packages ./packages
COPY gadget-lab-api ./gadget-lab-api
WORKDIR /app/gadget-lab-api
RUN npx tsc

# ── Production ────────────────────────────────────────────────────────────────
FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/gadget-lab-api/dist ./gadget-lab-api/dist
COPY gadget-lab-api/package.json ./gadget-lab-api/
WORKDIR /app/gadget-lab-api
EXPOSE 3001
CMD ["node", "dist/index.js"]
