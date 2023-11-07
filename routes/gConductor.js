const express = require('express')
const router = express.Router()
const { agregar, obtener, modificar, eliminar } = require('../methods/gestion/gConductor')
const {validationJWT} = require('../methods/security/validationJWT')
router.post('/conductor', async (req, res) => {
  const nuevoConductor = req.body.nuevoConductor
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try { agregar(nuevoConductor).then((doc) => res.send(doc)) } 
    catch (err) { res.status(500).send(err.message || 'Error interno del servidor') }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })
})

router.get('/conductor', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try {
      obtener().then(doc => res.send(doc)) 
    } catch (err) { res.status(500).send(err.message || 'Error interno del servidor') }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })
})

router.put('/conductor/:id', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try {
      modificar(req.params.id, req.body.conductor).then(doc => res.send(doc))      
    } catch (err) { res.status(500).send(err.message || 'Error interno del servidor') }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })

  
})

router.delete('/conductor/:id', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try {
      eliminar({ _id: req.params.id }).then(doc => res.send(doc))      
    } catch (err) { res.status(500).send(err.message || 'Error interno del servidor') }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })
})

module.exports = router
