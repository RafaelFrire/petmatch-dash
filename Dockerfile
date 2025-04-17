FROM node:latest
WORKDIR /petmatch-dash

COPY package.json yarn.lock ./


COPY . .
RUN rm -rf node_modules

RUN apt-get update && apt-get install -y python3 make g++
RUN yarn install

VOLUME /var/www/html

CMD ["yarn", "start"]
EXPOSE 3000