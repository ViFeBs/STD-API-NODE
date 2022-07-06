const { ObjectID } = require('bson')
let db

class FuncDatabase{
    static injectDB(conn){
        db = conn.db('empresa').collection('funcionarios')
    }

    listar(){
        return db.find().toArray()
    }

    inserir(func){
        return db.insertOne(func)
    }

    alterar(id, func){
        return db.updateOne(
                { _id: ObjectID(id) },
                {
                    $set: { 
                        nome: func.nome,
                        cpf: func.cpf,
                        idade: func.idade,
                        cargo: func.cargo
                    }
                }
            )
    }

    deletar(id){
        return db.deleteOne({_id: ObjectID(id)})
    }

}

module.exports = FuncDatabase