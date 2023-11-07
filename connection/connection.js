const mongoose = require('mongoose')
async function connect() {
  await mongoose.connect(process.env['CONNECT_DB'])
  .then(()=>console.log('Base de Datos Conectada Correctamente'))
  .catch(()=>console.log('Faild to MongoDB'))
}
module.exports = connect