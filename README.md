**Cross-Microservice Data Handling Project**
This project demonstrates communication between two microservices: Authentication Microservice and Location Microservice, using NestJS, TypeORM, MySQL, and Redis.

**Project Structure**
**Authentication Microservice**

Manages user data.
Database Table: User (id, name, email).
Endpoint: POST /users-with-location
Accepts user and location data.
Saves user data in the local database.
Sends location data to the Location Microservice via Redis.
Location Microservice

Manages location data.

Database Table: Location (id, userId, latitude, longitude).
Listener for location data messages from the Authentication Microservice.
Saves location data in the database.
Key Features
Microservices Communication: Uses Redis as the transport layer.
Validation: class-validator ensures input data is valid.
Database Operations: TypeORM with MySQL for database interaction.
Environment Variables: Configuration through .env.
Setup Instructions
Clone the repository:


git clone https://github.com/your-repo/microservice-project.git
cd microservice-project
Install dependencies:


npm install


**Authentication Microservice:**
npm run start:auth

**Location Microservice:**

npm run start:location

**API Usage**
Create User with Location: Request:

POST /users-with-location
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "location": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
}

**Technologies Used**
NestJS: Framework for building scalable server-side applications.
TypeORM: ORM for database operations.
MySQL: Relational database.
Redis: Messaging and caching layer.
class-validator: For request validation.