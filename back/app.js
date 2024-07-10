const express = require('express');
const app = express();
const errorMiddleware= require("./middleware/errors");
const cookieParser= require("cookie-parser");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

//uso de constantes importadas
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(fileUpload());

//Importar rutas
const productos = require('./routes/products'); // rutas productos
const usuarios=require("./routes/auth"); //rutas usuario
const ordenes=require("./routes/orders") //rutas ordenes

app.use('/api', productos);
app.use('/api',usuarios);
app.use('/api', ordenes);

//MiddleWares para manejar errores
app.use(errorMiddleware);

module.exports = app;