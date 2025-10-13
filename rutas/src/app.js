import express from 'express';
import cors from 'cors';
import rutaRoutes from './routes/ruta.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/rutas', rutaRoutes);

export default app;
