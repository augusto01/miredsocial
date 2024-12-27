const user = require("../models/user");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const userController = (req, res)=>{

    res.status(200).send({
        message: 'Mensaje enviado desde el controlador :controllers/user.js'
    })
}

//==============    REGISTRAR USUARIO   =================//

const register = async (req, res) => {
    const params = req.body;

   
    let user_save = new User(params);

    // Control de usuarios duplicados
    try {
        const users = await User.find({
            $or: [
                { email: params.email.toLowerCase() },
                { nickname: params.nick.toLowerCase() }
            ]
        }).exec();

        if (users && users.length > 0) {
            return res.status(200).json({
                status: "success",
                message: "El usuario ingresado ya existe!"
            });
        }

        // Cifrado de contraseña
        user_save.password = await bcrypt.hash(user_save.password, 10);

        // Guardar el nuevo usuario en la base de datos
        await user_save.save();

        return res.status(201).json({
            status: "success",
            message: "Usuario registrado correctamente!",
            user: user_save
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Error en la consulta!"
        });
    }
};

//==============    LOGIN USUARIO   =================//

const login = async  (req,res)=>{
    try{
        const params = req.body;
        const user = await User.findOne({email: params.email});
        if(!user){
            return res.status(404).json("El usuario no existe!");
        }else{
            return res.status(200).json(user);
            //logica para verificar contraseña
        }    
        
    }catch(error){
        return res.status(500).json({
            message: "Error del servidor",
            error: error.message
        })
    }
}





//exportar acciones
module.exports ={
    userController,
    register,
    login
}