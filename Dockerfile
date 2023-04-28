FROM node:17-alpine

WORKDIR /api

COPY package.json .

RUN npm install

EXPOSE 80

CMD ["npm", "run", "start"]