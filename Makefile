#Makefile

install:
	npm install

start:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
