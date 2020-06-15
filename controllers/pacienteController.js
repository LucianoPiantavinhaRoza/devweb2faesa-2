// IMPORTAÇÕES //

const db = require('../database/db')
const Pacientes = db.pacientes
const Op = db.Sequelize.Op

// ROTAS DO CRUD //

exports.cadastrarNovoPaciente = (req, res) => {

    if (!req.body.nome || !req.body.endereco || !req.body.celular || !req.body.peso || !req.body.altura || !req.body.problemas_saude) {
        res.status(400).send({
            message: 'DADOS DO PACIENTE NÃO PODEM SER NULOS'
        })
        return
    }

    const paciente = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        celular: req.body.celular,
        peso: req.body.peso,
        altura: req.body.altura,
        problemas_saude: req.body.problemas_saude,
    }

    Pacientes.create(paciente).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'OCORREU UM ERRO!'
        })
    })
}

exports.selecionarTodosPacientes = (req, res) => {

    const nome = req.body.nome
    // const nome = req.body.endereco
    // const nome = req.body.celular
    // const nome = req.body.peso
    // const nome = req.body.altura
    // const nome = req.body.problemas_saude

    let cond = nome ? { nome: { [Op.like]: `%${nome}%` } } : null
    // let cond = endereco ? { endereco: { [Op.like]: `%${endereco}%` } } : null
    // let cond = celular ? { celular: { [Op.like]: `%${celular}%` } } : null
    // let cond = peso ? { peso: { [Op.like]: `%${peso}%` } } : null
    // let cond = altura ? { altura: { [Op.like]: `%${altura}%` } } : null
    // let cond = problemas_saude ? { problemas_saude: { [Op.like]: `%${problemas_saude}%` } } : null

    Pacientes.findAll({ where: cond })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'OCORREU ALGUM ERRO AO RECUPERAR OS PACIENTES!'
            })
        })
}

exports.selecionarPacienteID = (req, res) => {
    const id = req.params.id
    Pacientes.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            message: err.message || `OCORREU UM ERRO AO RECUPERAR UM PACIENTE PELO ID ${id}`
        })
}

exports.atualizarPaciente = (req, res) => {
    const id = req.params.id
    Pacientes.update(req.body, { where: { id: id } })
        .then(num_linhas => {
            if (num_linhas == 1) {
                res.send({
                    message: "PACIENTE ATUALIZADO"
                })
            } else {
                res.send({
                    message: `OCORREU UM ERRO AO ATUALIZAR O PACIENTE PELO ID ${id}`
                })
            }
        })
        .catch(err => {
            res.send({
                message: err.message || `OCORREU UM ERRO AO ATUALIZAR O PACIENTE PELO ID ${id}`
            })
        })
}

exports.deletarPacienteID = (req, res) => {
    const id = req.params.id
    Pacientes.destroy({ where: { id: id } })
        .then(num_linhas => {
            if (num_linhas == 1) {
                res.send({
                    message: "PACIENTE DELETADO"
                })
            } else {
                res.send({
                    message: `OCORREU UM ERRO AO DELETAR O PACIENTE PELO ID ${id}`
                })
            }
        })
        .catch(err => {
            res.send({
                message: err.message || `OCORREU UM ERRO AO DELETAR O PACIENTE PELO ID ${id}`
            })
        })
}

exports.deletarTodosPacientes = (req, res) => {

    Pacientes.destroy({
        where: {},
        truncate: false
    }).then(num_linhas => {
        res.send({
            message: `${num_linhas} PACIENTES DELETADOS COM SUCESSO`
        })
    })
        .catch(err => {
            res.send({
                message: err.message || 'OCORREU UM ERRO AO DELETAR OS PACIENTES'
            })
        })

}