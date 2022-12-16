const {Schema,model} =require("mongoose");

const mongoose = require("mongoose");

const CartSchema=new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,ref:"User",required: true
    },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
})

const CartModel= model("Cart",CartSchema);

module.exports = CartModel;
