const express=require("express");
const { 
    registroUsuario, 
    loginUser,
    logOut,
    forgotPassword,
    resetPassword,
    getUserProfile, 
    updatePassword,
    updateProfile,
    getAllUsers,
    getUserDetails,
    updateUser
} = require("../controllers/authController");
const { 
    isAuthenticatedUser,
    authorizeRoles 
} = require("../middleware/auth");
const router= express.Router();

router.route('/usuario/registro').post(registroUsuario); // registro usuario nuevo
router.route('/login').get(loginUser); //login - iniciar sesion
router.route('/logout').get(isAuthenticatedUser, logOut); //logout - cerrar cesion
router.route("/forgotPassword").post(forgotPassword); // olvide contraseña - recuperar contraseña
router.route('/resetPassword/:token').post(resetPassword); //recuperar contraseña
router.route('/mycount').get(isAuthenticatedUser, getUserProfile) // ver usuario por id
router.route('/mycount/updatePassword').put(isAuthenticatedUser, updatePassword) //actualizacion contraseña 
router.route('/mycount/updateProfile').put(isAuthenticatedUser, updateProfile) // actualizar perfil

//rutas admin
router.route('/admin/allUsers').get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers) //ver usuarios desde admin
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails) //ver detalle de usuario desde admin
router.route('/admin/updateUser/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateUser) // actualizar usuario desde admin


module.exports= router