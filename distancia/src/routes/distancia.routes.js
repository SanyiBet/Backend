import express from 'express';
import { calcularDistancia } from '../controllers/distancia.controller.js';

const router = express.Router();

// GET /api/distancia?origen=CiudadA&destino=CiudadB
router.get('/', calcularDistancia);

export default router;
