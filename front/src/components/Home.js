import React, { Fragment } from 'react'

const Home = () => {
    return (
        <Fragment>
            <h1 id='Encabezado Productos'>Productos de la Semana</h1>

            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*TARJETA1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/products/olla_mini_perol_1.jpg' alt="Olla mini perol en piedra"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='Olla mini perol en piedra'>Olla mini perol en piedra</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href='Olla mini perol en piedra' id="ver_producto" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*TARJETA2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/products/multiusos_1.4.jpeg' alt="Chocolatera Multiusos"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='Chocolatera Multiusos'>Chocolatera Multiusos</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$142.000</p><a href='Chocolatera Multiusos' id="ver_producto" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*TARJETA3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/products/olla_swisshome_2lt_1.png' alt="olla_swisshome_2lt_1"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='olla_swisshome_2lt_1'>Olla Swisshome 2 Litros</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$132.000</p><a href='olla_swisshome_2lt_1' id="ver_producto" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*TARJETA4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/products/nutribullet_600_gris_1.jpg' alt="nutribullet_600_gris_1"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='nutribullet_600_gris_1'>Nutribullet 600</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                </div>
                                <p className='card-text'>$234.000</p><a href='nutribullet_600_gris_1' id="ver_producto" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default Home