const connection = require('../Connection')
const { Sequelize, DataTypes } = require("sequelize")

const CartSchema = {
    idCart : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
         allowNull: false
    },
  
   CartQuantity : {
      type : DataTypes.INTEGER,
      allowNull: false
   },
  
  }


module.exports= {CartSchema}