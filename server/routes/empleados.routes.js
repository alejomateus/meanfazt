var express =require('express');
var router = express.Router();
var empleadorCtrl =require('../controllers/empleado.controller.js')

router.get('/',empleadorCtrl.getEmpleados);

router.post('/',empleadorCtrl.createEmpleados);

router.get('/:id',empleadorCtrl.getEmpleado);

router.put('/:id',empleadorCtrl.editEmpleado);

router.delete('/:id',empleadorCtrl.deleteEmpleado);

module.exports= router;
