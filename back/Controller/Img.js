const db = require('../Models/Image')
const connection=require("../Connection")
const model = connection.models


module.exports ={
    addImage: async(req,res)=>{
        try {
            const addition = model.image.create(req.body,{where:{productProdId:req.params.id}})
            res.json(addition)
        }
        catch (error) {res.send(error)}
    },

    // UpdateCategory : async(req,res) => {
    //     try {
    //     const updated=await model.image.update(req.body,{where:{catId:req.params.catId}})
    //     res.json(updated)   
    //     }
    //      catch (error) {res.send(error)}
    // },
    
    deleteImage: async (req,res)=>{
        try {
            const deleted = await model.image.destroy({
                where :  {imgId:req.params.id}
            })
            res.json(deleted)
        }
        catch (error) {res.send(error)}
    },
    getImage : async(req,res) => {
        try {
        const categories=await model.image.findAll({});
        res.json(categories) }
         catch (error) {res.send(error) }
    },
    getOneImage : async(req,res)=>{
        try{
            const category=await model.image.findOne({where:{imgId:req.params.id}})
            res.json(category)
        }
        catch (error) {res.send(error) }
    }

}