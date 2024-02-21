const {  DataTypes } = require("sequelize")

const payschema = {

    pay_id : {
         type : DataTypes.INTEGER,
         autoIncrement : true,
         primaryKey : true ,
             },

      cardName:{
        type:DataTypes.STRING
      } ,      
    cardNumber:{
        type:DataTypes.STRING,
        
    }  ,
    
  code:{
    type:DataTypes.INTEGER
  }
 
  
  }


module.exports= {payschema}