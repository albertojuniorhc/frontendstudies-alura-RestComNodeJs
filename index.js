const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    } else {
        console.log('** Database Online! **')
        
        Tabelas.init(conexao)
        const app = customExpress();
        const tcpPort = 3000;
        app.listen(tcpPort, () => {
            console.log(`Servidor WEB rodando na porta ${tcpPort}`)
        })
        
    }
})
