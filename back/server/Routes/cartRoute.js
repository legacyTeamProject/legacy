const cartRouter = require('express').Router()
const {getAll, add ,del,getByUserId} = require ('../../Controller/cart')

cartRouter.get('/getAll',getAll)
cartRouter.post('/addOne',add)
cartRouter.delete('/delete/:idCart',del)
cartRouter.get('/getUser/:id',getAll)


module.exports= cartRouter