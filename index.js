const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;
const mysql = require('mysql2');

//Configurações do ambiente
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Criando um roteador
const router = express.Router();
router.get('/', (req, res) => res.json({message: 'API RODANDO!'}));
app.use('/', router);

function execQuery(query, res){
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3336,
        user: 'root',
        password: 'faesa123',
        database: 'app_covid'
    });

    connection.query(query, function(error, results){
    
        if(error) {
            res.json(error);
        }else {
            res.json(results);
        }
        connection.end();
        console.log('QUERY EXECUTADA COM SUCESSO!')
    });
}

//ROTAS
router.get('/pessoas', (req, res) => {
    execQuery('SELECT * FROM Pessoas;', res);
});

router.get('/pessoas/:id?', (req, res) => {
    let filter = '';
    if(req.params.id) filter = ' WHERE id = ' + parseInt(req.params.id);
    execQuery('SELECT * FROM Pessoas ' + filter, res);
});

router.delete('/pessoas/:id', (req, res) => {
    execQuery('DELETE FROM Pessoas WHERE id=' + parseInt(req.params.id), res);
});

router.post('/pessoas', (req, res) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const celular = req.body.celular;
    const peso = req.body.peso;
    const altura = req.body.altura;
    const problemas_saude = req.body.problemas_saude;
    execQuery(`INSERT INTO Pessoas (nome, endereco, celular, peso, altura, problemas_saude) 
            VALUES ('${nome}', '${endereco}', '${celular}', '${peso}', '${altura}', '${problemas_saude}');`, res);
});

router.patch('/pessoas/:id', (req,res) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const celular = req.body.celular;
    const peso = req.body.peso;
    const altura = req.body.altura;
    const problemas_saude = req.body.problemas_saude;
    execQuery(`UPDATE Pessoas SET nome='${nome}', endereco='${endereco}', celular='${celular}', 
            peso='${peso}', altura='${altura}', problemas_saude='${problemas_saude}' 
            WHERE id = '${req.params.id}';`, res);
});

app.listen(port)
console.log('API RODANDO NA PORTA 3002!');