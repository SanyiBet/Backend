import express from 'express';
import cors from 'cors';
import distanciaRoutes from './routes/distancia.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/distancia', distanciaRoutes);

export default app;
