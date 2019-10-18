const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const configRouter = require('./src/config/route')

const app = express()
app.use(cors({origin:['http://localhost:3000']}))
app.use(bodyParser.json())
app.use(morgan('combined'))

configRouter(app)
app.listen(3001, () => {
    console.log('Conectado com sucesso!')
})