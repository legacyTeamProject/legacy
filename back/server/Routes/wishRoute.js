const wishrouter =  require('express').Router();
const {getAll,add ,del, getonewish}=require('../../Controller/wishList')



wishrouter.get('/getAll',getAll)
wishrouter.get('/getOne/:id',getonewish)
wishrouter.post('/add',add)
wishrouter.delete('/delete/:id/:userid',del)

module.exports= wishrouter;