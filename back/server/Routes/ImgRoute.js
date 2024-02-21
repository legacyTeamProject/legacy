const ImageRouter = require('express').Router();
const {getImage,getOneImage,deleteImage,addImage,UpdateImage} = require('../../Controller/Img');

ImageRouter.get('/getAll',getImage)
ImageRouter.get('/getOne/:id',getOneImage)
ImageRouter.delete('/delete/:id',deleteImage)
ImageRouter.post('/add/:id',addImage)
// ImageRouter.put('/update/:catId',UpdateImage)

module.exports=ImageRouter