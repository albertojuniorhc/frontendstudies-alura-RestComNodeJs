const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona({data, cliente, ...resAtendimento}, res){
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const dataMoment = moment(data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss'); // pegando a data enviada pelo client, e colocando no padrao do moment

        const dataEhValida = moment(dataMoment).isSameOrAfter(dataCriacao);
        const clienteEhValido = cliente.length >= 5;

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

        const erros = validacoes.filter(campo => !campo.valido); //NAO ENTENDI A SINTAXE ==> Retorna um array sempre que econtrar o valor "false" na chave "valido"
        const existemErros = erros.length;

        if(existemErros){
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = {...resAtendimento, cliente, dataCriacao, data: dataMoment}
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