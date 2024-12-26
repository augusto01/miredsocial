
const pruebaFollow = (req, res)=>{

    res.status(200).send({
        message: 'Mensaje enviado desde el controlador :controllers/follow.js'
    })
}



//exportar acciones
module.exports ={
    pruebaFollow
}