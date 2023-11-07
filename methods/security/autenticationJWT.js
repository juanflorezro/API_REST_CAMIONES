const jwt = require('jsonwebtoken');
const {obtener} = require('../gestion/gConductor')
const {encriptar} = require('./autenticationCRYPTO')
function autenticationJWT(user) {
  return new Promise((resolve, reject) => {
    obtener(user)
    .then(doc => {
      if(doc[0].documento){
        if(doc[0].documento === user.documento && doc[0].n_licencia === user.n_licencia){
          if(doc[0].estado){
            const infoToken = {
              _id: doc[0]._id,
              nombre: doc[0].nombre,
              estado: doc[0].estado
            }
            const token1 = jwt.sign(infoToken, process.env['JWT_C'], {expiresIn: '12h'}) 
            token = encriptar(token1)
            resolve(token)
          }else {
            reject(new Error('El conductor no esta activo'))
          } 
        }
      }else {reject('El conductor no existe')}
      
    })
    .catch(err => {
      reject(err)
      console.log(err + '\n ----- en autenticationJWT')
    })
  });
}

module.exports = {
  autenticationJWT
}
