// Rutas de conexión
const express= require('express');
const cors= require('cors');
const morgan = require('morgan');
const app= express() //Instania de express
const {mongooseConnect} = require('./databases'); //ruta para conexion a base de datos

app.set('port', process.env.PORT || 3000); //Puertos donde escuchara
app.use(morgan('dev'));
app.use(express.json()); //Convertir datos en formato json
app.use(cors({origin:'http://localhost:4200'}));//Establece la conexion y el puerto donde escuvhara

//rutas donde se harans las cosas
app.use('/Apideprueba', require('./routes/empleado.routes'));
//app.use('producto'), require('./routes/producto.routes');

//definir puerto de escucha
app.listen(app.get('port'), () => {
    console.log('servidor escuchando:', app.get('port'));
});