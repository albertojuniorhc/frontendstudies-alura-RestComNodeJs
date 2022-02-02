const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;

        // console.log(dataEhValida, clienteEhValido)

        const validacoes = [
            {
                nome: 'data',
                mensagem: 'Data deve ser posterior a data atual',
                valido: dataEhValida
            },
            {
                nome: 'cliente',
                mensagem: 'Nome do cliente deve ter mais de 5 caracteres.',
                valido: clienteEhValido
            }
        ];

        const erros = validacoes.filter(campo => !campo.valido); //NAO ENTENDI A SINTAXE
        const existemErros = erros.length;

        if(existemErros){
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO Atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(resultados);
                }
            });
        }
    }
}

module.exports = new Atendimento; 