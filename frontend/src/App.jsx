import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ReturnPolicy from './pages/ReturnPolicy';
import Disclaimer from './pages/Disclaimer';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/return' element={<ReturnPolicy />} />
           <Route path='/disclaimer' element={<Disclaimer />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/products/:id' element={<ProductDetails />} />
           <Route path='/cart' element={<Cart />} />
           <Route path='/checkout' element={<Checkout />} />
           </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
