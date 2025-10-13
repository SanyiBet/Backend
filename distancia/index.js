// index.js
import './src/config/dotenv.js';
import app from './src/app.js';

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`MS-Distancia corriendo en el puerto ${PORT}`);
});
