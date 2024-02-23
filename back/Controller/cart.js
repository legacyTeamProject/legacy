const connection = require('../Connection')
const model= connection.models

const getAll = function (req, res) {
    const user=  model.cart.findAll({}).then((result)=>{
      res.status(201).send(result)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
  
  
          const getByUserIdwish= function (req, res) {
            model.product.findAll({includes:{model:model.wishlist, where:{userUserId:req.params.id}}}).then((result)=>{
               res.json(result)
             })
             .catch((error)=>{
               res.send(error)
             })
             }

             const getByUserIdcart= function (req, res) {
              model.product.findAll({includes:{model:model.cart, where:{userUserId:req.params.id}}}).then((result)=>{
                 res.json(result)
               })
               .catch((error)=>{
                 res.send(error)
               })
               }




  const add = function (req, res) {
    const user=  model.cart.create(req.body).then((result)=>{
      res.json(user)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
  
  const del = function (req, res) {
    const user=  model.cart.destroy({where:{idCart:req.params.idCart}}).then((result)=>{
      res.json(user)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
    const delet = function (req, res) {
      const user=  model.cart.destroy({where:{productProdId:req.params.prodid, userUserId: req.params.userId}}).then(()=>{
        res.json(user)
      })
      .catch((error)=>{
        res.send(error)
      })
      }
  
  
  
  
  
  
    module.exports={getAll, add ,del,getByUserIdwish,getByUserIdcart,delet}