'use strict'
// importaciones
var express = require('express');
var bodyPaser= require('body-parser'); 
// tome las propiedades de express
var app= express();
// configuracion body-parser

app.use(bodyPaser.urlencoded({extended:false}))
app.use(bodyPaser.json());

//para darle permiso al cliente de usarlo.
app.use((req,res,next)=>{
// los permisos de alos usuarios
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization , X-API-KEY, Origin, X-Requested-Width, Conten-Type, Accept, Acces-Control-Allow-Reques-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
 
 next();
});

//importacion de rutas (todo tipo de rutas)
var UserRutas = require('./rutas/user.rutas');

// vamos hacer los MiddleWare :
app.use('/api',UserRutas);


module.exports = app;