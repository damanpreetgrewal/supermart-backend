
Server Documentation


Introduction: 

This is ready api backend for admin and frontend built with node.js, express, mongoose, and mongodb for database. 


Tech and Packages we use in this project:

    1. Node.js framework Express.js.
    2. Mongodb use for database .
    3. Mongoose for all schema validation and database connection.
    4. JsonwebToken for create jsonwebtoken.
    5. BcryptJs for password encryption.
    6. Day.js for data format.
    7. Dotenv for use environment variable.
    8. Nodemon for run on dev server.
    9. Cors and Body parser

Getting Started & Installation:

Step 1 : Configure your .env file:

```js
PORT=5000
MONGO_URI='mongodb+srv://[username]:[password]@cluster0.oae2n.mongodb.net/[DBName]?retryWrites=true&w=majority'
JWT_SECRET=supersecretforjwt
JWT_SECRET_FOR_VERIFY=supersecretforjwtforverifyemail
SERVICE=gmail
EMAIL_USER=damanpreet.grewal92@gmail.com
EMAIL_PASS=************
HOST=smtp.gmail.com
EMAIL_PORT=465
STORE_URL=http://localhost:3000
```

Step 2 : Running the project:

    ⦁	First npm install for install all packages latest version.
    ⦁	npm run start:dev for run in development mode.
    ⦁	npm run data:import for manually import all data into your database, this will run seed.js file and all sample data in utils file will
            imported to your database.


Folder Structure & Customization:

⦁   In index.js file you will find all declared api endpoint for different route.

⦁   In seed.js file you will find all created model for manually imported into database.

⦁   /config : This folder contain auth for signInToken, isAdmin and isAuth middleware.

⦁   /models: This folder contain all model create with mongoose schema validation.

⦁   /routes: This folder contain all route like admin, category, product, coupon, user, userOrder route. 

⦁  /controller: This folder contain all different route controller function.

⦁  /utils : This folder contain admin, user, product and category sample data.



Configuration & Deployment:

We use heroku for hosting this server if you want to hosting on heroku just follow their documentation, You can also hosting this any other hosting services.
