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

             const getByUserIdcart = async function (req, res) {
              try {
                const ids = await model.cart.findAll({
                  where: { userUserId: req.params.id }
                });
            
                // Map over ids and create an array of promises for product queries
                const productPromises = ids.map(async (el) => {
                  return await model.product.findAll({
                    where: { prodId: el.productProdId }
                  });
                });
            
                // Wait for all product queries to finish
                const prods = await Promise.all(productPromises);
            
                // Flatten the array of arrays into a single array of products
                const flattenedProds = prods.flat();
            
                res.json(flattenedProds);
              } catch (err) {
                console.log(err);
                res.status(500).json({ error: "Internal server error" });
              }
            }
            




              //  const getByUserIdcart= async function (req, res) {
              //  model.product.findAll({includes:{model:model.cart, where:{userUserId:req.params.id}}}).then((result)=>{
              //      res.json(result)
              //    })
              //    .catch((error)=>{
              //      res.send(error)
              //    })
              //   }


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