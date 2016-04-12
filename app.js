var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var connect = require('connect');
var methodOverride = require('method-override');
var secrets = require('./secrets');

var routes = require('./routes/index');
var users = require('./routes/users');

var sass = require('node-sass');
sass.render({
  file: '/stylesheets/app.scss',
}, function(err, result) {});

var app = express();

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/styles';
// OR




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'bumpsonalog' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(cookieParser());
app.use(
   sassMiddleware({
       src: __dirname + '/sass',
       dest: __dirname + '/public/stylesheets',
       prefix:  '/stylesheets',
       debug: true,
   })
);
app.use(express.static(path.join(__dirname, 'public')));

// set passport config
require('./config/passport')(passport);

app.use(function(req, res, next) {
  global.currentUser = req.user;
  next();
});

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONN_DAYTRIPPRR);

app.use('/styles', sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
