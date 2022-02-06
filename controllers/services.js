const Service = require("../models/services");

module.exports = (app) => {
  app.get("/service", (req, res) => {
    Service.list(res);
  });

  app.get("/service/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Service.searchById(id, res);
  });

  app.post("/service", (req, res) => {
    const appointment = req.body;
    Service.add(appointment, res);
  });

  app.patch("/service/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body; // Values that will be edited;
    Service.change(id, values, res);
  });

  app.delete("/service/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Service.delete(id, res);
  });
};
