import React, { Fragment, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import {Link } from "react-router-dom";

import MetaData from '../layaout/MetaData';
import Sidebar from './Sidebar';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, deleteProduct, getAdminProducts } from '../../actions/productsActions'

const ProductsList = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.products);

    const deleteProductHandler= (id)=> {
        const response=window.confirm("Esta seguro de querer borrar este producto?")
        if (response){
            dispatch(deleteProduct(id))
            alert.success("Producto eliminado correctamente")
            window.location.reload(false)
        }
    }

    useEffect(() => {
        dispatch(getAdminProducts());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'inventario',
                    sort: 'asc'
                },
                {
                    label: 'Distribuidor',
                    field: 'distribuidor',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },
            ],
            rows: []
        }

        products.forEach(product => {
            data.rows.push({
                nombre: product.nombre,
                precio: `$${product.precio}`,
                inventario: product.inventario,
                distribuidor: product.distribuidor,
                acciones: <Fragment>
                    <Link to={`/producto/${product._id}`} className="btn btn-primary py-1 px-1">
                        <i className="fa fa-eye"></i>
                    </Link><Link to={`/updateProduct/${product._id}`} className="btn btn-warning py-1 px-1">
                    <i class="fa fa-pencil"></i>
                    </Link>

                    <button className="btn btn-danger py-1 px-1" onClick={() => deleteProductHandler(product._id)}>
                        <i className="fa fa-trash"></i>
                    </button>


                </Fragment>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'All Products'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Productos Registrados</h1>

                        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}
export default ProductsList