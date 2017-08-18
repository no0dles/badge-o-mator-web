FROM node:8.1.3 as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY .babelrc .
COPY .eslintrc.js .
COPY .eslintignore .
COPY .postcssrc.js .
COPY build ./build
COPY config ./config
COPY static ./static
COPY index.html .
COPY src ./src

RUN yarn build

FROM fholzer/nginx-brotli:latest
EXPOSE 80
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
