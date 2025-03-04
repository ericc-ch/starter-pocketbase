FROM node:lts-alpine AS builder
WORKDIR /app

RUN npm i -g corepack
RUN corepack enable

COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 4173

ENTRYPOINT [ "pnpm", "run", "preview", "--host" ]

# FROM alpine:latest AS runner
# ARG PB_VERSION=0.25.8
# WORKDIR /app

# COPY --from=builder /app/pb_public ./pb_public

# RUN apk add --no-cache \
#     unzip \
#     ca-certificates

