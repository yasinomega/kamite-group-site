const express = require('express');
const router = express.Router();
const { home, about, contact, products } = require('../controllers/pageController');

router.get('/', home);
router.get('/about', about);
router.get('/contact', contact);
router.get('/products', products);

module.exports = router;
