FROM node:18-slim AS builder
WORKDIR /app

COPY package*.json .
COPY src ./src
COPY tsconfig.json .

RUN npm i
RUN npm run build
RUN npm i --omit=dev


FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/node_modules ./dist/node_modules
COPY --from=builder /app/package.json .
CMD ["node", "./dist/index.js"]
