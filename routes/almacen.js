'use strict'

var express = require('express');
var AlmacenController = require('../controllers/almacen');
var router = express.Router();

router.get('/stock', AlmacenController.getAlmacen);
router.get('/stockProducto/:id', AlmacenController.getAlmacenEdit);
router.post('/agregar', AlmacenController.insertAlmacen);
router.put('/actualizarProducto/:id', AlmacenController.updateAlmacen);
router.delete('/eliminarProducto/:id', AlmacenController.deleteAlmacen);

module.exports = router;