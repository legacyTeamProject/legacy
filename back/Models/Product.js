const { Sequelize, DataTypes } = require("sequelize");
// const {Category} = require('./Category')

const productSchema = {
prodId:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
        primaryKey: true
},
name:{
    type:DataTypes.STRING,
    allowNull:false
},
description:{
    type:DataTypes.STRING,
    allowNull:false
},
price:{
    type:DataTypes.INTEGER,
    allowNull:false,
},
ratings:{
    type:DataTypes.INTEGER,
    allowNull:true,
},
file:{
    type:DataTypes.STRING,
    allowNull:false,
    },

sold:{
    type:DataTypes.INTEGER
    } ,
quantity:{
    type:DataTypes.INTEGER
}

}




module.exports = {
productSchema
}