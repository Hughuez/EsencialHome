import React, { Fragment } from 'react'

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src='./images/esencialHome.png' alt='Logo Esencial Home'></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className='input-group'>
                    <input
                        type='text'
                        id='serach_field'
                        className='form-control'
                        placeholder='¿Qué buscas para tu hogar?'></input>
                    <div className='input-group-append'>
                        <button id='search-btn' class='btn'>
                            <i class='fa fa-search-plus fa-lg' aria-hidden='true'></i>
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            
            <div className='col-12 col-md-3 mt-4 mt-md-0 tex-center'>
                <span><button type='button' class='btn btn-warning'>Ingresar</button></span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class='fa fa-shopping-cart fa-2x' aria-hidden='true'></i>
                <span className='ml-1' id='cart_count'>2</span>
            </div>
        </nav>
    </Fragment>
  )
}

export default Header