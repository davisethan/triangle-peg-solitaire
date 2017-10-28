build-web-server:
	docker build -t ecdavis15/tsn-web-server -f ./client/Dockerfile .

build-app-server:
	docker build -t ecdavis15/tsn-app-server -f ./server/Dockerfile .

sink:
	docker rm -f `docker ps -aq`
