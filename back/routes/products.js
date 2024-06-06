const express = require('express');
const router = express.Router();

const {
    getProducts, 
    newProduct, 
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productsController') //traemos la respuesta json desde el controlador

// rutas
router.route('/productos').get(getProducts); // Establecemos desde que ruta queremos ver getProducts
router.route('/producto/nuevo').post(newProduct); // Establecemos ruta para crear producto nuevo
router.route('/producto/:id').get(getProductById); // consulta por id
router.route('/producto/:id').put(updateProduct); // actualizacion de producto (update)
router.route('/producto/:id').delete(deleteProduct); // eliminar producto por id

module.exports = router;