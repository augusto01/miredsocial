const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const check = require ('../middlewares/auth.js')

//======================= RUTAS DE USUARIOS GET  =============== 
router.get('/test',userController.userController);
router.get('/prueba-usuario',check.auth, userController.login);
router.get('/profile/:id', check.auth, userController.profile);
router.get('/listar-usuarios/', userController.listar_usuarios);

router.get('/list/:page?', check.auth, userController.list)

//======================= RUTAS DE USUARIOS POST =============== 
router.post('/register',userController.register);
router.post('/login',userController.login);

module.exports = router;

