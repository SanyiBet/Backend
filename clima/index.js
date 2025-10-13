// index.js
require('./src/config/dotenv');
const app = require('./src/app');

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(` MS-Clima corriendo en el puerto ${PORT}`);
});
