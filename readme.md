### Project Name: Library Management Backend

### Project Type: Backend Application

### Project Link: https://book-management-backend-ac-03.vercel.app/

### Video Link: https://www.youtube.com/watch?v=A0_MfZZQYfA

### Project Stacks:

1. Node.js

2. Express.js

3. Mongoose

4. TypeScript

5. Dotenv

6. Cors

7. Eslint

8. Prettier

9. Ts-Node-Dev

10. Http-Status

### Folder Structure:

- src

  1. app.ts: Main file which is handling all the basic functionalities and middlewares

  2. server.ts: A file for handling the server codes

  3. App folder:

     - modules: Handling all the business logics, interfaces and schema for apis and routs in mvc like format.

     - routers: Managing all the routs and exposing them under one common/base route

  4. config: Handling dotenv and all .env configs

  5. errors: Handling all error logics for example Path Not Found Error, Validation error etc

  6. middlewares: Handling all the common/global middlewares.

  7. utils: Handling all the common utility functions around the application

* dist: Stored all TypeScript to JavaScript compiled codes.

### API endpoints:

- Books:

  1. Upload Book:

     - Method: Post
     - Endpoint: "/api/books"

  2. Get All Books:

     - Method: Get
     - Endpoint: "/api/books"
     - Available Filter options: filter, sort and limit

  3. Get Book By ID:

     - Method: Get
     - Endpoint: "/api/books/:bookId"

  4. Update Book:

     - Method: Put
     - Endpoint: "/api/books/:bookId"

  5. Delete Book:
     - Method: Delete
     - Endpoint: "/api/books/:bookId"

* Borrowed Books:

  1. Borrow Book:

     - Method: Post
     - Endpoint: "/api/borrow"

  2. Get Borrowed Book's Summary:
     - Method: Get
     - Endpoint: "/api/borrow"

### Project Features:

1. Book management with all CRUD operations where we can:

   - Upload books
   - Get books
   - Get a single books
   - Borrow books
   - Can check the summary of the borrowed books
   - Update books and
   - Delete books.

2. Borrow system with proper validation's

3. Aggregation query to show borrowed book summary

4. Centralized error handling (validation, not found, etc.)

5. Modular, scalable code structure

6. Input validation and instance methods

### How to Start the Project:

1. Clone the project from: https://github.com/MdNaimRipto/next-level-b5-assignment-03

2. Run: npm i / npm install

3. Add a .env file at root and add:
   NODE_ENV=value
   PORT=value
   DATABASE_URL=value

4. Run: npm run dev / npm start to start the project.

5. Open Postman or any api testing applications to test the apis.
