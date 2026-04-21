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

# ── Development: src is mounted via docker-compose volume ─────────────────────
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY gadget-lab-admin ./gadget-lab-admin
WORKDIR /app/gadget-lab-admin
EXPOSE 3002
CMD ["npm", "run", "dev"]

# ── Build ─────────────────────────────────────────────────────────────────────
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY gadget-lab-admin ./gadget-lab-admin
WORKDIR /app/gadget-lab-admin
RUN npm run build

# ── Production ────────────────────────────────────────────────────────────────
FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app/gadget-lab-admin
COPY --from=builder /app/gadget-lab-admin/.next ./.next
COPY --from=builder /app/gadget-lab-admin/public ./public 2>/dev/null || true
COPY --from=deps /app/node_modules /app/node_modules
COPY gadget-lab-admin/package.json ./
EXPOSE 3002
CMD ["npm", "start"]
