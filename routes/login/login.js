const express = require('express')
const router = express.Router()
const {autenticationJWT} = require('../../methods/security/autenticationJWT')
const {validationJWT} = require('../../methods/security/validationJWT')

router.get('/login', (req, res) => {
  const user = {
    documento: '1002442323',
    n_licencia: '1234567890'
  }
  autenticationJWT(user)
  .then(doc => {
    res.status(200).json({
      message: 'Login Successful',
      data: doc
    })
  })
  .catch(err => {
    res.status(400).json({
      message: 'Login Failed',
      error: err
    })
  })
})
router.get('/validation', (req, res) => {
  const token = {
    iv: '3fa4b1d1c87424f9b53b1ff59fb0b360',
    encipted: '8130ce4ae95535e3d4198e4882e2238a48e8e2112217145668a95fa25dccb844d282f779b235656aebcf90096c6df0a3dfdf51ec18f26e47bd554864d5ff837c16071e5bf3678fa49e144f79f3e464d6b8a9fd0dbcd1b9b7925d052de60cce6e6e62ce0b79e9e5d687d3f0520ed48d26f5df8472f351b71c4cb6cb79cc69b53454fe90756084f52b593de611bf886ef7718d3ac29d534f03c1da306eb231848804bbcaec4ddb81cfde24d667f0aa58e0350b1edeab240dde89f7a7dab31cfdd5f46e3768a7d7ebb84a90bb8618b665ef179af37835c865c2020191bbd8ffc564'
  }
  validationJWT(token)
  .then(doc => {
    res.status(200).json({
      message: 'Successful',
      data: doc
    })
  })
  .catch(err => {
    res.status(400).json({
      message: 'Failed',
      error: err
    })
  })
})
router.get('/validation', (req, res) => {
  const { iv , encipted } = req.heaeders['authorization']
  validationJWT(token)
  .then(doc => {
    
  })
  .catch(err => { res.status(400).json({ message: 'Failed', error: err }) })
})
module.exports = router