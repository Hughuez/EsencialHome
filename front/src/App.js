import './App.css';
import React from 'react';
import Header from './components/layaout/Header';
import Footer from './components/layaout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';
import Cart from './components/cart/Cart';
import { Login } from './components/user/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path="/Dashboard" element={<Dashboard />}/> 
            <Route path="/productList" element={<ProductsList />}/>
            <Route path="/nuevoProducto" element={<NewProduct />}/>
            <Route path="/search/:keyword" element={<Home />}/>
            <Route path="/carrito" element={<Cart />}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
