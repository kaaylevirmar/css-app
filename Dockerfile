FROM node:18-alpine

WORKDIR /css-app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]