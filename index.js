require('dotenv').config();
const customExpress = require("./config/customExpress");
const connection = require("./infrastructure/connection");
const Tables = require("./infrastructure/tables");

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("** Database Online! **");

    Tables.init(connection);
    const app = customExpress();
    const tcpPort = process.env.PORT;
    app.listen(tcpPort, () => {
      console.log(`WebServer running on ${tcpPort}`);
    });
  }
});
