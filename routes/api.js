const express = require('express');
const router = express.Router();
const { getProducts, sendContact } = require('../controllers/apiController');

router.get('/products', getProducts);
router.post('/contact', sendContact);

module.exports = router;
