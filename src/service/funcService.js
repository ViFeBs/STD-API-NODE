const funcDatabase = require('../database/funcDatabase')
const db = new funcDatabase()

class FuncService{
    listar(){
        return db.listar()
    }

    inserir(funcionario){
        if(!funcionario.nome ||
            !funcionario.cpf ||
            !funcionario.cargo ||
            !funcionario.idade)
                throw 'Funcionario não é Valido'
        if(!funcionario.idade >= 18)
            throw 'Idade do funcionario não é valida'

        db.inserir(funcionario)
    }

    alterar(id,funcionario){
        if(!funcionario.nome ||
            !funcionario.cpf ||
            !funcionario.cargo ||
            !funcionario.idade)
                throw 'Funcionario não é Valido'
        if(!id > 0)
            throw 'Funcionario Inválido'
        
        db.alterar(id,funcionario)
    }

    async deletar(id){
        if(!id > 0)
            throw 'Funcionario Inválido'
        let r = await db.deletar(id)
        if(r.deletedCount === 0)
            throw 'Funcionario não Existe'
    }
}

module.exports = FuncService