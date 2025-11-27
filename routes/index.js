// routes/index.js
const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// ---------- Pages générales ----------
router.get('/', pageController.index);
router.get('/about', pageController.about);
router.get('/services', pageController.services);
router.get('/filiales', pageController.filiales);
router.get('/contact', pageController.contact);  // <<< AJOUT OBLIGATOIRE

// ---------- Institution ----------
router.get('/institution/mot-du-fondateur', pageController.motDuFondateur);
router.get('/institution/historique', pageController.historique);
router.get('/institution/nos-atouts', pageController.nosAtouts);
router.get('/institution/perspectives', pageController.perspectives);

// ---------- (Option) routes séparées par service ----------
// Exemple : router.get('/services/transport', pageController.transport);

module.exports = router;
