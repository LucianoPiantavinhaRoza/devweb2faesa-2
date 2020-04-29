const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3336,
    user: 'root',
    password: 'faesa123',
    database: 'app_covid'
})

connection.connect(function(err){
    if(err) {
        return console.log(err)
    }
    console.log('BANCO DE DADOS CONECTADO!')
    criarTabelaPessoas(connection)
    popularPessoas(connection)
})

function criarTabelaPessoas(conn){
    const sql = `CREATE TABLE IF NOT EXISTS Pessoas
                    (id INT NOT NULL AUTO_INCREMENT, 
                    nome VARCHAR(200) NOT NULL,
                    endereco VARCHAR(200) NOT NULL,
                    celular VARCHAR(9) NOT NULL,
                    peso FLOAT(4,2) NOT NULL,
                    altura FLOAT(3,2) NOT NULL,
                    problemas_saude VARCHAR(100) NOT NULL,
                    PRIMARY KEY (id)
                    );`
    conn.query(sql, function(error){
        if(error) {
            return console.log(error)
        }
        console.log('TABELA CRIADA COM SUCESSO!')
    })
}

function popularPessoas(conn){
    const sql = `INSERT INTO Pessoas(nome, endereco, celular,
                peso, altura, problemas_saude) VALUES ('Gaetano Rosa', 'Via Tormine', '998123456', 70.30, 1.30, 'Câncer');`

    const sql2 = `INSERT INTO Pessoas(nome, endereco, celular,
                peso, altura, problemas_saude) VALUES ('Teresa Vineri', 'Via Castiglione', '998123321', 70.00, 1.30, 'Lepra');`

    const sql3 = `INSERT INTO Pessoas(nome, endereco, celular,
                peso, altura, problemas_saude) VALUES ('Paolo Piantavigna', 'Via Villadose', '997321654', 60.30, 1.50, 'Diabete');`

    const sql4 = `INSERT INTO Pessoas(nome, endereco, celular,
                peso, altura, problemas_saude) VALUES ('Carmela Ghirardelli', 'Via Tresigallo', '997456654', 70.00, 1.50, 'Alzheimer');`

    conn.query(sql, function(error){
        if(error) {
            return console.log(error)
        }
        console.log('REGISTROS 1 INSERIDOS COM SUCESSO!')
        conn.end()
    })

    conn.query(sql2, function(error2){
        if(error2) {
            return console.log(error2)
        }
        console.log('REGISTROS 2 INSERIDOS COM SUCESSO!')
        conn.end()
    })

    conn.query(sql3, function(error3){
        if(error3) {
            return console.log(error3)
        }
        console.log('REGISTROS 3 INSERIDOS COM SUCESSO!')
        conn.end()
    })

    conn.query(sql4, function(error4){
        if(error4) {
            return console.log(error4)
        }
        console.log('REGISTROS 4 INSERIDOS COM SUCESSO!')
        conn.end()
    })
}