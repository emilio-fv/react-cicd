FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM base AS development

EXPOSE 8000

CMD [ "npm", "run", "dev" ]