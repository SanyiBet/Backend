require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
const productosRoutes = require('./routes/producto.routes');
app.use('/api/productos', productosRoutes);

module.exports = app;
