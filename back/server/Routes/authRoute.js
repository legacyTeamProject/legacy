


const express = require('express');
const authrouter = express.Router();
const {signupUser,loginUser} = require('../../Controller/authController');
const {authenticateUser} = require('../../middleware/authmidd')

authrouter.post('/signup', signupUser );
authrouter.post('/login',authenticateUser ,loginUser);




module.exports = authrouter