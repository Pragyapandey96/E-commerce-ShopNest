import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux'
'
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <Link to="/">
                <img src="/logo.png" alt='ShopNest logo' style={{ height: '36px', width: '36px' }} />
                ShopNest</Link>
            </div>
            <ul className='navbar-links'>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
                {user ? (
                    <>
                    <li><Link to="/profile">Hi, {user.name}</Link></li>
                    user.role === 'admin' && <li><Link to="/admin">Admin</Link></li>
                    <li><button onClick={handleLogout} className='btn-logout'>Logout</button></li>
                    </>
                ) : (
                     <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;