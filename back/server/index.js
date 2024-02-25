const express = require('express')
const cors = require('cors')
const connection = require('../Connection')

const con=require('../Connection')
// const User = require('../database/Models/User')
const PORT = 3000
const app = express()

const productRouter =require('./Routes/products')

const clientRouter=require('./Routes/ClientRoute')

const categoryRouter=require('./Routes/Category')
const authrouter=require('./Routes/authRoute')
const wishrouter=require('./Routes/wishRoute')
const ImageRouter=require('./Routes/ImgRoute')
const cartRouter=require('./Routes/cartRoute')
const commentRouter=require('./Routes/commentRoutes')
const paymentRouter=require('./Routes/payment')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use("/apii",productRouter)
app.use("/client/get/:id", clientRouter)
app.use("/auth",authrouter)
app.use("/wish",wishrouter)
app.use('/category',categoryRouter)
app.use('/img',ImageRouter)
app.use('/cartt',cartRouter)
app.use('/comment',commentRouter)
app.use('/payment',paymentRouter)

// connection.sync({alter: true})
connection.sync()


app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})