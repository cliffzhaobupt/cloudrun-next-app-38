FROM node:18.14.2-alpine

WORKDIR /usr/app
COPY . .

RUN npm ci --only=production
RUN npm run build
CMD [ "npm", "start" ]
