const Product = require('../models/Product');
const Contact = require('../models/Contact');

module.exports = {
    getProducts: async (req, res) => {
        const products = await Product.find();
        res.json(products);
    },

    sendContact: async (req, res) => {
        await Contact.create(req.body);
        res.json({ success: true });
    }
};
