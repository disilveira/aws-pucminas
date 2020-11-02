const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  var sucesso = 'Venda cancelada com sucesso'
  var sql = `DELETE FROM registro WHERE id = '${id}'`
  connection.query(sql , function (err, result, fields) {
    if (err) throw err;
    else res.json({
      message: sucesso
    })
  });

});



module.exports = router;
