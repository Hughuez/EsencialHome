const express = require('express');
const router = express.Router();

const {getProducts, newProduct} = require('../controllers/productsController') //traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver getProducts
router.route('/producto/nuevo').post(newProduct) // Establecemos ruta para crear producto nuevo

module.exports = router;