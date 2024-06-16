const express=require("express");
const { registroUsuario, loginUser } = require("../controllers/authController");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario); // registro usuario nuevo
router.route('/login').get(loginUser) //login - iniciar sesion

module.exports= router