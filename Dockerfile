FROM node:14.5.0-stretch-slim

RUN mkdir -p /app

WORKDIR /app

COPY air-monitor/package*.json ./

RUN npm install

COPY air-monitor/ .

RUN npm run build-dev

EXPOSE $PORT

CMD [ "npm", "start" ]
