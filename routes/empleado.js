var express = require('express'); 
var router = express.Router(); 
const empleadoController = require('../controllers').empleadoController; 

router.post('/createEmpleado', empleadoController.addEmpleado);
router.get('/GetEmpleadoByCedula/:idcedula', empleadoController.getEmpleadoByCedula);
router.get('/listEmpleados', empleadoController.list);
router.delete('/deleteEmpleado/:idempleado', empleadoController.deleteEmpleado);
router.put('/updateEmpleado', empleadoController.UpdateEmpleado);

module.exports = router;