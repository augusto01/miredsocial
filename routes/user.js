const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const check = require ('../middlewares/auth.js')

//======================= RUTAS DE PUBLICAS =============== 
router.get('/test',userController.userController);
router.get('/prueba-usuario',check.auth, userController.login)
router.get('/profile/:id', check.auth, userController.profile);


//======================= RUTAS DE USUARIOS POST =============== 
router.post('/register',userController.register);
router.post('/login',userController.login);

module.exports = router;