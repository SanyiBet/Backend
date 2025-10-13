import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`MS-Gateway corriendo en el puerto ${PORT}`);
});
