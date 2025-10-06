// bodega/src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodegaRoutes = require('./routes/bodega.routes');

const app = express();
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/bodegas', bodegaRoutes);


// manejo de errores
module.exports = app;
