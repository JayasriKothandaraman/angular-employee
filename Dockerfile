FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 4200
COPY --from=builder /app/dist/employee /usr/share/nginx/html