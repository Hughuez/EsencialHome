const express=require("express");
const { 
    registroUsuario, 
    loginUser,
    logOut,
    forgotPassword,
    resetPassword
} = require("../controllers/authController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario); // registro usuario nuevo
router.route('/login').get(loginUser); //login - iniciar sesion
router.route('/logout').get(isAuthenticatedUser, logOut); //logout - cerrar cesion
router.route("/forgotPassword").post(forgotPassword); // olvide contraseña - recuperar contraseña
router.route('/resetPassword/:token').post(resetPassword); //recuperar contraseña

module.exports= router