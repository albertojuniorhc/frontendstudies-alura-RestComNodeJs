const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "petshop_admin",
  password: "password",
  database: "appointment_petshop",
});

module.exports = connection;
