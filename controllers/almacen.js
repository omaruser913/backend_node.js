'use strict'
const mysql = require('mysql');
//MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fabrica'
});

//conexion
connection.connect(error => {
    if (error) throw error;
    console.log('Conexion exitosa');
});

var controller = {
    getAlmacen: function (req, res) {
        let sql = 'SELECT id, tipoColor,capacidad, modelo, material  FROM almacenStock';
        connection.query(sql, (err, results) => {
            if(err) throw error;
            if(results.length > 0) {
                return res.status(200).send({status: true, data: results});
            } else {
                return res.status(404).send({status: false, data: 'Sin resultados'})
            }
        });
    },
    getAlmacenEdit: function (req, res) {
        let id = req.params.id;
        let qry = 'SELECT  id, tipoColor,capacidad, modelo, material  FROM almacenStock WHERE id= ' + id;

        connection.query(qry, (err, results) => {
            if(err) throw err;
            if(results.length > 0) {
                return res.status(200).send({status: true, data: results});
            } else {
                return res.status(404).send({status: false, data: 'Sin resultados'})
            }
        });
    },
    insertAlmacen: function (req, res) {        
        let qry = 'INSERT INTO almacenStock SET tipoColor = '+ "'" + req.body.tipoColor + "'" + ', capacidad = ' + req.body.capacidad + ', material = ' + "'" + req.body.material + "'" + ', modelo = ' + "'" + req.body.modelo + "'";
              
        connection.query(qry, (err) => {
            if(err) throw err;
            
            return res.status(200).send({status: true, data: 'taza agregada'});
        });
    },
    updateAlmacen: function (req, res) {
        let id = req.params.id;
        let tipoColor = req.body.tipoColor;
        let capacidad = req.body.capacidad;
        let modelo = req.body.modelo;
        let material = req.body.material;
        let qry = 'UPDATE almacenStock SET tipoColor = '+ "'" + tipoColor + "'" + ', capacidad = ' + capacidad + ', material = ' + "'" + material + "'" + ', modelo = ' + "'" + modelo + "'" + 'WHERE id = ' + id;

        connection.query(qry, (err) => {
            if(err) throw err;
            
            return res.status(200).send({status: true, data: 'Taza actualizada'});
        });
    },
    deleteAlmacen: function (req, res) {
        let id = req.params.id;
        let qry = 'DELETE FROM almacenStock WHERE id = ' + id;
        
        connection.query(qry, (err) => {
            if(err) throw err;
            
            return res.status(200).send({status: true, data: 'Taza eliminada'});
        });
    }
}

module.exports = controller;