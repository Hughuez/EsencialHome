const app = require('./app');
const connectDatabase = require('./config/database');
const cloudinary= require("cloudinary");

//CONFIGURAMOS EL ARCHIVO DE CONFIGURACION
const dotenv = require('dotenv');
dotenv.config({path: 'back/config/config.env'});

//CONFIGURAR BASE DE DATOS
connectDatabase();

//Configurar Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//Llamado al server
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}, modo ${process.env.NODE_ENV}`)
});