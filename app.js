var express = require('express');
var favicon = require('serve-favicon')
var logger = require('morgan')
var compression = require('compression')
var errorHandler = require('errorhandler')
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(logger('dev'));
// use GZIP
app.use(compression());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));

// development only
app.set('env', 'development');
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/', routes.index);
app.get('/:number', routes.number);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
})

// don't let Heroku put the app to sleep
// http://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping
setInterval(function() {
    var url = app.get('env') == 'development' ? 'http://localhost:' + app.get('port') : "http://dogedc.herokuapp.com";

    http.get(url);
}, 300000);
