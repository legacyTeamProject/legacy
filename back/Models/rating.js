 const { Sequelize, DataTypes } = require("sequelize")

const ratingschema = {
    rating_id : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
         allowNull: false
    },
  
   rate : {
      type : DataTypes.INTEGER,
      allowNull: false
   },
  
  }


module.exports= {ratingschema}