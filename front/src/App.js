import './App.css';
import React from 'react';
import Header from './components/layaout/Header';
import Footer from './components/layaout/Footer';
import Home from './components/Home';
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
          </Routes>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
