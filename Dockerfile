FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY file.js ./

EXPOSE 5000

CMD ["npm", "start"]
