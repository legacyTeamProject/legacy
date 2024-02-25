const connection=require("../Connection")
const model = connection.models




const getPayment = async function (req, res) {
  try {
    const ids = await model.payment.findAll({
      where: { userUserId: req.params.id }
    });

    const productPromises = ids.map(async (element) => {
      return await model.product.findAll({
        where: { prodId: element.productProdId }
      });
    });

    const prods = await Promise.all(productPromises);
    const flattenedProds = prods.flat();

  //  const deleted = model.cart.destroy({
  //     where : {userUserId : req.params.id}
  //  })


    res.json(flattenedProds);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
}





// async function getPayment(userId, productId) {
//     try {
//       const payment = await model.payment.findAll({
//         where: {
//           userId: userId,
//         },
//         include: [
//           {
//             model: model.product,
//             where: { id: prodId },
//           },
//         ],
//       });
//       return payment
//     } catch (error) {
//       console.error('Error fetching payment:', error);
//       throw error;
//     }
//   }


  module.exports = {getPayment}