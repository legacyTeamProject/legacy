const {  DataTypes } = require("sequelize")

const commentschema = {

    comment_id : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
             },
  
   content : {
      type : DataTypes.TEXT,
      allowNull: false
   },
  
  }


module.exports= {commentschema}