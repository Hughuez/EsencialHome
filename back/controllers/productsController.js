exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        messahe: 'En esta ruta apareceran todolos los productos'
    })
}