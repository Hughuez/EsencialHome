const User = require("../models/auth"); 
const ErrorHandler= require("../utils/errorHandler");
const catchAsyncErrors= require("../middleware/catchAsyncErrors");

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"imageUser",
            url:"./images/imageUser.png"
        }
    })

    res.status(201).json({
        success:true,
        user
    })
})