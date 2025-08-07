const  mongoose= require('mongoose');
require('dotenv').config();
const DB_igore=process.env.DB_URI
const DB=DB_igore;
mongoose.connect(DB)
    .then(db => console.log("Base de datos conectada"))
    .catch(err => console.error(err));

    module.exports = mongoose;
