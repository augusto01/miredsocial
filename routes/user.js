const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


//rutas de prueba 
router.get('/test',userController.userController);

module.exports = router;