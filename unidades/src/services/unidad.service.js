const models = require('../models/unidad.model.js');

exports.getUnidades = async () => models.findAll();
exports.getUnidadById = async (id) => models.findById(id);
exports.crearUnidad = async (data) => models.create(data);
