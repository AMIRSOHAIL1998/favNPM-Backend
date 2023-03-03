# FAVNPM-Backend

### Prerequisites for crating backend api

- PostGreSQL installed in system
- Node must be installed
- ExpressJs
- pg NPM Package to connect with DB

# API Documentation

For this project you need 3 routes one for updating Fav NPM Packages and for Adding New Package and one for deleting the packages from Fav List.

### Table required for storing Fav NPM Packages and user Details

- User Table which stores details of the user with the fields user_id and name of the user.
- Fav Package Table to store fav packages of individual users with fields user_id as Foreings field and Package Name and Comment field.

# User Table

| UUID | Name |
| :--: | :--: |
|  01  | Amir |

# Fav Package Table

|package Id | UUID | fav_package |             comment             |
|:---------:| :--: | :---------: | :-----------------------------: |
| 101       |  01  |   ReactJS   | Favorite Becouse NPM Flexiblity |
