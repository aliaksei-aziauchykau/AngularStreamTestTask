# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:13.3.0 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install -g yarn
RUN yarn
RUN npm install -g @angular/cli

COPY ./ /app/

ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.16.0-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /app/nginx-custom.conf /etc/nginx/conf.d/default.conf.template

# run nginx
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'