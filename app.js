'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//archivo de rutas
var carrera_routes = require('./routes/almacen');

//middleware para body de peticiones
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api', carrera_routes);
//app.use('/api', estudiante_routes);

//exportamos modulo
module.exports = app;