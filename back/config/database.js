const mongoose = require('mongoose');

//metodo que permite la conexion con la base de datos
const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        //useNewUrlParser: true, //(Deprecated)
        //useUnifiedTopology: true //(Deprecated)
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor ${con.connection.host}`)    
    }).catch(err => {
        console.error('Error al conectar con la base de datos:', err); //captura el error al conectarse a la base de datos
    });
}

module.exports = connectDatabase;