FROM node:12-alpine as build
WORKDIR /app
COPY . ./

RUN yarn install
RUN yarn build

FROM nginx

COPY --from=0 /app/build /usr/share/nginx/html