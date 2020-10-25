const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;

const {
  PRODUTOS_API_URL,
  VENDAS_API_URL,
} = require('./urls');

const produtosServiceProxy = httpProxy(PRODUTOS_API_URL);
const vendasServiceProxy = httpProxy(VENDAS_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/produtos', (req, res, next) => produtosServiceProxy(req, res, next));
app.get('/vendas', (req, res, next) => vendasServiceProxy(req, res, next));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));