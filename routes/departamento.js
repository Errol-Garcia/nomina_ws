var express = require('express'); 
var router = express.Router(); 
const departamentoController = require('../controllers').departamentoController; 

router.post('/createDepartamento', departamentoController.addDepartamento);
router.post('/updateDepartamento/:id', departamentoController.UpdateDepartamento);
router.post('/deleteDepartamento/:id', departamentoController.DeleteDepartamento);
router.post('/listDepartamentos', departamentoController.list);

module.exports = router;