
const pruebaPublication = (req, res)=>{

    res.status(200).send({
        message: 'Mensaje enviado desde el controlador :controllers/publication.js'
    })
}



//exportar acciones
module.exports ={
    pruebaPublication
}