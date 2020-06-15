// IMPORTAÇÕES //

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// INSTANCIANDO A APLICAÇÃO //

const app = express()

// DEFININDO A PORTA QUE A APLICAÇÃO VAI RODAR //

const port = process.env.PORT || 3002

// IMPORTAÇÕES DE ROTAS PESONALIZADAS //

const MainRouter = require('./routes/main')
const PacientesRouter = require('./routes/pacientesRouter')

// IMPORTAÇOES DE MODELOS DO BANCO DE DADOS //

const db = require('./database/db')
db.sequelize.sync({ force: false }) // Sincronizando com o banco de dados.

// CONFIGURAÇÕES DO SERVIDOR //

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', MainRouter)
app.use('/pacientes', PacientesRouter)

app.listen(port, function () {
    console.log('O SERVIDOR ESTA RODANDO NA PORTA 3002')
})