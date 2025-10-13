// src/config/db.js
// MS-Clima no usa base de datos, pero dejamos la estructura por coherencia.
module.exports = {
  connect: async () => {
    console.log('🟡 MS-Clima: no se requiere conexión a BD.');
  }
};
