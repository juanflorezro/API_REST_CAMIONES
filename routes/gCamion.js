const express = require('express')
const router = express.Router()
const { agregar, obtener, modificar, eliminar } = require('../methods/gestion/gCamion')
const { validationJWT } = require('../methods/security/validationJWT')

router.post('/camion', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
    .then(() => {
      try {
        agregar(req.body.camion).then(doc => { res.send(doc) })
      } catch (err) {
        res.status(500).send(err.message || 'Error interno del servidor')
      }
    })
    .catch(err => {
      res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err })
    })
});

router.get('/camion', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
    .then(() => {
      try {
        obtener().then(doc => res.send(doc))
      } catch (err) {
        res.status(500).send(err.message || 'Error interno del servidor')
      }
    })
    .catch(err => {
      res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err })
    })
});

router.put('/camion/:id', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
    .then(() => {
      try {
        modificar(req.params.id, req.body.camion).then(doc => res.send(doc))
      } catch (err) {
        res.status(500).send(err.message || 'Error interno del servidor')
      }
    })
    .catch(err => {
      res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err })
    })
});

router.delete('/camion/:id', async (req, res) => {
  const token = req.headers['authorization']
  validationJWT(token)
    .then(() => {
      try {
        eliminar(req.params.id).then(doc => res.send(doc))
      } catch (err) {
        res.status(500).send(err.message || 'Error interno del servidor')
      }
    })
    .catch(err => {
      res.status(400).json({ message: 'Access denied invalid token, enter your credentials again', error: err })
    })
});

module.exports = router
