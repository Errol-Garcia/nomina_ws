var express = require('express'); 
var router = express.Router(); 
const empleadoController = require('../controllers').empleadoController; 

router.post('/createEmpleado', empleadoController.addEmpleado);
router.get('/getEmpleados', empleadoController.list);
router.delete('/deleteEmpleado/:idempleado', empleadoController.deleteEmpleado);
router.put('/updateEmpleado/:id', empleadoController.UpdateEmpleado);

module.exports = router;