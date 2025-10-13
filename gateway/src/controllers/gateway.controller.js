import axios from 'axios';

const MS_UNIDADES = process.env.MS_UNIDADES_URL || 'http://localhost:3001/api/unidades';
const MS_RUTAS = process.env.MS_RUTAS_URL || 'http://localhost:3002/api/rutas';
const MS_DISTANCIA = process.env.MS_DISTANCIA_URL || 'http://localhost:3003/api/distancia';

export const getUnidades = async (req, res) => {
  try {
    const response = await axios.get(MS_UNIDADES);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRutas = async (req, res) => {
  try {
    const response = await axios.get(MS_RUTAS);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDistancia = async (req, res) => {
  const { origen, destino } = req.query;
  if (!origen || !destino) {
    return res.status(400).json({ error: 'Debe indicar origen y destino' });
  }

  try {
    const response = await axios.get(MS_DISTANCIA, { params: { origen, destino } });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
