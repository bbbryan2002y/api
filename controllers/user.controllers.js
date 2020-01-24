'user strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.model');

// primero funcion de api // lo que va aver el cliente 

function prueba (req, res){

    res.send({mensaje:'bienvenido'})
}

//creamos la funcion para regestrir un usuario
function SaveUser (req, res){
  var user = new User();
  var params = req.body;
  
  console.log(params);

  //resivir 
    
// los atributos que resive el servidor
  user.Name = params.name;
  user.Lastname = params.Lastname;
  user.Password = params.Password;
  user.Email = params.Password;

// revisar si envian un parametro (si envian o no envia la contraseña)
if(params.Password){
    // bcrypt.hash : encripta la contraseña---- se le envia 
   bcrypt.hash(params.Password, null, null, (err, hash)=>{
    user.Password = hash;
      
     if(user.Name != '' && user.Email != '' && user.Lastname !=''){
         user.save((err,usuario_guardado)=>{ 
            if(err){
                res.send({mensaje:'error al guardar usuario'});
            }else{
                if(!usuario_guardado){ 
                    res.send ({mensaje:'usuaro no guardado'});
                }else{
                    res.send({user:usuario_guardado});
                }

            }
         });

     }else{
        res.send({
            mensaje:'Todos los campos son obligatorios'
        });
     }

});
}else{
    res.send({
        mensaje:'contraseña obligatoria'
    });
}

}
module.exports = {
    prueba,
    SaveUser
}
