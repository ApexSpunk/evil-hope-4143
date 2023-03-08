require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/connect");
const app = express();
const PORT = process.env.PORT;

const userRoute = require("./user/user.route")
const productRoute = require("./product/product.route")
const cartRoute = require("./cart/cart.route")

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json())

app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/cart', cartRoute)

app.get("/", (req, res) => {
    res.status(200).send("hello")
})

app.listen(PORT, async () => {
    await connect()
    console.log(`server started on port ${PORT}`)
})

