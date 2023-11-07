const crypto = require('crypto')
const algoritmo = 'aes-256-cbc'
const Key =  crypto.createHash('sha256').update(process.env['CRYPTO_C']).digest()
const iv = crypto.randomBytes(16)

const encriptar = (token) => {
  const cipher = crypto.createCipheriv(algoritmo, Key, iv)
  const passwordEncripted = Buffer.concat([cipher.update(token), cipher.final()])
  return {
    iv: iv.toString('hex'),
    encripted: passwordEncripted.toString('hex')
  }
}

module.exports = {
  encriptar
}