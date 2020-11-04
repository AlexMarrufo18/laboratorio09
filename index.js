const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//console.log('Hola mundo');

//usuario: userMarrufo
//contraseña: XFuL0U8fanHCUE9b
//string: mongodb+srv://userMarrufo:XFuL0U8fanHCUE9b@cluster0.swkzc.mongodb.net/proyectosDB

//codigo para desplegar el servidor
const server = express();

//configurando cors
server.use(cors());

//PRIMERA PETICION GET
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio REST'
    });
});

//conexion a la base de datos
dbconection();
//console.log(process.env);

//despliegue del servidor
server.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ' + process.env.PORT),
        console.log('Marrufo Huaman Alex Anders')
});