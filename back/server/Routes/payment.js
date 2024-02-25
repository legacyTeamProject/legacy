const paymentsRouter = require('express').Router();
const {getPayment} = require ('../../Controller/payment')

paymentsRouter.get('/pay/:id',getPayment)


module.exports=paymentsRouter