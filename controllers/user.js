
const userController = (req, res)=>{

    res.status(200).send({
        message: 'Mensaje enviado desde el controlador :controllers/user.js'
    })
}



//exportar acciones
module.exports ={
    userController
}