FROM node:12.13-alpine AS development

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:12.13-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3003

CMD ["node", "dist/main"]
