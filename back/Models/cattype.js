const {  DataTypes } = require("sequelize")

const type = {
    type_id : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
         allowNull: false
    },
  
   type : {
      type : DataTypes.STRING,
      allowNull: false
   },
  
  }


module.exports= {type}