  const mongoose= require('mongoose');
  const {Schema}=mongoose;
  const ProductoSchema = new Schema({

      codigo: {type: Number,
        require: [true, "El codigo es obligatorio"],
        inique: true,
        trim: true, 
        inmutable: true //no cambia una vez creado
         },
  
      nombre_Product: {type: String,
          require: [true, 'El nombre es oligatorio'],
          trim: true
      },
  
      costoUni: {type: Number,
          require: [true, 'El puesto es oligatorio'],
          trim: true
      },
      
     
      costoTotal:{ type: Number,
          require: [true, 'El numero es obligatorio'],
          trim: true
      },
  
      unidades: {type: Number,
          require: [true, 'Las unidades son obligatorias'],
          main: [0, 'Las unidades son obligatorio']
   } },
  
      {
          timestamps: true,
          versionKey:false
      }
  
  );
  
  module.exports = mongoose.model('Apideprueba_producto', ProductoSchema)
  