const Service = require('../models/services')

module.exports = (app) => {
    app.get('/service', (req, res) => {
        Service.lista(res);
    });

    app.get('/service/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Service.buscaPorId(id, res)
    })
    
    app.post('/service', (req, res) => {
        const atendimento = req.body;
        Service.adiciona(atendimento, res);
    });

    app.patch('/service/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body; //Values that will be edited;
        Service.altera(id, values, res);
    });

    app.delete('/service/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Service.delete(id, res);
    });
}