import express from 'express';
import cors from 'cors';
import unidadRoutes from './routes/unidad.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/unidades', unidadRoutes);

export default app;
