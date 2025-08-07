const  express = require('express');
const router= express.Router();
const empleadoCrontol= require ('../controllers/empleado.controllers');
router.get('/', empleadoCrontol.getEmpleados);//obtener todos los empleados
router.get('/:id', empleadoCrontol.getEmpleado );
router.post('/', empleadoCrontol.createEmpleado  );
router.put('/:id', empleadoCrontol.updateEmpleado );
router.delete('/:id',empleadoCrontol.eliminarEmpleado);

module.exports= router;
