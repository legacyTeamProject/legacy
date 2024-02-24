const connection=require("../Connection")
const model = connection.models



const getAll = function (req, res) {
  const get= model.wishlist.findAll({}).then((result)=>{
    res.status(201).send(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }


  
// const getonewish = function (req, res) {
//   const get= model.product.findAll({includes:{model:model.wishlist, where:{userUserId:req.params.id}}}).then((result)=>{
//     res.status(201).send(result)
//   })
//   .catch((error)=>{
//     res.send(error)
//   })
//   }

  const getonewish = async function (req, res) {
    try {
      const ids = await model.wishlist.findAll({
        where: { userUserId: req.params.id }
      });
  
      
      const productPromises = ids.map(async (el) => {
        return await model.product.findAll({
          where: { prodId: el.productProdId }
        });
      });
  
      
      const prods = await Promise.all(productPromises);
  
    
      const flattenedProds = prods.flat();
  
      res.json(flattenedProds);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }


  
  // const getAllByUserId= function (req, res) {
  //   const getone= wishlist.findAll({where:{userId:req.params.id}}).then((result)=>{
  //     res.json(result)
  //   })
  //   .catch((error)=>{
  //     res.send(error)
  //   })
  //   }

const add = function (req, res) {
  const add= model.wishlist.create(req.body).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }

// const del = function (req, res) {
//   const del= model.wishlist.destroy({where:
//     {idWishlist:req.params.idWishlist,

//   }}).then((result)=>{
//     res.json(result)
//   })
//   .catch((error)=>{
//     res.send(error)
//   })
//   }

// const del= model.wishlist.destroy({includes:{model:model.product,where:{productProdId:req.params.id},where:{userUserId:req.params.userid}}}).then((result)=>{
//   res.json(result)
// })
// .catch((error)=>{
//   res.send(error)
// })
// }

const del = function (req, res) {

  model.wishlist.destroy({
    where: {
      productProdId: req.params.id,
      userUserId: req.params.userid
    }
  }).then((result) => {
    res.json(result);
  }).catch((error) => {
    console.error("Error deleting entry from wishlist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  });
}



  




  module.exports={getAll,add,del,getonewish}