build-frontend:
	docker build -t ecdavis15/tsn-frontend -f ./client/Dockerfile .

build-backend:
	docker build -t ecdavis15/tsn-backend -f ./server/Dockerfile .

build-mongo:
	docker build -t ecdavis15/tsn-mongo -f ./data/Dockerfile .

sink:
	docker rm -f `docker ps -aq`
