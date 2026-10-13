FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY file.js ./

EXPOSE 3306

CMD ["npm", "start"]
