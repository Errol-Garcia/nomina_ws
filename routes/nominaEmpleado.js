var express = require('express'); 
var router = express.Router(); 
const nominaEmpleadoController = require('../controllers').nominaEmpleadoController; 

router.put('/updateNominaEmpleado/:id', nominaEmpleadoController.updateNominaEmpleado);

module.exports = router;