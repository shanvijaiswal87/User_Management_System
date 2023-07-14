# User Management System
This is a User Management System built using React.js, Express.js, Node.js, MySQL, and Axios. The system allows to manage user data, including CRUD operations for user management.

## Features
  #### User management: 
   Users can perform CRUD operations on user data, including creating, retrieving, updating, and deleting user records.
  #### API endpoints: 
  The backend API provides endpoints for user management operations.
  #### Database storage: 
  User data is stored in a MySQL database for persistence.

## Technologies Used
- React.js: A JavaScript library for building user interfaces.
- Express.js: A web application framework for Node.js.
- Node.js: A JavaScript runtime environment for server-side development.
- MySQL: A relational database management system for storing user data.
- Axios: An HTTP client for making API requests.

## Setup Instructions
   
  #### Clone the repository:
  `git clone <repository-url>`

  #### Install dependencies:
  `cd user-management-system`
   `npm install`

  #### Set up the MySQL database:

 - Create a MySQL database using your preferred tool (e.g., phpMyAdmin).
 - Update the database connection configuration in the .env file with your MySQL database credentials.
 - Start the development server:

`npm start`
###### Open your browser and access the application at `http://localhost:3000.`

## API Endpoints
- POST /api/users: Add a new user. Requires name, email, and password fields in the request body.
- GET /api/users: Get a list of all users.
- PUT /api/users/:id : Update a specific user by ID. Requires user data fields in the request body.
- DELETE /api/users/:id : Delete a specific user by ID.

### License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

### Acknowledgements
- [React.js](https://react.dev/learn)
- [Express.js](https://devdocs.io/express/)
- [Node.js](https://nodejs.org/en/docs)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/)
- [Axios](https://axios-http.com/docs/intro)
  
