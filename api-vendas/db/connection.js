const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'vendas.c4p9z8grtje6.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'admin',   
  password : '12345678',
  database : 'vendas'
})

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

setInterval(function () {
  connection.query('SELECT 1');
}, 5000);

module.exports = connection;