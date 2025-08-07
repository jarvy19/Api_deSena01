const Empleado=require('../models/empleado.modelo');
const empleadoCrontol={}

//definir metodos

//para empleados

empleadoCrontol.getEmpleados=async (req, res) => {
    try {
        const empleados= await Empleado.find();
        res.json(empleados);
    } catch (erro){
        res.status(500).json({ message: erro.message});
    }
};

//metodo para llamra ppor id 
empleadoCrontol.getEmpleado=async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    if(!empleado){
        return res.status(404).json({message: 'Empleado no encontrado'});
    }
    res.json(empleado);
}

//Crear empleados
empleadoCrontol.createEmpleado =async (req, res) => {
  try {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.json({ status: 'Empleado creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear empleado', error });
  }

}

//Actualizar empleados
empleadoCrontol.updateEmpleado= async (req, res) =>{
    const {id}= req.params;
    const empleado= {
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        oficina: req.body.oficina,
        salario: req.body.salario
    };
await Empleado.findByIdAndUpdate(id, {$set: empleado}, {new:true});
res.json({status:'Empleado actualizado'});
}

//Eliminar empleado

empleadoCrontol.eliminarEmpleado = async (req, res) =>{
   await Empleado.findByIdAndDelete(req.params.id);
   res.json({satus: 'Empleado eliminado'});
}

//Exportar moodulo
module.exports=empleadoCrontol;