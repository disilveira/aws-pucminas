const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

router.post('/', function(req, res) {
  var valor = req.body.valor;
  var produto_1 = req.body.produto1
  var qtd_produto_1 = req.body.qtd1
  var produto_2 = req.body.produto2
  var qtd_produto_2 = req.body.qtd2
  var produto_3 = req.body.produto3
  var qtd_produto_3 = req.body.qtd3
  var produto_4 = req.body.produto4
  var qtd_produto_4 = req.body.qtd4
  var produto_5 = req.body.produto5
  var qtd_produto_5 = req.body.qtd5

  var sql = `INSERT INTO registro (valor_total, produto_1, quantidade_produto_1, produto_2, quantidade_produto_2, produto_3, quantidade_produto_3, produto_4, quantidade_produto_4, produto_5, quantidade_produto_5) VALUES ('${valor}', '${produto_1}', '${qtd_produto_1}', '${produto_2}', '${qtd_produto_2}', '${produto_3}', '${qtd_produto_3}', '${produto_4}', '${qtd_produto_4}', '${produto_5}', '${qtd_produto_5}')`;
  connection.query(sql, function (err) {
    if (err) {
      console.log(req.body.valor)
      res.json({
        message: err
      })
    }
    else res.json({
      message: `Venda adicionada com sucesso no registro`
    })

  });
});

module.exports = router;
