const {Product} = require('../Models/Product.js')
const {} = require('../Models/Image.js')
const connection=require("../Connection")
const model = connection.models


const AllPro = async(req,res) => {
    try {
    const result=await model.product.findAll({});
    res.json(result) }
     catch (error) {res.send(error) }
};


// const AllProSeller = async(req,res) => {
//     try {
//     const result=await model.product.findAll({where:{role:req.params.seller}});
//     res.json(result) }
//      catch (error) {res.send(error) }
// };


const GetOnePro=async(req,res) => {
    try {
    const result=await model.product.findAll({where:{prodId:req.params.id}})
    res.json(result)}
    catch (error) { res.send(error)}
}

const GetOneByUser=async(req,res) => {
    try {
    const result=await model.product.findAll({where:{userUserId:req.params.id}})
    res.json(result)}
    catch (error) { res.send(error)}
}

const AddPro = async(req,res) => {
    try {
    const result=await model.product.create(req.body)
    res.json(result) } 
    catch (error) {res.send(error) }
};

const AddProimg = async(req,res) => {
    try {
    const result=await model.image.create(req.body)
    res.json(result) } 
    catch (error) {res.send(error) }
};

const getProimg = async(req,res) => {
    try {
    const result=await model.image.findAll({where:{productProdId:req.params.id}})
    res.json(result) } 
    catch (error) {res.send(error) }
};

const DeletePro = async(req,res) => {
    try {
    const result=await model.product.destroy({where:{prodId:req.params.id}})
    res.json(result) } 
    catch (error){res.send(error) }
};

const UpdatePro = async(req,res) => {
    try {
    const result=await model.product.update(req.body,{where:{prodId:req.params.id}})
    res.json(result)   
    }
     catch (error) {res.send(error)}
}
     
    const UpdateRating=async(req, res)=>{
        try {
            const ratings = await model.product.update({ratings:req.body.ratings},{where:{prodId:req.params.id}})
            res.json(ratings)
        }
        catch (error) {res.send(error)} 
     }

    const updateSellerProd= async (req,res)=>{
        try {
            const updated = await model.product.update(
                {
                    name:req.body.name,
                    description:req.body.description,
                    price:req.body.price,
                    categoryCatId:req.body.categoryCatId,
                    file:req.body.file,
            },{where:{prodId:req.params.id}})
            res.json(updated)
        }
        catch (error) {res.send(error)} 
    } 

    const rating = async (req,res) => {
        try {
          
          const ratings = await model.rate.findAll({
            where: { productProdId: req.params.id }
          });
      
          
          const sumOfRatings = ratings.reduce((total, rating) => total + rating.rate, 0);
      
          
          const averageRating = sumOfRatings / ratings.length;
      
          res.json( averageRating);
        } catch (error) {
          console.error("Error calculating average rating:", error);
          throw error;
        }
      };
      



module.exports={AllPro,GetOnePro,AddPro,DeletePro,UpdatePro,GetOneByUser,AddProimg,getProimg ,UpdateRating,updateSellerProd,rating}


