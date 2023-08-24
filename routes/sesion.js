var express = require('express'); 
var router = express.Router(); 
const sesionController = require('../controllers').sesionController; 

router.post('/getSesion/:user/:password', sesionController.getSesion);

module.exports = router;