// src/controllers/clima.controller.js
const { obtenerClima } = require('../services/clima.service');

async function getClima(req, res) {
  try {
    const ciudad = req.params.ciudad;
    if (!ciudad) {
      return res.status(400).json({ error: 'Parámetro ciudad requerido' });
    }
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API_KEY no configurada en .env' });
    }
    const clima = await obtenerClima(ciudad, apiKey);
    return res.json(clima);
  } catch (err) {
    console.error('Error en controller getClima:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
}

module.exports = { getClima };
