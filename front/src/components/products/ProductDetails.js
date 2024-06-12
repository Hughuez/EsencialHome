import React, { Fragment } from 'react'
import MetaData from "../layaout/MetaData"

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Nutribullet 600"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src="../../images/products/nutribullet_600_gris_1.jpg" alt="Imagen_producto" height="450" width="450"></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>Nutribullet 600</h3>
                <p id="product_id">Product #3253252</p>
            </div>
        </div>
    </Fragment>
  )
}