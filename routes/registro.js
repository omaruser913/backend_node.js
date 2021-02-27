'use strict'

var express = require('express');
var registroController = require('../controllers/registro');
var router = express.Router();

router.get('/registro', registroController.getRegistro);
router.get('/registroUser/:id', registroController.getRegistroEdit);
router.post('/agregar', registroController.insertRegistro);
router.put('/actualizarRegistro/:id', registroController.updateRegistro);
router.delete('/eliminarRegistro/:id', registroController.deleteRegistro);

module.exports = router;