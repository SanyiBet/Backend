import db from '../config/db.js';

export const findAll = async () => {
  const result = await db.query(`
    SELECT r.*, u.placa, u.chofer, u.capacidad
    FROM rutas r
    JOIN unidades u ON r.unidad_id = u.id
  `);
  return result.rows;
};

export const findById = async (id) => {
  const result = await db.query('SELECT * FROM rutas WHERE id=$1', [id]);
  return result.rows[0];
};

export const create = async ({ origen, destino, unidad_id }) => {
  await db.query(
    'INSERT INTO rutas (origen, destino, unidad_id) VALUES ($1, $2, $3)',
    [origen, destino, unidad_id]
  );
};
