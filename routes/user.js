const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const auth = require ('../middlewares/auth.js')

//prueba 
router.get("/prueba-usuario",auth.auth, userController.login)



//======================= RUTAS DE USUARIOS =============== 
router.get('/test',userController.userController);
router.post('/register',userController.register);
router.post('/login',userController.login);

module.exports = router;