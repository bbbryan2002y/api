'user strict'

var express = require('express');
var UserController = require('../controllers/user.controllers');

//es la funcion router de expres para que el cliente pueda reconcer
var api = express.Router();

// get : obtener informacion del servidor
// post : enviar informacion al servidor 
// put : para actualizar la informacion
// delete : para eliminar informacion de servidor
api.get('/prueba',UserController.prueba);
api.post('/SaveUser', UserController.SaveUser);




//siempre exportar el archico

module.exports = api;

