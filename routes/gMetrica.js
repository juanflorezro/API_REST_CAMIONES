const express = require('express')
const router = express.Router()
const {agregar, obtener, modificar, eliminar} = require('../methods/gestion/gMetrica')
const {validationJWT} = require('../methods/security/validationJWT')

router.post('/metrica', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try {
      agregar(req.body.metrica).then(doc => res.send(doc) )      
    } catch (err) {
      res.status(500).send(err.message || 'Error interno del servidor')
    }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })
})
router.get('/metrica', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try {
      obtener().then(doc => res.send(doc) )
      
    } catch (err) {
      res.status(500).send(err.message || 'Error interno del servidor')
    }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })
})
router.put('/metrica/:id', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try {
      modificar(req.params.id, req.body.metrica).then(doc => res.send(doc) )
    } catch (err) {
      res.status(500).send(err.message || 'Error interno del servidor')
    }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })
})

router.delete('/metrica/:id', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
  .then(() => {
    try {
      eliminar(req.params.id).then(doc => res.send(doc) )
    } catch (err) {
      res.status(500).send(err.message || 'Error interno del servidor')
    }
  })
  .catch(err => { 
    res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err }) 
  })
})

module.exports = router
