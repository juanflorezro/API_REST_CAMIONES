 const mongoose = require('mongoose') 
const camionSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  carga_m: {
    type: String,
    required: true
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conductores',
    required: true
  }
})
const camionModel = mongoose.model('Camiones', camionSchema)
module.exports = camionModel