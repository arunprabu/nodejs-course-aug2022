// imports from node_modules 
var createError = require('http-errors'); 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// custom imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// variables
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // where's the template
app.set('view engine', 'pug'); // what's the template engine

app.use(logger('dev'));
app.use(express.json()); // 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter); // localhost:3000/
app.use('/users', usersRouter);// localhost:3000/users

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
  res.render('error');
});

module.exports = app;
