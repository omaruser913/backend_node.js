'use strict'
const mysql = require('mysql');
//MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prospecto'
});

//conexion
connection.connect(error => {
    if (error) throw error;
    console.log('Conexion exitosa');
});

var controller = {
    getRegistro: function (req, res) {
        let sql = 'SELECT id, nombre, apellidoPaterno, apellidoMaterno, calle, numero, colonia, codigoPostal, telefono, rfc, estatus  FROM usuarioregistro';
        connection.query(sql, (err, results) => {
            if (err) throw error;
            if (results.length > 0) {
                return res.status(200).send({ status: true, data: results });
            } else {
                return res.status(404).send({ status: false, data: 'Sin resultados' })
            }
        });
    },
    getRegistroEdit: function (req, res) {
        let id = req.params.id;
        let qry = 'SELECT  nombre, apellidoPaterno, apellidoMaterno, calle, numero, colonia, codigoPostal, telefono, rfc, estatus  FROM usuarioregistro WHERE id= ' + id;

        connection.query(qry, (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                return res.status(200).send({ status: true, data: results });
            } else {
                return res.status(404).send({ status: false, data: 'Sin resultados' })
            }
        });
    },
    insertRegistro: function (req, res) {
        let qry = 'INSERT INTO usuarioregistro SET nombre = ' + "'" + req.body.nombre + "'" + ', apellidoPaterno = ' + "'" + req.body.apellidoPaterno + "'" + ', apellidoMaterno = ' + "'" + req.body.apellidoMaterno + "'" + ', calle = ' + "'" + req.body.calle + "'" + ', numero = ' + "'" + req.body.numero + "'" + ', colonia = ' + "'" + req.body.colonia + "'" + ', codigoPostal = ' + "'" + req.body.codigoPostal + "'" + ', telefono = ' + "'" + req.body.telefono + "'" + ', rfc = ' + "'" + req.body.rfc + "'" + ', estatus = ' + "'" + req.body.estatus + "'";

        connection.query(qry, (err) => {
            if (err) throw err;

            return res.status(200).send({ status: true, data: 'insertado' });
        });
    },
    updateRegistro: function (req, res) {
        let id = req.params.id;
        let nombre = req.body.nombre;
        let apellidoPaterno = req.body.apellidoPaterno;
        let apellidoMaterno = req.body.apellidoMaterno;
        let calle = req.body.calle;
        let numero = req.body.numero;
        let colonia = req.body.colonia;
        let codigoPostal = req.body.codigoPostal;
        let telefono = req.body.telefono;
        let rfc = req.body.rfc;
        let estatus = req.body.estatus;
        let qry = 'UPDATE usuarioregistro SET nombre = ' + "'" + nombre + "'" + ', apellidoPaterno = ' + apellidoPaterno + ', apellidoMaterno = ' + "'" + apellidoMaterno + "'" + ', calle = ' + "'" + calle + "'" + ', numero = ' + "'" + numero + "'" + ', colonia = ' + "'" + colonia + "'" + ', codigoPostal = ' + "'" + codigoPostal + "'" + ', telefono = ' + "'" + telefono + "'" + ', rfc = ' + "'" + rfc + "'" + ', estatus = ' + "'" + estatus + "'" + 'WHERE id = ' + id;

        connection.query(qry, (err) => {
            if (err) throw err;

            return res.status(200).send({ status: true, data: 'registro actualizado' });
        });
    },
    deleteRegistro: function (req, res) {
        let id = req.params.id;
        let qry = 'DELETE FROM usuarioregistro WHERE id = ' + id;

        connection.query(qry, (err) => {
            if (err) throw err;

            return res.status(200).send({ status: true, data: 'registro eliminado' });
        });
    }
}

module.exports = controller;