// src/models/clima.model.js
class Clima {
  constructor(ciudad, temperatura, descripcion) {
    this.ciudad = ciudad;
    this.temperatura = temperatura;
    this.descripcion = descripcion;
  }
}

module.exports = Clima;
