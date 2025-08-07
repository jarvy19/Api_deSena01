const mongoose= require('mongoose');
const {Schema}=mongoose;
const EmpleadoSchema = new Schema({

    nombre: {type: String,
        require: [true, 'El nombre es oligatorio'],
        trim: true
    },

    puesto: {type: String,
        require: [true, 'El puesto es oligatorio'],
        trim: true
    },
    
   
    oficina:{ type: String,
        require: [true, 'El oficina es oligatorio'],
        trim: true
    },

    salario: {type:String,
        require: [true, 'El nombre es oligatorio'],
        main: [0, 'El salario es obligatorio']
 } },

    {
        timestamps: true,
        versionKey:false
    }

);

module.exports = mongoose.model('Apideprueba', EmpleadoSchema)