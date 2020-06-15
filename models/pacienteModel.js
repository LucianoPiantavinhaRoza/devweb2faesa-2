// IMPORTAÇÕES //

const Sequelize = require('sequelize');

// DEFININDO TABELA PACIENTES NO BANCO DE DADOS //

module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define(
        'Pacientes',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING
            },
            endereco: {
                type: Sequelize.STRING
            },
            celular: {
                type: Sequelize.STRING(9)
            },
            peso: {
                type: Sequelize.DOUBLE(4, 2)
            },
            altura: {
                type: Sequelize.DOUBLE(3, 2)
            },
            problemas_saude: {
                type: Sequelize.STRING
            }
        },
        {
            timestamps: false
        }
    )
    return Paciente
}