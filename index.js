'use strict'

const mysql = require('mysql');
const port = process.env.PORT || 3050;
const app = require('./app');

app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`)
})