// IMPORTAÇÕES //

const express = require('express')
const pacientes = express.Router()
const cors = require('cors')
const pacientesController = require('../controllers/pacienteController')

pacientes.use(cors())

// ROTAS DE PACIENTES //

pacientes.get('/', pacientesController.selecionarTodosPacientes)

pacientes.get('/:id', pacientesController.selecionarPacienteID)

pacientes.post('/', pacientesController.cadastrarNovoPaciente)

pacientes.put('/:id', pacientesController.atualizarPaciente)

pacientes.delete('/', pacientesController.deletarTodosPacientes)

pacientes.delete('/:id', pacientesController.deletarPacienteID)

module.exports = pacientes