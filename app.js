var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cargoRouter = require('./routes/cargo');
var departamentoRouter = require('./routes/departamento');
var descuentoRouter = require('./routes/descuento');
var devengadoRouter = require('./routes/devengado');
var empleadoRouter = require('./routes/empleado');
var nominaEmpleadoRouter = require('./routes/nominaEmpleado');
var rolRouter = require('./routes/rol');
var sesionRouter = require('./routes/sesion');
var sueldoRouter = require('./routes/sueldo');

var app = express();
//app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cargo',cargoRouter);
app.use('/departamento',departamentoRouter);
app.use('/descuento',descuentoRouter);
app.use('/devengado',devengadoRouter);
app.use('/empleado',empleadoRouter);
app.use('/nominaEmpleado',nominaEmpleadoRouter);
app.use('/rol',rolRouter);
app.use('/sesion',sesionRouter);
app.use('/sueldo',sueldoRouter);


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


