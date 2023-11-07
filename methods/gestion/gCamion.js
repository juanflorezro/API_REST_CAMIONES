const camionModel = require('../models/camionModel');

async function agregar(camion){
  try {
    const doc = await camionModel.create(camion);
    return doc
  } catch (err) {throw err}
}

async function obtener(filtro){
  try {
    const doc = await camionModel.find(filtro).populate('conductor');
    return doc;
  } catch (err) {throw err}
}

async function modificar(idCamion, camion){
  try {
    const doc = await camionModel.findByIdAndUpdate(idCamion, camion)
    return doc
  } catch (err) {throw err}
}

async function eliminar(filtro){
  try {
    const doc = await camionModel.findOneAndRemove(filtro)
    return doc
  } catch (err) {throw err}
}
module.exports = {
  agregar,
  obtener,
  modificar,
  eliminar
}
