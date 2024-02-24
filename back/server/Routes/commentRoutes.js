const commentRouter = require('express').Router();
const {AllComments,updateComment,addComment,deleteComment,OneComments} = require('../../Controller/comment');

commentRouter.get('/getAll',AllComments)
commentRouter.get('/Onecomment/:id',OneComments)
commentRouter.post('/AddComment',addComment)
commentRouter.put('/UpdateComment/:id',updateComment)
commentRouter.delete('/DeleteComment/:id',deleteComment)



module.exports=commentRouter


