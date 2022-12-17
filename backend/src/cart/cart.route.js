const express = require('express');
const CartModel= require("./cart.model");
const middleware=require("../config/middleware");

const app=express.Router();

app.get('/', middleware, async (req, res) => {
    console.log("cart");
    const id = req.userId;
    console.log(id);
    try {
        const cart = await CartModel.find({ userId: id }).populate('productId');
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(400).send(error);
    }
});

app.post('/', middleware, async (req, res) => {
    const id = req.userId;
    let cartItem = await CartModel.findOne({ userId: id, productId: req.body.productId });
    if (!cartItem) {       
        let cart = new CartModel(req.body);
        cart.userId = id;
        cart = await cart.save().then(() => { return cart.populate('productId')});
       return res.status(200).send({ message: "Product added to cart", data: cart });
    }
    else {
         cartItem.quantity = cartItem.quantity + req.body.quantity;
         let updatedcart =await CartModel.findByIdAndUpdate({_id:cartItem.id},{quantity:cartItem.quantity},{ new: true })
         updatedcart.populate('productId')
        res.status(200).send({ message: "Cart updated successfully", data: updatedcart  });
    }
});


app.put('/:id', middleware, async (req, res) => {
    const id = req.userId;
    try {
        const cart = await CartModel.findOneAndUpdate({ userId: id, _id: req.params.id }, req.body, { new: true }).populate('productId');
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(400).send(error);
    }
});


app.delete('/:id', middleware, async (req, res) => {
    try {
        await CartModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Item deleted from cart successfully" });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports =app;