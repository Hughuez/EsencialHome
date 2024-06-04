const app = require('./app');
const connectDatabase = require('./config/database');


//CONFIGURAMOS EL ARCHIVO DE CONFIGURACION
const dotenv = require('dotenv');
dotenv.config({path: 'back/config/config.env'});

//CONFIGURAR BASE DE DATOS
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}, modo ${process.env.NODE_ENV}`)
});