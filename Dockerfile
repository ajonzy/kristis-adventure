FROM node:14-bullseye-slim

WORKDIR /app

# Node 14 ships npm 6; lockfile is v3 (npm 9+) — upgrade npm before npm ci
RUN npm install -g npm@9

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
CMD ["node", "server.js"]
