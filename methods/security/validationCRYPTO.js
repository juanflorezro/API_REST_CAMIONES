const crypto = require('crypto')
const algoritmo = 'aes-256-cbc'

const desencriptar = (token) => {
  const iv = Buffer.from(token.iv, 'hex') 
  const encripted = Buffer.from(token.encipted, 'hex')
  const tokenDesencripted = crypto.createDecipheriv(algoritmo, crypto.createHash('sha256').update(process.env['CRYPTO_C']).digest(), iv)
    return Buffer.concat([tokenDesencripted.update(encripted), tokenDesencripted.final()]).toString()
}

module.exports = {
  desencriptar
}