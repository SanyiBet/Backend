const service = require('../services/bodega.service');

exports.listar = async (req, res) => {
  try {
    const bodegas = await service.getBodegas();
    res.json(bodegas);  // <--- esto debe devolver un array
  } catch (err) {
    console.error(err); // agregar log para debug
    res.status(500).json({ error: err.message });
  }
};

exports.crear = async (req, res) => {
  try {
    await service.crearBodega(req.body);
    res.status(201).json({ mensaje: 'Bodega registrada' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    await service.actualizarBodega(id, req.body);
    res.json({ mensaje: 'Bodega actualizada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const { id } = req.params;
    await service.eliminarBodega(id);
    res.json({ mensaje: 'Bodega eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
