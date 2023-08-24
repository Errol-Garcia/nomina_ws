var express = require('express'); 
var router = express.Router(); 
const descuentoController = require('../controllers').descuentoController; 

router.post('/createDescuento', descuentoController.addDescuento);
router.put('/updateDescuento/:id', descuentoController.UpdateDescuento);
router.delete('/deleteDescuento/:id', descuentoController.DeleteDescuento);
router.get('/listDescuentos', descuentoController.list);

module.exports = router;