// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const climaRoutes = require('./routes/clima.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Montar rutas
app.use('/api/clima', climaRoutes);

// ruta raíz opcional
app.get('/', (req, res) => res.json({ service: 'ms-clima', status: 'ok' }));

module.exports = app;
