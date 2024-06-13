const express=require("express");
const { registroUsuario } = require("../controllers/authController");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario); // registro usuario nuevo

module.exports= router