const sqlite3 = require('sqlite3');
const express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const HTTP_PORT = 3002
app.listen(HTTP_PORT, () => {
    console.log("Servidor iniciado na porta " + HTTP_PORT);
});

/**
 * Cria a tabela de vendas
 */
const db = new sqlite3.Database('./api.db', (err) => {
    if(err){
        console.log("Erro ao comunicar com o banco de dados " + err.message);
    } else {
        db.run('CREATE TABLE vendas( \
            venda_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
            valor_venda FLOAT NOT NULL, \
            produto_id INTEGER NOT NULL,\
            quantidade INTEGER NOT NULL\
            )', (err) => {
                if(err){
                    console.log("A Tabela de vendas já existe, ignorando a criação de uma nova...");
                }
            });
    }
});

/**
 * Lista uma venda
 */
app.get("/vendas/:id", (req, res, next) => {
    var params = [req.params.id]
    db.get(`SELECT * FROM vendas WHERE venda_id = ?`, [req.params.id], (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.status(200).json(row);
    });
});

/**
 * Lista todas as vendas
 */
app.get("/vendas", (req, res, next) => {
    db.all("SELECT * FROM vendas", [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.status(200).json({rows});
    });
});

/**
 * Insere uma venda
 */
app.post("/vendas", (req, res, next) => {
    var reqBody = req.body;
    db.run(`INSERT INTO vendas (valor_venda, produto_id, quantidade) VALUES (?,?,?)`, 
    [reqBody.valor_venda, reqBody.produto_id, reqBody.quantidade],
    function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message})
            return;
        }
        res.status(201).json({
            "venda_id": this.lastID
        })
    });
});

/**
 * Atualiza uma venda
 */
app.patch("/vendas", (req, res, next) => {
    var reqBody = req.body;
    db.run(`UPDATE vendas SET valor_venda = ?, produto_id = ?, quantidade = ? WHERE venda_id = ?`,
    [reqBody.valor_venda, reqBody.produto_id, reqBody.quantidade, reqBody.venda_id],
    function (err, result) {
        if (err) {
            res.status(400).json({ "error": res.message })
            return;
        }
        res.status(200).json({ "id_atualizado": reqBody.venda_id });
    });
});

/**
 * Exclui uma venda
 */
app.delete("/vendas/:id", (req, res, next) => {
    db.run(`DELETE FROM vendas WHERE venda_id = ?`,
    req.params.id,
    function (err, result) {
        if (err) {
            res.status(400).json({ "error": res.message })
            return;
        }
        res.status(200).json({ "id_excluido": req.params.id });
    });
});