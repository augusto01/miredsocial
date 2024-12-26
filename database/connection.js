const mongoose = require('mongoose');

const connection = async () =>{

    try{
        await mongoose.connect("mongodb://localhost:27017/mi-red-social");
        console.log('Conectado a la base de datos');

    }catch(error){
        console.log('Error al conectar a la base de datos', error);
    } 
}


module.exports = {
    connection

};