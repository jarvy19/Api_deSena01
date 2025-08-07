const  express = require('express');
const router= express.Router();
const productoControl= require ('../controllers/producto.controllers');
router.get('/', productoControl.getProductos);//obtener todos los empleados
router.get('/:id', productoControl.getProducto );
router.get('/codigo/:codigo', productoControl.getProducto1);
router.post('/', productoControl.createProducto  );
router.put('/:id', productoControl.updateProducto );
router.delete('/:id', productoControl.eliminarPoducto);

module.exports= router;