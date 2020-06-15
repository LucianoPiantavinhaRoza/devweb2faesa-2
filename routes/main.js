// IMPORTAÇÕES //

const express = require('express');
const main = express.Router();
const cors = require('cors');

main.use(cors())

// ROTAS PADRÕES DA APLICAÇÃO //

main.get('/', (req, res) => {
    res.send('Você acessou a rota padrão da aplicação!')
})

main.post('/', (req, res) => {
    res.send('Você acessou a rota padrão da aplicação com POST!')
})

main.patch('/', (req, res) => {
    res.send('Você acessou a rota padrão da aplicação com PATCH')
})

main.delete('/', (req, res) => {
    res.send('Você acessou a rota padrão da aplicação com DELETE!')
})

module.exports = main

