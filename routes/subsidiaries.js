// routes/subsidiaries.js
const express = require('express');
const router = express.Router();

// FILIALES
router.get('/gold-beauty', (req, res) => {
  res.render('subsidiaries/goldbeauty', { title: "Gold Beauty - Filiale Kamite Group" });
});

router.get('/amabutho', (req, res) => {
  res.render('subsidiaries/amabutho', { title: "Amabutho Sécurité - Filiale Kamite Group" });
});

router.get('/afroclean', (req, res) => {
  res.render('subsidiaries/afroclean', { title: "AfroClean - Filiale Kamite Group" });
});

router.get('/express', (req, res) => {
  res.render('subsidiaries/express', { title: "Établissements Express - Filiale Kamite Group" });
});

module.exports = router;
