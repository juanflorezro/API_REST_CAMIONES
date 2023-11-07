const conductorModel = require('../models/conductorModel')
async function agregar(conductor) {
  try {
    const doc = await conductorModel.create(conductor)
    return doc
  } catch (err) { throw err }
}
async function obtener(filtro) {
  try {
    const doc = await conductorModel.find(filtro)
    return doc
  } catch (err) { throw err }
}
async function modificar(idConductor, conductor) {
  try {
    const doc = await conductorModel.findByIdAndUpdate(idConductor, conductor)
    return doc
  } catch (err) { throw err }
}
async function eliminar(filtro) {
  try {
    const doc = await conductorModel.findOneAndRemove(filtro)
    return doc
  } catch (err) { throw err }
}
module.exports = {
  agregar,
  obtener,
  modificar,
  eliminar
}
