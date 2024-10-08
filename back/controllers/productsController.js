const producto = require('../models/productos');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require('../utils/errorHandler');
const APIFeatures = require('../utils/apiFeatures');
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url)); //usurpacion del require
const cloudinary=require("cloudinary");

//Ver lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    const resPerPage = 4;
    const productsCount = await producto.countDocuments();

    const apiFeatures = new APIFeatures(producto.find(), req.query)
        .search()
        .filter();

    let products = await apiFeatures.query;
    let filteredProductsCount = products.length;
    apiFeatures.pagination(resPerPage);
    products = await apiFeatures.query.clone();


    res.status(200).json({
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    })


})

//ver producto por id
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    } else {
        res.status(200).json({
            success: true,
            message: '¡producto encontrado!:',
            product
        })
    }
})

// actualizar producto (update)
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    let imagen=[]

    if (typeof req.body.imagen=="string"){
        imagen.push(req.body.imagen)
    }else{
        imagen=req.body.imagen
    }
    if (imagen!== undefined){
        //eliminar imagenes asociadas con el producto
        for (let i=0; i<product.imagen.lenght; i++){
            const result= await cloudinary.v2.uploader.destroy(product.images[i].public_id)
        }

        let imageLinks=[]
        for (let i=0; i<imagen.lenght; i++){
            const result=await cloudinary.v2.uploader.upload(imagen[i],{
                folder:"products"
            });
            imageLinks.push({
                public_id:result.public_id,
                url: result.secure_url
            })
        }
        req.body.imagen=imageLinks
    }

    //Si el objeto si existia, entonces si ejecuto la actualización
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //Valido solo los atributos nuevos o actualizados
        runValidators: true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        product
    })
})

//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    let imagen=[]
    if(typeof req.body.imagen==="string"){
        imagen.push(req.body.imagen)
    }else{
        imagen=req.body.imagen
    }

    let imagenLink=[]

    for (let i=0; i<imagen.length;i++){
        const result = await cloudinary.v2.uploader.upload(imagen[i],{
            folder:"products"
        })
        imagenLink.push({
            public_id:result.public_id,
            url: result.secure_url
        })
    }

    req.body.imagen=imagenLink
    req.body.user = req.user.id;
    const product = await producto.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})

// eliminar producto
exports.deleteProduct = catchAsyncErrors(async (req, res, nex) => {
    const product = await producto.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: `producto id: ${req.params.id}, no encontrado`
        })
    } else {
        await product.deleteOne({ _id: req.params.id });

        res.status(200).json({
            success: true,
            message: 'Producto eliminado correctamente.'
        })
    }
})

//Crear o actualizar una review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comentario, idProducto } = req.body;

    const opinion = {
        nombreCliente: req.user.nombre,
        rating: Number(rating),
        comentario
    }

    const product = await producto.findById(idProducto);

    const isReviewed = product.opiniones.find(item =>
        item.nombreCliente === req.user.nombre)

    if (isReviewed) {
        product.opiniones.forEach(opinion => {
            if (opinion.nombreCliente === req.user.nombre) {
                opinion.comentario = comentario,
                    opinion.rating = rating
            }
        })
    } else {
        product.opiniones.push(opinion)
        product.numCalificaciones = product.opiniones.length
    }

    product.calificacion = product.opiniones.reduce((acc, opinion) =>
        opinion.rating + acc, 0) / product.opiniones.length

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "¡Hemos recibido tu opinión!"
    })

})

//Ver todas las review de un producto
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.id)

    res.status(200).json({
        success: true,
        nOpiniones: product.opiniones.length,
        opiniones: product.opiniones
    })
})

//Eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.idProducto);

    const opi = product.opiniones.filter(opinion =>
        opinion._id.toString() !== req.query.idReview.toString());

    const numCalificaciones = opi.length;

    const calificacion = opi.reduce((acc, Opinion) =>
        Opinion.rating + acc, 0) / opi.length;

    await producto.findByIdAndUpdate(req.query.idProducto, {
        opi,
        calificacion,
        numCalificaciones
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        message: "review eliminada correctamente"
    })

})

//Ver la lista de productos (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {

    const products = await producto.find()

    res.status(200).json({
        products
    })

})

/*
FETCH
-Es un recurso que nos ayuda a tener acceso a cierta informacion
-Es un modulo, por lo que para usarlo debemos instalarlo
-> no se puede llamar como un tipo objeto, por lo que hay que modificarlo USURPANDO EL REQUIRE para poder importarlo: const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));
- ventaja: 
(1) no necesito una herramienta como postman para acceder a informacion
(2) puedo guardar la informacino en una variable local para despues usarla
(3) puedo mostrarla en consola
*/

// ver todos los productos con fetch (Metodo)
function verProductos() {
    fetch('http://localhost:4000/api/productos')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

// verProductos();

// ver productos por id con fetch
function verProductoPorId(id) {
    fetch('http://localhost:4000/api/producto/' + id)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

// verProductoPorId('665fe704d34ed60007c4b252');

