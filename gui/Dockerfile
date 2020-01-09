FROM node:10-alpine AS build

COPY gui/ /app/

WORKDIR /app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install && npm run build

FROM nginx:1.15.6-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/gui/nginx.conf /etc/nginx/nginx.conf
