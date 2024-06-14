import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../layaout/MetaData';


const Cart = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQty = () => {
        const contador = document.querySelector('.count')
        const qty = contador.valueAsNumber+1;
        setQuantity(qty)
     }

     const decreaseQty = () => {
      const contador = document.querySelector('.count')

      const qty = contador.valueAsNumber-1;
      setQuantity(qty)
   }

    //Json de ejemplo
   let cartItems=[
        {
            "_id": "66651d0ef1c9833fb88602e7",
            "nombre": "Olleta Chocolatera Multiusos 1.4 Litros",
            "precio": 192000,
            "imagen": "./images/products/multiusos_1.4.jpeg",
            "inventario": 40,
        },
        {
            "_id": "66651eaef1c9833fb88602ea",
            "nombre": "Olla En Acero Quirúrgico Swisshome 2 Litros Acero Suizo",
            "precio": 110000,
            "imagen": "./images/products/olla_swisshome_2lt_1.png",
            "inventario": 120,
        },
        {
            "_id": "666527f5f1c9833fb88602ee",
            "nombre": "Nutribullet 600 Extractor De Jugos Swisshome",
            "precio": 305000,
            "imagen": "./images/products/nutribullet_600_gris_1.jpg",
            "inventario": 20,
        },
        {
            "_id": "66653b1ef1c9833fb886030a",
            "nombre": "Tostadora De Pan Eléctrica Hamilton Beach 22680",
            "precio": 245000,
            "imagen":  "./images/products/tostadora_hamilton_beach_1.png",
            "inventario": 200,
        }
    ]

cartItems = Array.from(cartItems);

    return (
        <Fragment>
            <MetaData title={'Your Cart'} />


            {cartItems.length === 0 ? <h2 className="mt-5">Mi carrito esta vacio</h2> : (
                <Fragment>

                    <h2 className="mt-5">Mi Carrito: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                        {cartItems && cartItems.map (item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.nombre}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.imagen} alt={item.nombre} height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.precio}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>

                        ))}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Total de la Compra</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">$350.000</span></p>
                                <p>Est. total: <span className="order-summary-values">$380.000</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block">Comprar!</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Cart