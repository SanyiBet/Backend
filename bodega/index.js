// bodega/index.js
const app = require('./src/app'); // asegúrate que la ruta es correcta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Bodega service running on port ${PORT}`);
});
