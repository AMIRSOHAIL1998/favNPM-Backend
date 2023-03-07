# FAVNPM-Backend

### Prerequisites for crating backend api

- PostGreSQL installed in system
- Node must be installed
- ExpressJs
- pg NPM Package to connect with DB


### Requirement of the project
- create Rest API to store Fav NPM Package name and Description, Why this package is fav.
- Create REST API for performing CRUD Operations Like Add, Update, Delete.
- Use Sequelize ORM and Validator for Data Validation before sending to sequelize.

# API Documentation

below are the routes which canbe used from the Frontend to perform CRUD operations, And also can be tested by postman
#### User Routes

https://fav-npm-package.onrender.com/api/users   to get all user in database
https://fav-npm-package.onrender.com/api/users/signup   to add new user in database.
https://fav-npm-package.onrender.com/api/users/delete to delete user data from database
https://fav-npm-package.onrender.com/api/users/update to update user details in record
https://fav-npm-package.onrender.com/api/users/login  to register new user in the detabase

- for sign up you have send username, email id, contact Number and password.
- for signin you have to send email id and password to authenticate 

#### Fav NPM ackages Routes

https://fav-npm-package.onrender.com/api/packages         to get all packages in the Database
https://fav-npm-package.onrender.com/api/packages/add     to add new package in the record
https://fav-npm-package.onrender.com/api/packages/update  to update package details in the database 
https://fav-npm-package.onrender.com/api/packages/delete  to delete records from teh database



### Table required for storing Fav NPM Packages and user Details

- User Table which stores details of the user with the fields user_id and name of the user.
- Fav Package Table to store fav packages of individual users with fields user_id as Foreings field and Package Name and Comment field.

[Below is the Reference of the table and how data will store in it.]

# User Table

| UUID | Name |
| :--: | :--: |
|  01  | Amir |

# Fav Package Table

|package Id | UUID | fav_package |             comment             |
|:---------:| :--: | :---------: | :-----------------------------: |
| 101       |  01  |   ReactJS   | Favorite Becouse NPM Flexiblity |


### How to run in your local.

- clone the project in your local system.
- open project in your IDE or in VS Code.
- start terminal and type npm install to start the server.
- connect with frontend or test all the routes using postman.

###### You have to change the connection string to connect with your DB.
