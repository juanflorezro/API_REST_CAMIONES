const metricaModel = require('../models/metricaModel')

async function agregar(metrica) {
  try {
    const doc = await metricaModel.create(metrica)
    return doc
  } catch (err) { throw err }
}

async function obtener(filtro) {
  try {
    const doc = await metricaModel.find(filtro).populate('camion')
    return doc
  } catch (err) { throw err }
}

async function modificar(idMetrica, metrica) {
  try {
    const doc = await metricaModel.findByIdAndUpdate(idMetrica, metrica)
    return doc
  } catch (err) { throw err }
}

async function eliminar(filtro) {
  try {
    const doc = await metricaModel.findOneAndRemove(filtro)
    return doc
  } catch (err) { throw err }
}

module.exports = {
  agregar,
  obtener,
  modificar,
  eliminar
}
