var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var app = express()
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port
module.exports = app.listen(port, function(err) {
    if (err) {
       console.log(err)
       return 
    }
    console.log('Listening at http://loccalhost:' + port + '\n')
})