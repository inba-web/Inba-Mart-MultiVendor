FROM node:22-alpine AS builder

RUN apk update && apk upgrade

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src ./src


FROM node:22-alpine AS production

RUN apk update && apk upgrade

RUN rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/bin/npm \
    /usr/local/bin/npx

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src

EXPOSE 5000

CMD ["node", "src/index.js"]