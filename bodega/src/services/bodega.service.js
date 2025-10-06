const models = require('../models/bodega.model');

exports.getBodegas = async () => {
  return await models.findAll();
};

exports.getBodegaById = async (id) => {
  return await models.findById(id);
};

exports.crearBodega = async (data) => {
  return await models.create(data);
};

exports.actualizarBodega = async (id, data) => {
  return await models.update(id, data);
};

exports.eliminarBodega = async (id) => {
  return await models.remove(id);
};
