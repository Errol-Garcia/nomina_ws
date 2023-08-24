var express = require('express'); 
var router = express.Router(); 
const departamentoController = require('../controllers').departamentoController; 

router.post('/createDepartamento', departamentoController.addDepartamento);
router.put('/updateDepartamento/:id', departamentoController.UpdateDepartamento);
router.delete('/deleteDepartamento/:id', departamentoController.DeleteDepartamento);
router.get('/listDepartamentos', departamentoController.list);

module.exports = router;