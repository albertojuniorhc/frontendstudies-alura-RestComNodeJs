# Pet Shop Service Appointment

This is a study project, based on Alura's course about NodeJS and RestAPI.

The idea is to create an appointment service to a Pet Shop.

## Project developed with:
- NodeJS
- Express
- MySQL2

# To use the API:

This project is hosted at Heroku.

### Get all list:

- [/service](https://whispering-bastion-60662.herokuapp.com/service)

```json
[
    {
        "id": 2,
        "client": "Alberto Jr",
        "pet": "Meg",
        "service": "Tosa e Banho",
        "date": "2022-02-13T03:00:00.000Z",
        "dateCreation": "2022-02-06T18:33:18.000Z",
        "status": "Agendado",
        "observation": "Muito amigável"
    },
    {
        "id": 3,
        "client": "Nathalia",
        "pet": "Tag",
        "service": "Tosa e Banho",
        "date": "2022-02-13T03:00:00.000Z",
        "dateCreation": "2022-02-06T20:46:25.000Z",
        "status": "Agendado",
        "observation": "Não gosta que mexa nas patinhas!"
    }
]
```

### Post

- [/service](https://whispering-bastion-60662.herokuapp.com/service)

Fields:

- client
- pet
- service
- status
- observation
- date 

### Delete

- [/service/${service_id}](https://whispering-bastion-60662.herokuapp.com/service)

Response:
```json
[
    {
        "id": ${service_id}
    }
]
```



# To run locally:

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

These settings can be changed using a .env file on root folder. 
Example:

```bash
PORT="3000" #node app port
DATABASE_URL="localhost"
DATABASE_PORT="3306"
DATABASE_USER_ID="petshop_admin"
DATABASE_USER_PASSWD="password"
DATABASE_NAME="appointment_petshop"
```

⚠️ The MySQL settings will be improved to create the database automatically on the MySQL Server. 

### To run the project:

```bash
npm start
```