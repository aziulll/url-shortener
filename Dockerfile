FROM --platform=linux/amd64 node:18-bullseye-slim

WORKDIR /url/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run"]