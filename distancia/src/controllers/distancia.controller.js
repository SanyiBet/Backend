import * as service from '../services/distancia.service.js';

export const calcularDistancia = async (req, res) => {
  try {
    const { origen, destino } = req.query;

    if (!origen || !destino) {
      return res.status(400).json({ error: 'Debe especificar origen y destino' });
    }

    const resultado = await service.getDistancia(origen, destino);
    res.json(resultado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
