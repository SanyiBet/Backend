const service = require('../services/unidad.service.js');

exports.listar = async (req, res) => {
  try {
    const unidades = await service.getUnidades();
    res.json(unidades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crear = async (req, res) => {
  try {
    await service.crearUnidad(req.body);
    res.status(201).json({ mensaje: 'Unidad registrada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
