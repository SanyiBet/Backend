require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Logging básico

const MS_BODEGAS = process.env.MS_BODEGAS;
const MS_PRODUCTOS = process.env.MS_PRODUCTOS;
const MS_CLIMA = process.env.MS_CLIMA;

// Rutas Gateway

// Bodegas
app.get('/api/bodegas', async (req, res) => {
  try {
    const response = await axios.get(`${MS_BODEGAS}/api/bodegas`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/bodegas', async (req, res) => {
  try {
    const response = await axios.post(`${MS_BODEGAS}/api/bodegas`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Productos
app.get('/api/productos', async (req, res) => {
  try {
    const response = await axios.get(`${MS_PRODUCTOS}/api/productos`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/productos', async (req, res) => {
  try {
    const response = await axios.post(`${MS_PRODUCTOS}/api/productos`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Clima
// Clima
app.get('/api/clima/:ciudad', async (req, res) => {
  try {
    const { ciudad } = req.params;
    // Asegúrate de que MS_CLIMA termina en el puerto correcto y sin slash final
    const response = await axios.get(`${MS_CLIMA}/clima/${ciudad}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = app;
