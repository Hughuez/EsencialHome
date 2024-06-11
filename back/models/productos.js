const mongoose = require('mongoose');

const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true, 'Por Favor ingrese el nombre del producto'],
        trim:true,
        maxLength:[120,'El nombre del producto no debe exceder 120 caracteres']
    },
    precio:{
        type:Number,
        required:[true, 'Por Favor ingrese el precio del producto'],
        maxLength:[7,"El nombre del producto no debe exceder los 99'000.000"],
        default: 0.0
    },
    descripcion:{
        type:String,
        required:[true, 'Por Favor ingrese la descripción del producto'],
    },
    calificacion:{
        type:Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required: true
            },
            url:{
                type:String,
                required: true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true, 'Por Favor selecciones la categoría a la que pertenece el producto'],
        enum:{
            values:[
                'Ollas de cocina',
                'Juegos de vajilla',
                'Sartenes, woks, planchas y biferas',
                'Álbumes de fotos',
                'Jarros hervidores',
                'Portarretratos',
                'Candelabros',
                'Cuchillos de cocina',
                'Cafeteras eléctricas',
                'Cafeteras de estufa',
                'Cucharones',
                'Juegos de cubiertos',
                'Tablas de picar',
                'Termos',
                'Teteras y hervidoras',
                'Vasos y copas',
                'Tazas',
                'Artículos de cocina',
                'Azucareras y mieleras',
                'Carameleras y bomboneras',
                'Jarras para bebidas',
                'Jarras eléctricas',
                'Morteros de cocina',
                'Multiprocesadoras de alimentos',
                'Planchas',
                'Artefactos para el hogar',
                'Olletas y Lecheros'                  
            ]
        }
    },
    Distribuidor:{
        type:String,
        required:[true, 'Por Favor ingrese el distribuidor del producto'],
    },
    inventario:{
        type:Number,
        required:[true, 'Por favor registre el Stock del producto'],
        maxLength:[5, 'El Stock del inventario no puede superar los 9.999 articulos'],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('productos', productosSchema)