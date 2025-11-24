// routes/index.js
const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// pages
router.get('/', pageController.index);
router.get('/about', pageController.about);
router.get('/services', pageController.services);
router.get('/filiales', pageController.filiales);

// (création de routes séparées par service possible)
// exemple : router.get('/services/transport', pageController.transport);

module.exports = router;
