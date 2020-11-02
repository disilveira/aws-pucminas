const sqlite3 = require('sqlite3');
const express = require('express');
var app = express();

const HTTP_PORT = 3003
app.listen(HTTP_PORT, () => {
    console.log("Servidor iniciado na porta " + HTTP_PORT);
});

const db = new sqlite3.Database('./api_database.db', (err) => {
    if(err){
        console.log("Erro ao comunicar com o banco de dados " + err.message);
    } else {
        db.run('CREATE TABLE vendas( \
            venda_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
            valor_venda DECIMAL(10,2) NOT NULL, \
            produto_id INTEGER NOT NULL,\
            quantidade INTEGER NOT NULL\
            )', (err) => {
                if(err){
                    console.log("A Tabela de vendas já existe, ignorando a criação de uma nova...");
                }
            });
    }
});