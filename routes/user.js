const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


//======================= RUTAS DE USUARIOS =============== 
router.get('/test',userController.userController);
router.post('/register',userController.register);

module.exports = router;