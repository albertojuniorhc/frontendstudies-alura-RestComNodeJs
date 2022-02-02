const Atendimento = require('../models/atendimentos')

module.exports = (app) => {
    app.get('/atendimentos', (req, res) => {
        res.send('Vc está na rota de Atendimentos')
    });
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
    });
}