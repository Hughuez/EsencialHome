const producto = require('../models/productos');

//Ver lista de productos
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'En esta ruta apareceran todolos los productos'
    })
}

//crear un nuevo producto
exports.newProduct = async(req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
}