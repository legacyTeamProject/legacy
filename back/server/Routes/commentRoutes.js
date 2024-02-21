const commentRouter = require('express').Router();
const {AllComments,updateComment,addComment,deleteComment} = require('../../Controller/comment');

commentRouter.get('/getAll',AllComments)
commentRouter.post('/AddComment',addComment)
commentRouter.put('/UpdateComment/:id',updateComment)
commentRouter.delete('/DeleteComment/:id',deleteComment)



module.exports=commentRouter


