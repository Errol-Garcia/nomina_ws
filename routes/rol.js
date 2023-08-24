var express = require('express'); 
var router = express.Router(); 
const rolController = require('../controllers').rolController; 

router.get('/getRolById/:id', rolController.getRolById);

module.exports = router;