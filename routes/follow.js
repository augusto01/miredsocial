const express = require('express');
const router = express.Router();
const follow = require('../controllers/follow');


//rutas de prueba 
router.get('/follow',follow.followController);

module.exports = router;