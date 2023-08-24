var express = require('express'); 
var router = express.Router(); 
const sueldoController = require('../controllers').sueldoController; 

router.put('/updateSueldo/:id', sueldoController.updateSueldo);

module.exports = router;