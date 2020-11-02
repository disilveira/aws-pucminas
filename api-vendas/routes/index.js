const express = require('express');
const router = express.Router();


router.get('/', function(_, res) {
  res.json({
   message: 'API de Vendas'
  })
});

module.exports = router;
