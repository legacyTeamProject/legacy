const {com} = require('../Models/comments.js')
const {Image} = require('../Models/Image.js')
const connection = require('../Connection')
const model = connection.models



const AllComments = async(req,res) => {
    try {
    const result=await model.comments.findAll({});
    res.json(result) }
     catch (error) {res.send(error) }
};


const OneComments = async(req,res) => {
  try {
  const result=await model.comments.findAll({where:{productProdId:req.params.id}});
  res.json(result) }
   catch (error) {res.send(error) }
};



const addComment = async (req, res) => {
    try{
    const add= await model.comments.create(req.body).then((result)=>{
      res.json(result)
    })}
    catch(error){
      res.send(error)
    }
    }


    const updateComment= async(req,res) => {
        try {
        const updated= await model.comments.update(req.body,{where:{comment_id:req.params.id}})
        res.json(updated)   
        }
         catch (error) {res.send(error)}
    }
    const  deleteComment = async(req,res) => {
        try {
        const updated= await model.comments.destroy({where:{comment_id:req.params.id}})
        res.json(updated)   
        }
         catch (error) {res.send(error)}
    }


    module.exports={AllComments,updateComment,addComment,deleteComment,OneComments}