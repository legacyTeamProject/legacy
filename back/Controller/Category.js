const connection = require('../Connection')
const db = require('../Models/Category')

const model = connection.models
module.exports ={

   getCategoryzProd : async(req,res)=>{
        try{
            const category=await model.product.findAll({where:{categoryCatId: +req.params.categoryCatId}})
            res.json(category)
        }
        catch (error) {res.send(error) }
    },

   //  url/endpoint/param1/param2 fe
   //  /endpoint/:param1/:param2 server 

    getSubCategoryzProd : async(req,res)=>{
        try{
            const category=await model.product.findAll({where:{categoryCatId:+req.params.categoryCatId},includes:{model:model.Type, where:{type_id:+req.params.type_id}}})
            res.json( category)
            console.log('catttt');
        }
        catch (error) {res.send(error) }
    },
    // await Task.findAll({ include: User });



    addCategory: async(req,res)=>{
        try {
            const addition = model.category.create(req.body)
            res.json(addition)
        }
        catch (error) {res.send(error)}
    },



    addCattype: async(req,res)=>{
        try {
            const addition = model.type.create(req.body)
            res.json(addition)
        }
        catch (error) {res.send(error)}
    },


    UpdateCategory : async(req,res) => {
        try {
        const updated=await model.category.update(req.body,{where:{catId:req.params.catId}})
        res.json(updated)   
        }
         catch (error) {res.send(error)}
    },
    
    deleteCategory: async (req,res)=>{
        try {
            const deleted = await model.category.destroy({
                where :  {catId:req.params.catId}
            })
            res.json(deleted)
        }
        catch (error) {res.send(error)}
    },
    getCategories : async(req,res) => {
        try {
        const categories=await model.category.findAll({});
        res.send( categories) }
         catch (error) {res.send(error) }
    },

    getSub : async(req,res) => {
        try {
        const categories=await model.type.findAll({});
        res.json(categories)
    console.log("sub getted"); }
         catch (error) {res.send(error) }
    },
    getOneCategory : async(req,res)=>{
        try{
            const category=await model.category.findOne({where:{catId:req.params.catId}})
            res.json(category)
        }
        catch (error) {res.send(error) }
    }

}



