const Producto=require('../models/producto.modelo');
const productoControl={}

//definir metodos
//para productos

productoControl.getProductos=async (req, res) => {
    try {
        const productos= await Producto.find();
        res.json(productos);
    } catch (erro){
        res.status(500).json({ message: erro.message});
    }
};

//metodo para llamra por id 
productoControl.getProducto=async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    if(!producto){
        return res.status(404).json({message: 'Producto no encontrado'});
    }
    res.json(producto);
}

// Por codigo
productoControl.getProducto1=async (req, res) => {
    const producto = await Producto.findOne({codigo: parseInt(req.params.codigo)});
    if(!producto){
        return res.status(404).json({message: 'Producto no encontrado'});
    }
    res.json(producto);
}

//Crear empleados
productoControl.createProducto =async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.json({ status: 'Producto creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear Producto', error });
  }

}

//Actualizar empleados
productoControl.updateProducto= async (req, res) =>{
    const {id}= req.params;
    const producto= {
        codigo: req.body.codigo,
        nombre_Product: req.body.nombre_Product,
        costoUni: req.body.costoUni,
        costoTotal: req.body.costoTotal,
        unidades: req.body.unidades
    };
await Producto.findByIdAndUpdate(id, {$set: producto}, {new:true});
res.json({status:'Producto actualizado'});
}

//Eliminar empleado

productoControl.eliminarPoducto = async (req, res) =>{
   await Producto.findByIdAndDelete(req.params.id);
   res.json({satus: 'Producto eliminado'});
}

//Exportar moodulo
module.exports=productoControl;