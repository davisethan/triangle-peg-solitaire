FROM node:latest

WORKDIR /opt
COPY ./client/public /opt/public
COPY ./client/src /opt/src
COPY ./client/package.json /opt/package.json
COPY ./client/server.js /opt/server.js

RUN yarn install
RUN yarn build
RUN ln -s /opt/node_modules/.bin/babel /usr/bin/babel
RUN babel /opt/server.js -o /opt/server-build.js

EXPOSE 3000

CMD node /opt/server-build.js
