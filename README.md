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

below are the routes which canbe used from the UI to perform CRUD operations.
#### User Routes

/api/users   to get all user in database
/api/users/add   to add new user in database.
/api/users/delete to delete user data from database
/api/users/update to update user details in record


#### Fav NPM ackages Routes

/api/packages         to get all packages in the Database
/api/packages/add     to add new package in the record
/api/packages/update  to update package details in the database 
/api/packages/delete  to delete records from teh database



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
