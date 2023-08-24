var express = require('express'); 
var router = express.Router(); 
const cargoController = require('../controllers').cargoController; 

router.get('/listCargo', cargoController.list);
router.get('/getCargoById/:id', cargoController.getById);

module.exports = router;