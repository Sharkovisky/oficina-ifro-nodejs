const mongoose = require('mongoose')

module.exports = async () =>{
    try{
        await mongoose.connect(process.env.STRING_URL,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:true,
            useUnifiedTopology:true
        })
        console.log('Conectado com sucesso!')
    } catch (error){
        console.log('Ocorreu um erro: ' + error)
    }
}