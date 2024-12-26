const user = require("../models/user");
const User = require("../models/user")
const userController = (req, res)=>{

    res.status(200).send({
        message: 'Mensaje enviado desde el controlador :controllers/user.js'
    })
}

const register = (req, res) =>{

    const params = req.body;
    

   


    

    //guardar usuario 
    let user_save = new User (params);
    console.log(user_save)

    //control de usuarios duplicados 
    User.find({$or :[
        {email: params.email.toLowerCase()},
        {nickname: params.nickname.toLowerCase()}
    ]}).exec((error, users) => {qs
        if (error) return res.status(500).json({
            status: "error",
            message: "Error en la consulta!"
        })

        if (users && users.length > 0){
            return res.status(200).json({
                status:"success",
                message: "El usuario ingresado ya existe !"
            })
        }


        return res.status(200).json({
                status:"success",
                message: "Usuario creado con exito !"
        })

        
    })


    return res.status(200).json({message:"Accion de registrar usuario",params})


}



//exportar acciones
module.exports ={
    userController,
    register
}