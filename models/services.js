const moment = require("moment");
const connection = require("../infrastructure/connection");
const FORMAT_DATE_TIME = "YYYY-MM-DD HH:mm:ss";

const standardDateTime = (dataHora) => {
  return moment(dataHora, "DD/MM/YYYY").format(FORMAT_DATE_TIME);
};

const createCurrentDateTime = () => {
  return moment().format(FORMAT_DATE_TIME);
};

const sendToDatabase = (sql, data = null, res) => {
  connection.query(sql, data, (error, result) => {
    if (!data) data = result;

    if (error) {
      res.status(400).json(error);
    } else {
      res.status(200).json(data);
    }
  });
};

class Service {
  add(service, res) {
    const dateCreation = createCurrentDateTime();
    const dateMoment = standardDateTime(service.date);

    const isDateValid = moment(dateMoment).isSameOrAfter(dateCreation);
    const isClientValid = service.client.length >= 5;

    const validations = [
      {
        name: "date",
        message: "Date should be older than current",
        valid: isDateValid,
      },
      {
        name: "client",
        message: "Client's name must have more than 5 characters",
        valid: isClientValid,
      },
    ];

    const errors = validations.filter((campo) => !campo.valid);
    const hasErrors = errors.length;

    if (hasErrors) {
      res.status(400).json(errors);
    } else {
      const serviceWithDate = { ...service, dateCreation, date: dateMoment };
      const sql = "INSERT INTO Services SET ?";
      sendToDatabase(sql, [serviceWithDate], res);
    }
  }

  list(res) {
    const sql = "SELECT * FROM Services";

    sendToDatabase(sql, null, res);
  }

  searchById(id, res) {
    const sql = `SELECT * FROM Services WHERE id=${id}`;

    sendToDatabase(sql, null, res);
  }

  change(id, values, res) {
    if (values.date) {
      values.date = moment(values.date, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:mm:ss"
      );
    }
    const sql = `UPDATE Services SET ? WHERE id=${id}`;

    sendToDatabase(sql, [values], res);
  }

  delete(id, res) {
    const sql = `DELETE FROM Services WHERE id=${id}`;

    sendToDatabase(sql, [{ id }], res);
  }
}

module.exports = new Service();
