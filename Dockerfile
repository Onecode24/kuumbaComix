FROM node:16 AS builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY . .
RUN yarn install

FROM nginx:1.21.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]