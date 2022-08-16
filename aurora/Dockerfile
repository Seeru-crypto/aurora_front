FROM node:14.20 AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:14.20 AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run prisma:generate
RUN npm run build

FROM node:14.20 AS client
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

RUN npm ci
RUN npm run prisma:generate
RUN npm run build

EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1
# ENV PORT 3000
CMD ["npm", "run", "start"]