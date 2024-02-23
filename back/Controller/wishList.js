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


  
const getonewish = function (req, res) {
  const get= model.product.findAll({includes:{model:model.wishlist, where:{userUserId:req.params.id}}}).then((result)=>{
    res.status(201).send(result)
  })
  .catch((error)=>{
    res.send(error)
  })
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


const del = function (req, res) {
  const del= model.wishlist.destroy({includes:{model:model.product,where:{productProdId:req.params.id},where:{userUserId:req.params.userid}}}).then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    res.send(error)
  })
  }



  




  module.exports={getAll,add,del,getonewish}