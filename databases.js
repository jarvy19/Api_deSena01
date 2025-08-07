const  mongoose= require('mongoose');
const DB='mongodb+srv://javierpedrazanunez19:FNH4acl1zP7P6HkX@gestione.fy3pcbl.mongodb.net/Prueba_api?retryWrites=true&w=majority&appName=GestionE';
mongoose.connect(DB)
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.error(err));

    module.exports = mongoose;
