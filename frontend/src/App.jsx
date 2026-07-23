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
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Admin from './admin/AdminDashboard';
import AddProduct from './admin/AddProduct';
import AdminProducts from './admin/AdminProducts';
import AdminOrders from './admin/AdminOrders';
import AdminUsers from './admin/AdminUsers';
import EditProduct from './admin/EditProduct';

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
           <Route path='/profile' element={<Profile />} />
           <Route path='/admin' element={<Admin />} />
           <Route path='/admin/add-product' element={<AddProduct />} />
           <Route path='/admin/products' element={<AdminProducts />} />
           <Route path='/admin/orders' element={<AdminOrders />} />
           <Route path='/admin/users' element={<AdminUsers />} />
           <Route path='/admin/edit-product/:id' element={<EditProduct />} />
           </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
