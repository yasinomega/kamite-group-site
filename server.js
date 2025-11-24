// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const pageRoutes = require('./routes/index');
const subsidiariesRoutes = require('./routes/subsidiaries');

const app = express();
const PORT = process.env.PORT || 3000;

/* ---------- view engine ---------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // views/layout.ejs

/* ---------- middlewares ---------- */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* ---------- static files ---------- */
app.use(express.static(path.join(__dirname, 'public')));

/* ---------- routes ---------- */
app.use('/', pageRoutes);
app.use('/filiales', subsidiariesRoutes);

/* ---------- 404 ---------- */
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page introuvable' });
});

/* ---------- start ---------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
