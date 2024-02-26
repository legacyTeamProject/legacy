const {Product} = require('../Models/Product.js')
const {} = require('../Models/Image.js')
const { Op } = require('sequelize');
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





const GetOneByrate = async (req, res) => {
    try {
        const result = await model.product.findAll({
            where: {ratings: {[Op.gte]: req.params.rate }}});
            res.status(200).json(result)
    } catch (error) {
        res.send(error);
    }
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

    const rating = async (req, res) => {
        try {
            
            const ratings = await model.rate.findAll({ where: { productProdId: req.params.id } });
    
            
            if (ratings.length === 0) {
                return res.status(404).json({ error: "No ratings found for the product." });
            }
    
            
            const sumOfRatings = ratings.reduce((total, rating) => total + rating.rate, 0);
    
            
            const averageRating = sumOfRatings / ratings.length;
    
            
            await model.product.update({ ratings: averageRating }, { where: { prodId: req.params.id } });
    
            
            res.json({ averageRating });
        } catch (error) {
            console.error("Error calculating average rating:", error);
            res.status(500).json({ error: "An internal server error occurred." });
        }
    };

      const getrating = async (req,res) => {
        try {
          
          const ratings = await model.rate.findAll({
            
          });
      
          res.json( ratings);
        } catch (error) {
          console.error("Error calculating average rating:", error);
          throw error;
        }
      };



      const addRate = async (req, res) => {
        try {
            
            const { userid, prodid } = req.params;
    
           
            const existingRating = await model.rate.findOne({
                where: { userUserId: userid, productProdId: prodid }
            });
    
            if (existingRating) {
                await existingRating.update({
                    rate: req.body.rate
                });
            } else {
                await model.rate.create({
                    userUserId: userid,
                    productProdId: prodid,
                    rate: req.body.rate
                });
            }
    
            
            await model.product.update({ ratings: req.body.rate }, { where: { prodId: prodid } });
    
          
            res.status(200).send("Rating added successfully");
        } catch (error) {
            console.error("Error adding rating:", error);
            
            res.status(500).send("Internal Server Error");
        }
    };
    
      



module.exports={addRate,AllPro,GetOnePro,AddPro,DeletePro,UpdatePro,GetOneByUser,AddProimg,getProimg ,UpdateRating,updateSellerProd,rating,GetOneByrate,getrating}


