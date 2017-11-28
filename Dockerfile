FROM node:8-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 8000
CMD npm run development