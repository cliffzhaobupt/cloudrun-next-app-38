FROM node:18.14.2-alpine

WORKDIR /usr/app
COPY . .

RUN npm ci
RUN npm run build
CMD [ "npm", "start" ]
