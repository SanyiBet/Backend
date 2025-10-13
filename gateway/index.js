
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
require('dotenv').config();
console.log('MS_BODEGAS =', process.env.MS_BODEGAS);
console.log('MS_PRODUCTOS =', process.env.MS_PRODUCTOS);
console.log('MS_CLIMA =', process.env.MS_CLIMA);
console.log('PORT =', process.env.PORT);

//Hola