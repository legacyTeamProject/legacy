const categoryRouter = require('express').Router();
const {getCategories,getOneCategory,deleteCategory,addCategory,UpdateCategory , getCategoryzProd, getSubCategoryzProd,addCattype,getSub} = require('../../Controller/Category');

categoryRouter.get('/getAll',getCategories)
categoryRouter.get('/getOne/:catId',getOneCategory)
categoryRouter.delete('/delete/:catId',deleteCategory)
categoryRouter.post('/add',addCategory)
categoryRouter.put('/update/:catId',UpdateCategory)
categoryRouter.get('/catprodz/:categoryCatId',getCategoryzProd)

categoryRouter.get('/catprodz/:categoryCatId/:type_id',getSubCategoryzProd)
categoryRouter.post('/addtype',addCattype)
categoryRouter.get('/Sub',getSub)




module.exports=categoryRouter