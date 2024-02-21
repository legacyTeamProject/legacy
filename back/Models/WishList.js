const { Sequelize, DataTypes } = require("sequelize")



const WishlistSchema={
    idWishlist : {
     type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true,
    allowNull: false
  },
}


// connection.sync({alter: true})

module.exports = {WishlistSchema}