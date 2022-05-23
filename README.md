## Installation

```bash
$ npm install
```

# Running the app

copy .env.example and create .env
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Test

```bash
# tests
$ npm run test
$ npm run test:watch

```

# Docker Database

docker-compose -f docker-compose-mysql-only.yml up

# Endpoint

POST localhost:3000/api/schedule 
