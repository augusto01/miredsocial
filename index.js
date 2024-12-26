//dependencias 
const express = require('express');
const cors = require('cors');
const {connection} = require('./database/connection');

//================ CONEXION BD ================
connection();




//================LEVANTAR SERVER ================
    const app = express();
    const puerto = 3900;

    //configurar corse
    app.use(cors());

    //convertir datos del body a objetos json 
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));


//================ RUTAS - CONFIGURACION ================
    const userRoutes = require('./routes/user.js');
    const followsRoutes = require('./routes/follow.js');
    const publicationRoutes = require('./routes/publication.js');


    app.use("/api", userRoutes)
    app.use("/api", publicationRoutes)
    app.use("/api", followsRoutes)



//================ ESCUCHAR PETICIONES HTTP ================

    app.listen(puerto, () =>{
        console.log('Servidor corriendo en el puerto', puerto);
    });
