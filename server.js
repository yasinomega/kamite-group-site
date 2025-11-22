require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const pageRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// DB connexion
const connectDB = require('./config/db');

connectDB(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error", err));

// routes
app.use('/', pageRoutes);
app.use('/api', apiRoutes);

// 404
app.use((req, res) => {
  res.status(404).render('layout', {
    title: '404 - Page introuvable'
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
