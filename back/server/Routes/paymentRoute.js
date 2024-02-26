const express = require ('express');
const { getPayment } = require('../../Controller/payment');
const paymentRouter = require('express').Router();


paymentRouter.post('/payment',getPayment )

module.exports = paymentRouter 
