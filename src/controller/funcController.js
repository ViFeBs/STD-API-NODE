const router = require('express').Router()
const FuncService = require('../service/funcService')
const service = new FuncService()

router.get('/func', async (req,resp) =>{
    try{
        let funcionarios = await service.listar()
        resp.send(funcionarios)
    }catch(e){
        resp.status(400)
            .send({
                erro : e
            })
    }
})

router.post('/func', async (req,resp) =>{
    try{
        await service.inserir(req.body)
        resp.end()
    }catch(e){
        resp.status(400)
            .send({
                erro : e
            })
    }
})

router.put('/func/:id', async (req,resp) =>{
    try{
        await service.alterar(req.params.id, req.body)
        resp.end()
    }catch(e){
        resp.status(400)
            .send({
                erro : e
            })
    }
})

router.delete('/func/:id', async (req,resp) =>{
    try{
        await service.deletar(req.params.id)
        resp.end()
    }catch(e){
        resp.status(400)
            .send({
                erro : e
            })
    }
})

module.exports = router