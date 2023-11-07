const mongoose = require('mongoose')
const conductorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  t_documento: {
    type: String,
  },
  documento: {
    type: String,
    required: true
  },
  n_licencia: {
    type: String,
    required: true
  },
  f_inicio: {
    type: String,
    required: true
  },
  f_fin: {
    type: String,
    required: true
  },
  estado: {
    type: Boolean,
    required: true
  }
})
const conductorModel = mongoose.model('Conductores', conductorSchema)
module.exports = conductorModel