const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const compression = require('compression')
const errorHandler = require('errorhandler')
const routes = require('./routes')
const http = require('http')
const path = require('path')
const app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')))
app.use(logger('dev'))
// use GZIP
app.use(compression())
app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, 'public')))

// development only
app.set('env', 'development')
if ('development' == app.get('env')) {
  app.use(errorHandler())
}

app.get('/', routes.index)
app.get('/:number', routes.number)

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'))
})

// don't let Heroku put the app to sleep
// http://quickleft.com/blog/6-easy-ways-to-prevent-your-heroku-node-app-from-sleeping
setInterval(() => {
    let url = app.get('env') == 'development' ? 'http://localhost:' + app.get('port') : "http://dogedc.herokuapp.com"

    http.get(url)
}, 300000)
