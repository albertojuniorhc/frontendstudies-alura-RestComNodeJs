# Pet Shop Service Appointment

This is a study project, based on Alura's course about NodeJS and RestAPI.

The idea is to create an appointment service to a Pet Shop.

## Project developed with:
- NodeJS
- Express
- MySQL2

### To run the project you need to install:
- [Node](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/)

### Before run the project:

You must install the dependencies

```bash 
npm install
```

And create a MySQL database and user:

```sql
CREATE DATABASE appointment_petshop;

CREATE USER 'petshop_admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, INDEX, DROP, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES ON appointment_petshop.* TO 'petshop_admin'@'localhost';
```

These settings can be changed at `./infrastructure/connection.js`

⚠️ These settings will be updated to create automatically on the project. 

### To run the project:

```bash
npm start
```