var express = require('express'); 
var router = express.Router(); 
const empleadoController = require('../controllers').empleadoController; 

router.post('/createEmpleado', empleadoController.addEmpleado);
router.post('/getEmpleados', empleadoController.list);
router.post('/deleteEmpleado/:idempleado', empleadoController.deleteEmpleado);
router.post('/updateEmpleado/:id', empleadoController.UpdateEmpleado);

module.exports = router;