const { Sequelize, DataTypes } = require("sequelize");

const imageSchema = {
imgId:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
        primaryKey: true
},
img:{
    type:DataTypes.STRING,
    allowNull:false
}
}


// connection.sync({alter: true})


module.exports = {
    imageSchema
}