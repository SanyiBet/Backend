const db = require('../config/db');

exports.findAll = async () => {
  const result = await db.query(`
    SELECT p.*, b.nombre AS bodega, b.ciudad
    FROM productos p
    JOIN bodegas b ON p.bodega_id = b.id
  `);
  return result.rows;
};

exports.findById = async (id) => {
  const result = await db.query('SELECT * FROM productos WHERE id = $1', [id]);
  return result.rows[0];
};

exports.create = async ({ nombre, stock, precio, bodega_id }) => {
  await db.query(
    'INSERT INTO productos (nombre, stock, precio, bodega_id) VALUES ($1, $2, $3, $4)',
    [nombre, stock, precio, bodega_id]
  );
};

exports.update = async (id, { nombre, stock, precio, bodega_id }) => {
  await db.query(
    'UPDATE productos SET nombre=$1, stock=$2, precio=$3, bodega_id=$4 WHERE id=$5',
    [nombre, stock, precio, bodega_id, id]
  );
};

exports.remove = async (id) => {
  await db.query('DELETE FROM productos WHERE id=$1', [id]);
};
