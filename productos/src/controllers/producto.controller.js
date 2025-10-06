const service = require('../services/producto.service');

exports.listar = async (req, res) => {
  try {
    const productos = await service.getProductos();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crear = async (req, res) => {
  try {
    await service.crearProducto(req.body);
    res.status(201).json({ mensaje: 'Producto registrado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    await service.actualizarProducto(id, req.body);
    res.json({ mensaje: 'Producto actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const { id } = req.params;
    await service.eliminarProducto(id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
