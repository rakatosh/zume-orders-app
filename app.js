const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
