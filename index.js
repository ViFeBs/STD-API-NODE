const express =  require('express')
const cors  =  require('cors')
const server  = express()
server.use(cors())
server.use(express.json())

const port = process.env.PORT | 8080

const funcionarios = require('./src/controller/funcController')

server.use(funcionarios)

function startServer(conn){
    const db = require('./src/database/funcDatabase')
    db.injectDB(conn)
    server.listen(port, () => console.log(`API INICIADA COM SUCESSO na ${port}`))
}

const MongoDB = require('mongodb').MongoClient
MongoDB
    .connect('mongodb+srv://FeBs:BrDEV@cluster0.qtdeh.mongodb.net/?retryWrites=true&w=majority')
    .then(startServer)
    .catch(e => {
        console.log(e)
        process.exit(-1)
    })