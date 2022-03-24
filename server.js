const express = require ('express')
const servicStatic = require('serve-static')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use('/',serveStatic(path.join(__dirname,'/src')))

const port = process.env.PORT || 8080
app.listen(port)

console.log("listening on port : "+port)
