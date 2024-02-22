const cartRouter = require('express').Router()
const {getAll, add ,del,getByUserIdwish,getByUserIdcart,delet} = require ('../../Controller/cart')

cartRouter.get('/getAll',getAll)
cartRouter.post('/addOne',add)
cartRouter.delete('/deleteAll/:idCart',del)
cartRouter.get('/getUserw/:id', getByUserIdwish)
cartRouter.get('/getUserc/:id', getByUserIdcart)
cartRouter.delete('/deletprod/:id', delet)




module.exports= cartRouter