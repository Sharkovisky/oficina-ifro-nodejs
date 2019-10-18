const express = require('express')

const router = express.Router()

module.exports = () => {
    router.get('/alo-mundo', (req, res) => {
        res.status(200).json({
            "mensagem": "Alô Mundo!"
        })
    })
    router.post('/somar', (req, res) => {
        const valor1 = req.body.valor1
        const valor2 = req.body.valor2

        const resultado = valor1+valor2

        res.status(200).json({
            "resultado": resultado
        })
    })
    return router
}