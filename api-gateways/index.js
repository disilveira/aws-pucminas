require('dotenv').config()

const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const port = 3000;

let url_vendas   = process.env.API_VENDAS + ':' + process.env.API_VENDAS_PORT;
let url_produtos = process.env.API_PRODUTOS + ':' + process.env.API_PRODUTOS_PORT;

app.use('/v',proxy(url_vendas));
app.use('/p',proxy(url_produtos));

app.listen(port, () => console.log(`Servidor Gateway ativo na porta ${port}!`));