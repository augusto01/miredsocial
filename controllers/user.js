
const userController = (req, res)=>{

    res.status(200).send({
        message: 'Mensaje enviado desde el controlador :controllers/user.js'
    })
}

const register = (req, res) =>{
    return res.status(200).json({message:"Accion de registrar usuario"})


}



//exportar acciones
module.exports ={
    userController,
    register
}