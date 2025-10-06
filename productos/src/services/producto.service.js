const models = require('../models/producto.model');

exports.getProductos = async () => {
  return await models.findAll();
};

exports.getProductoById = async (id) => {
  return await models.findById(id);
};

exports.crearProducto = async (data) => {
  return await models.create(data);
};

exports.actualizarProducto = async (id, data) => {
  return await models.update(id, data);
};

exports.eliminarProducto = async (id) => {
  return await models.remove(id);
};
