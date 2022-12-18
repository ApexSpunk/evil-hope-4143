const express = require("express");
const Product = require("./product.model");
const app = express();
const AdminMiddleware = require("../config/adminMiddleware");

app.get("/", async (req, res) => {
    try {
        let { page, limit, category } = req.query;
        if (!page) page = 1;
        if (!limit) limit = 10;
        let query = {};
        if (category) query.category = category;
        const products = await Product.find(query).skip((page - 1) * limit).limit(limit);
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get("/search", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.post("/", AdminMiddleware, async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.patch("/:id", AdminMiddleware, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params, req.body, { new: true });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete("/:id", AdminMiddleware, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app;

