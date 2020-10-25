FROM node:10-alpine

RUN mkdir -p /src/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]