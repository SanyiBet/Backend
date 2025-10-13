// src/services/clima.service.js
const axios = require('axios');
const Clima = require('../models/clima.model');

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function obtenerClima(ciudad, apiKey) {
  try {
    const url = `${API_URL}?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric`;
    const resp = await axios.get(url);
    const data = resp.data;
    return new Clima(
      ciudad,
      data?.main?.temp ?? null,
      (data?.weather && data.weather[0] && data.weather[0].description) || null
    );
  } catch (err) {
    console.error(`Error en obtenerClima(${ciudad}):`, err.message || err);
    return new Clima(ciudad, null, 'Error obteniendo clima');
  }
}

module.exports = { obtenerClima };
