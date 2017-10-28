FROM node:latest

WORKDIR /opt
COPY ./server/server.js /opt/server/server.js
COPY ./common /opt/common
COPY ./package.json /opt/package.json

RUN yarn install
RUN ln -s /opt/node_modules/.bin/babel /usr/bin/babel
RUN babel /opt -d /opt/build --ignore /opt/node_modules,/opt/yarn

EXPOSE 3030

CMD node /opt/build/server/server.js
