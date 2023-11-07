const jwt = require('jsonwebtoken')
const {desencriptar} = require('./validationCRYPTO')
function validationJWT(token1){
  return new Promise(( resolve , reject ) => {
    const token = desencriptar(token1)
    jwt.verify(token, process.env['JWT_C'], function(error, user){
      if (error) {
       reject(false) 
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = {validationJWT}