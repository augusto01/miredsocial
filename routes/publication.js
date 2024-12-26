const express = require('express');
const router = express.Router();
const publicationControllers = require('../controllers/publication');


//rutas de prueba 
router.get('/publication', publicationControllers.publicationController);

module.exports = router;