FROM node:9-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node", "."]
EXPOSE 3000