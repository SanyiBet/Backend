import * as service from '../services/ruta.service.js';

export const listar = async (req, res) => {
  try {
    const rutas = await service.getRutas();
    res.json(rutas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const crear = async (req, res) => {
  try {
    const { origen, destino, unidad_id } = req.body;

    if (!origen || !destino || !unidad_id) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    await service.crearRuta({ origen, destino, unidad_id });
    res.status(201).json({ mensaje: 'Ruta registrada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
