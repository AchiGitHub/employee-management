# Employee Frontend and Service using NextJS and NestJS

### Introduction
The employee-manager consists the frontend.
The employee-service consists the CRUD REST APIs.

### Steps: 
1. Start the employee-service using `docker-compose up` inside the directory
2. Run client app using on the directory `npm run dev`

### Ports:
Employee Frontend starts on port `http://localhost:3000/`

Employee service starts on port `http://localhost:4200/`

MondoDB starts on port `http://localhost:27017`

API Documentation: http://localhost:4200/api

Run `docker-compose down` at the end

### Run Tests

Run `yarn test` on employee-manager directory
Run `yarn test` on employee-service directory