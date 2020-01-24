//los atribitos que va tener la coleccion usuario
'use strict' //se coloca use strict para que lo puedan reconecer los navegadores//

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
// vamos a crear un objecto Jeson con los atributos de la coleccion
//lo que va tener el useario (Atributos)
var userSchema = Schema({
 Name:String,
 Lastname: String,
 Email:String,
 Password: String
});

module.exports = mongoose.model('User',userSchema);
