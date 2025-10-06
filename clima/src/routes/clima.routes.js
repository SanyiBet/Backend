// src/routes/clima.routes.js
const express = require('express');
const router = express.Router();
const { getClima } = require('../controllers/clima.controller');

// GET /api/clima/:ciudad
router.get('/:ciudad', getClima);

module.exports = router;
