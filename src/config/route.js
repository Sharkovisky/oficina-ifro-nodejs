const configRouter = require('../router/config')

module.exports = app => {
    app.use('/', configRouter())
}