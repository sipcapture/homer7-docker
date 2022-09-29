FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install --prod

COPY *.js /usr/src/app/

CMD ["node", "index.js"]
