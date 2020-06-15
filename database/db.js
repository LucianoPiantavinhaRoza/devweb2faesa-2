// IMPORTAÇÕES //

const Sequelize = require('sequelize')

// BANCO VAZIO //

const db = {}

// CRIANDO A CONECÇÃO

const sequelizeDB = new Sequelize('app_covid', 'root', 'faesa123',
    {
        hostname: 'localhost',
        port: 3336,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })

db.sequelize = sequelizeDB
db.Sequelize = Sequelize

db.pacientes = require('../models/pacienteModel')(sequelizeDB, Sequelize)

module.exports = db

// const sequelizeDB = new Sequelize('app_covid', 'root', 'faesa123', 
// {
//     hostName: 'localhost',
//     port: 3336,
//     dialect:'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// })

// db.sequelize = sequelizeDB;
// db.sequelize = sequelize;

// db.pacientes = require('../models/pacientes')(sequelizeDB, sequelize)
// db.pacientes = require('../models/hospitais.js')(sequelizeDB, sequelize)

// module.exports = db;