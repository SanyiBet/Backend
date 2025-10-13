import * as models from '../models/ruta.model.js';

export const getRutas = async () => models.findAll();
export const getRutaById = async (id) => models.findById(id);
export const crearRuta = async (data) => models.create(data);
