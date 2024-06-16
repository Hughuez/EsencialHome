const express = require('express');
const app = express();
const errorMiddleware= require("./middleware/errors");
const cookieParser= require("cookie-parser");

//uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

//Importar rutas
const productos = require('./routes/products'); // rutas productos
const usuarios=require("./routes/auth"); //rutas usuario

app.use('/api', productos);
app.use('/api',usuarios);

//MiddleWares para manejar errores
app.use(errorMiddleware);

module.exports = app;