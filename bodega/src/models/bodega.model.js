// bodega/src/models/bodega.model.js
const db = require('../config/db');

exports.findAll = async () => {
  const result = await db.query('SELECT * FROM bodegas');
  return result.rows;
};

exports.findById = async (id) => {
  const result = await db.query('SELECT * FROM bodegas WHERE id = $1', [id]);
  return result.rows[0];
};

exports.create = async ({ nombre, ciudad }) => {
  await db.query('INSERT INTO bodegas (nombre, ciudad) VALUES ($1, $2)', [nombre, ciudad]);
};

exports.update = async (id, { nombre, ciudad }) => {
  await db.query('UPDATE bodegas SET nombre=$1, ciudad=$2 WHERE id=$3', [nombre, ciudad, id]);
};

exports.remove = async (id) => {
  await db.query('DELETE FROM bodegas WHERE id=$1', [id]);
};
