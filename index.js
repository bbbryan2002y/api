// La base de la api
'use strict'
var mongoose = require('mongoose');
//process.env.port  = lo que hace es tomar el púerto que la da el el probedor y en caso que no que utilize el puerto ||3000;
var port = process.env.port || 3000;
//es es para poderse conectarse a la base de datos (cluster) ... (mondodb atlas)
var uri = 'mongodb+srv://bbbryan2002y:death.75@bryan-pyfdm.gcp.mongodb.net/test?retryWrites=true&w=majority';
// importamos el archivo de app.js que a acabomos de crear.
var app = require('./app')
//para poder conectarse a la base de datos (mongoose)
//es para que no bote un error que pide la conexion  ({useNewUrlParser:true,useUnifiedTopology:true})
// es para que muestro si hay errores ( catch( err => console.log(err)))

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> {
     console.log("Base de datos conectada");
    app.listen(port,function() {
    console.log('servidor local esta en el puerto',port);
    });
}).catch( err => console.log(err));