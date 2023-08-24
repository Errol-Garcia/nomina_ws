var express = require('express'); 
var router = express.Router(); 
const descuentoController = require('../controllers').descuentoController; 

router.post('/createDescuento', descuentoController.addDescuento);
router.post('/updateDescuento/:id', descuentoController.UpdateDescuento);
router.post('/deleteDescuento/:id', descuentoController.DeleteDescuento);
router.post('/listDescuentos', descuentoController.list);

module.exports = router;