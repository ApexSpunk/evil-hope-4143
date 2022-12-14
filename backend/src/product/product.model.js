const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: Array, required: true },
    discount: { type: Number, required: true },
    saveprice: { type: Number, required: true },
    cashback: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
