import * as model from '../models/distancia.model.js';

export const getDistancia = async (origen, destino) => {
  // Llama al modelo para calcular la distancia
  return model.calcular(origen, destino);
};
