const connection = require('../Connection')
const { Sequelize, DataTypes } = require("sequelize");
const {Product} = require('./Product')
const categorySchema = {
catId:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
        primaryKey: true
},
content:{
    type:DataTypes.STRING,
    allowNull:false
}
}



module.exports = {
    categorySchema
}