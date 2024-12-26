//dependencias 
const express = require('express');
const cors = require('cors');
const {connection} = require('./database/connection');


//conexion a la bd
connection();



//crear servidor node
const app = express();
const puerto = 3900;

//configurar corse
app.use(cors());

//convertir datos del body a objetos json 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cargar conf rutas 


//rutas
const userRoutes = require('./routes/user.js');
const followsRoutes = require('./routes/follow.js');
const publicationRoutes = require('./routes/publication.js');


app.use("/api", userRoutes)
app.use("/api", publicationRoutes)
app.use("/api", followsRoutes)

app.get('/ruta_prueba', (req, res) =>{
    return res.status(200).json({
        mensaje: 'ruta de prueba'
    });
})

//Poner servidor a escurchar peticiones http 

app.listen(puerto, () =>{
    console.log('Servidor corriendo en el puerto', puerto);
});
