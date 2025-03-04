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
