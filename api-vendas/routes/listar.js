const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

router.get('/', function(_, res) {
  var sql = `SELECT * FROM registro`
  connection.query(sql , function (err, result, fields) {
    if (err) throw err;
    else res.render('listar', {result})
  });
});

module.exports = router;
