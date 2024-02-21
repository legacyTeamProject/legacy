const productRouter = require('express').Router();
const {AllPro,GetOnePro,AddPro,DeletePro,UpdatePro,GetOneByUser, AddProimg ,getProimg ,UpdateRating,updateSellerProd } = require('../../Controller/product');

productRouter.get('/product',AllPro)
productRouter.get('/product/:id',GetOnePro)
productRouter.get('/findproduct/:id',GetOneByUser)

productRouter.post('/addproduct',AddPro)
productRouter.post('/productImg',AddProimg)
productRouter.get('/productImg/:id',getProimg)



productRouter.put('/product/:id',UpdatePro)
productRouter.put('/updateRatings/:id',UpdateRating)
productRouter.put("/update/:id",updateSellerProd)
productRouter.delete('/product/:id',DeletePro)

module.exports=productRouter;