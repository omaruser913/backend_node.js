'use strict'
const mysql = require('mysql');
const port = process.env.PORT || 3050;
const app = require('./app');

//subida de archivos
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const multiPartMiddleware = multipart ({
    uploadDir: './subidas'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Endpoint to Upload files/Subida de ficheros
app.post('/api/subir', multiPartMiddleware, (req, res) => {
    res.json({
        'message': 'Fichero subido correctamente!'
    });
});
/*-----------------------------------------------------*/

app.listen(port, () => {
    console.log(`servidor corriendo en puerto ${port}`)
})