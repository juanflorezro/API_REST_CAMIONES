const mongoose = require('mongoose') 
const metricaSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  p_neumaticos: {
    type: String,
    required: true
  },
  e_motor: {
    type: String,
    required: true
  },
  n_aceite: {
    type: String,
    required: true
  },
  n_liquido_r: {
    type: String,
    required: true
  },
  pw_motor: {
    type: String,
    required: true
  },
  v_bateria: {
    type: String,
    required: true
  },
  f_fin: {
    type: String,
    required: true
  },
  camion: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Camiones',
    required: true
  }
})
const metricaModel = mongoose.model('Metricas', metricaSchema)
module.exports = metricaModel
