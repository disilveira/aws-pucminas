const createError = require('http-errors');
const express = require('express');
const methodOverride = require('method-override')
const path = require('path');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const gerarvendaRouter = require('./routes/gerar');
const listarvendaRouter = require('./routes/listar');
const cancelarvendaRouter = require('./routes/cancelar');

const app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Method Override
app.use(methodOverride('_method'))

// Express configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);
app.use('/gerar', gerarvendaRouter);
app.use('/listar', listarvendaRouter);
app.use('/cancelar', cancelarvendaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: 'error'});
});

// Listen to port 3000
var port = process.env.PORT || 3002;
app.listen(port, function () {
    console.log('Listening on port 3000', port);
});

module.exports = app;
