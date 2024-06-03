const app = require('./app');

//CONFIGURAMOS EL ARCHIVO DE CONFIGURACION
const dotenv = require('dotenv');
dotenv.config({path: 'back/config/config.env'});

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}, modo ${process.env.NODE_ENV}`)
});