const express = require('express');
const router = express.Router();

const {
    getProducts, 
    newProduct, 
    getProductById,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview
} = require('../controllers/productsController') //traemos la respuesta json desde el controlador
const { 
    isAuthenticatedUser, 
    authorizeRoles
} = require("../middleware/auth");

// rutas
router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); // Establecemos ruta para crear producto nuevo
router.route('/producto/:id').get(getProductById); // consulta por id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct); // actualizacion de producto (update)
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); // eliminar producto por id

router.route("/review").put(isAuthenticatedUser, createProductReview) //crear una review
router.route("/reviews").get(getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

module.exports = router;