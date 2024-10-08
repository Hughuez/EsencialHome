import React, { Fragment, useState, useEffect  } from 'react';
import { useAlert} from 'react-alert';
import MetaData from './layaout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import { useParams, Link } from 'react-router-dom';

import Pagination from 'react-js-pagination';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const params= useParams();
    const keyword= params.keyword;
    const { loading, products, error, resPerPage, productsCount } = useSelector(state => state.products)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getProducts(currentPage, keyword));
        alert.success('OK')
    }, [dispatch, error, alert, currentPage, keyword])

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <MetaData title='Inicio'></MetaData>
                    &nbsp;&nbsp;&nbsp;
                    <h1 id='Encabezado Productos'>Productos de la Semana</h1>

                    <section id="productos" className='container mt-5'>
                        <div className='row'>
                            {products && products.map(producto => (
                                <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                                            <div className='rating mt-auto'>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
                                                </div>
                                                <span id="No_de_opiniones"> {producto.numCalificaciones} Reviews </span>
                                            </div>
                                            <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="ver_producto" className='btn btn-block'>
                                                Ver detalle
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>

                    <div className='d-flex justify-content-center mt-5'>
                        <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText={'Siguiente'}
                        prevPageText={'Anterior'}
                        firstPageText={'Primera'}
                        lastPageText={'Ultima'}
                        itemClass='page-item'
                        linkClass='page-link'
                        />
                    </div>

                </Fragment>
            )}

        </Fragment>
    )
}

export default Home