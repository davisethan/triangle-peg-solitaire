dev:
	docker-compose run --service-ports --rm webapp

sink:
	docker rm -f `docker ps -aq`

solutions:
	node ./solutions/index.js

install:
	npm install -g node-gyp
	node-gyp --directory=./solutions rebuild
