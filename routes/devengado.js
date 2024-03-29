var express = require('express'); 
var router = express.Router(); 
const devengadoController = require('../controllers').devengadoController; 

router.get('/listDevengados', devengadoController.list);
router.put('/updateDevengado/:id', devengadoController.UpdateDevengado);

module.exports = router;