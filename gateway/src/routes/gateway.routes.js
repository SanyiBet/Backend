import express from 'express';
import { getUnidades, getRutas, getDistancia } from '../controllers/gateway.controller.js';

const router = express.Router();

// Rutas unificadas
router.get('/unidades', getUnidades);
router.get('/rutas', getRutas);
router.get('/distancia', getDistancia);

export default router;
