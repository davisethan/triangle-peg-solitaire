dev:
	node ./index.js

solutions:
	node ./solutions/index.js

install:
	node-gyp --directory=./solutions rebuild
