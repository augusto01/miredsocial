//importar modulos 
const jwt = require ('jwt-simple');
const moment = require ('moment')

//importar secreto 
const libjwt = require("../services/jwt.js") 
const secret =  libjwt.secret


//middlewere de autenticacion
exports.auth =  (req, res, next) =>{
    if(!req.headers.authorization){
        return res.status(403).json({
            status: "error",
            message: "La peticion de la cabecera no tiene autenticacion"
        })
    }

    //limpiar el token
    let token = req.headers.authorization.replace(/['"]+/g, '');

    //decodificacion
    try {
        let payload = jwt.decode(token, secret)

        //comprobar expiracion 
        if(payload.exp <= moment().unix()){
            return res.status(401).json({
                status: "error",
                message: "token expirado",
                error
            });
        }
        
        //agregar datos a usuario 
        req.user = payload;
    }catch(error){
        return res.status(404).json({
            status: "error",
            message: "Token invalido"
        })
    }

   

    next();
}
