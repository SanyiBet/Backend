// bodega/src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodegaRoutes = require('./routes/bodega.routes');

const app = express();
app.use(cors());
app.use(express.json());

// monta las rutas
app.use('/api/bodegas', bodegaRoutes);

module.exports = app;
