const Atendimento = require('../models/atendimentos')

//para exporta arquivos
module.exports = app => {
    //rota GET envio e requisição de informações
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))


    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('POST Atendimento')

    })
}