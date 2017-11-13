build-frontend:
	docker build -t osethan/tsn-frontend -f ./client/Dockerfile .

build-backend:
	docker build -t osethan/tsn-backend -f ./server/Dockerfile .

build-mongo:
	docker build -t osethan/tsn-mongo -f ./data/Dockerfile .

sink:
	docker rm -f `docker ps -aq`
