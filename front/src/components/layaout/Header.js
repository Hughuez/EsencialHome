import React, { Fragment } from 'react';
import "../../App.css"
import {Link} from "react-router-dom"
import Search from './Search';

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <Link to="/" ><img src='../images/esencialHome.png' alt='Logo Esencial Home'></img></Link>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <Search />
            </div>
            
            <div className='col-12 col-md-3 mt-4 mt-md-0 tex-center'>
            <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle mr-4" type="button"
                        id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Menú</span></Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                <Link className="dropdown-item" to="/Dashboard">Adm. Productos</Link>
                                <Link className="dropdown-item" to="/">Pedidos</Link>
                                <Link className="dropdown-item" to="/">Mi cuenta</Link>
                                <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                            </div>
                              
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/carrito"><i class='fa fa-shopping-cart fa-2x' aria-hidden='true'></i></Link>
                <span className='ml-1' id='cart_count'>2</span>
            </div>
        </nav>
    </Fragment>
  )
}

export default Header