const { Sequelize } = require('sequelize')
const mysql = require('mysql2')
const  {type} = require('./Models/cattype') 
const {userschema}  =require('./Models/User') 
const { WishlistSchema } =require('./Models/WishList') 
const { productSchema } =require( './Models/Product')
const { CartSchema } =require('./Models/cart') 
const {imageSchema} =require('./Models/Image') 
const {ratingschema}=require('./Models/rating')
const {categorySchema} =  require ('./Models/Category')
const {commentschema}=require('./Models/comments')

const {payschema}=require('./Models/payment')

const connection = new Sequelize('ecommerce', 'root', 'Me.inSql@Rbk', {
    host:'localhost',
    dialect:'mysql'
})

connection.authenticate() 
.then(()=>{
    console.log("connection has been successfully establissshed");
})
.catch((err)=>{
    console.log(err);
})





const comments=connection.define('comments',commentschema,{timestamps:false})

const cart = connection.define('cart', CartSchema,{timestamps:false})

const rating = connection.define('rate', ratingschema,{timestamps:false})

const Category= connection.define("category",categorySchema,{timestamps:false})

const wishlist=connection.define('wishlist',WishlistSchema,{timestamps:false})

const User = connection.define('users',userschema,{timestamps:false})

const CatType = connection.define('type', type,{timestamps:false})

const Image= connection.define("image",imageSchema,{timestamps:false})

const Product= connection.define("product",productSchema,{timestamps:false})

const payment= connection.define("payment",payschema,{timestamps:false})






User.hasMany(comments)
User.hasMany(Product)





comments.belongsTo(User)
comments.belongsTo(Product)




Product.belongsToMany(User,{through:rating})
Product.belongsToMany(User,{through:payment})
Product.belongsToMany(User,{through:cart})
Product.hasMany(comments)
Product.hasMany(Image)
Product.belongsToMany(User,{through:wishlist})

CatType.belongsTo(Category)

Category.hasMany(Product)
Category.hasMany(CatType)








// connection.authenticate()



module.exports = connection