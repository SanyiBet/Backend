const db = require('../config/db.js');

exports.findAll = async () => {
  const result = await db.query('SELECT * FROM unidades');
  return result.rows;
};

exports.findById = async (id) => {
  const result = await db.query('SELECT * FROM unidades WHERE id=$1', [id]);
  return result.rows[0];
};

exports.create = async ({ placa, chofer, capacidad }) => {
  await db.query(
    'INSERT INTO unidades (placa, chofer, capacidad) VALUES ($1, $2, $3)',
    [placa, chofer, capacidad]
  );
};
