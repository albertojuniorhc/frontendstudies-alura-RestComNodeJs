require('dotenv').config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DATABASE_URL,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER_ID,
  password: process.env.DATABASE_USER_PASSWD,
  database: process.env.DATABASE_NAME,
});

module.exports = connection;
