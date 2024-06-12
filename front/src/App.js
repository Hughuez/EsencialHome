import './App.css';
import React from 'react';
import Header from './components/layaout/Header';
import Footer from './components/layaout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
